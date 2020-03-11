import React, { Component } from 'react'
import request from 'superagent'

import Dropzone from 'react-dropzone'

const CLOUDINARY_UPLOAD_PRESET = 'uuopwntn'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dlwxbby8o/image/upload'


class UploadForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: ''
        }
        this.onImageDrop = this.onImageDrop.bind(this)
        this.handleImageUpload = this.handleImageUpload.bind(this)
    }

    onImageDrop = (files) => {
        this.setState({
          uploadedFile: files[0]
        })

        this.handleImageUpload(files[0])
    }

    handleImageUpload = (file) => {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                         .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                         .field('file', file);

        upload.end((err, response) => {
          if (err) { console.error(err) }
          if (response.body.secure_url !== '') {
            this.setState({
              uploadedFileCloudinaryUrl: response.body.secure_url
            })
          }
        })
    }

    render(){
        return(
            <div>

                <div className="FileUpload">
                  <Dropzone
                      onDrop={this.onImageDrop}
                      accept="image/*"
                      multiple={false}>
                        {({getRootProps, getInputProps}) => {
                          return (
                            <div
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              {
                              <p>Try dropping some files here, or click to select files to upload.</p>
                              }
                            </div>
                          )
                      }}
                    </Dropzone>
                </div>

                <div>
                  {this.state.uploadedFileCloudinaryUrl === '' ? null :
                  <div>
                    <p>{this.state.uploadedFile.name}</p>
                    <img src={this.state.uploadedFileCloudinaryUrl} />
                  </div>}
                </div>
            
            </div>
        )
    }
}

export default UploadForm