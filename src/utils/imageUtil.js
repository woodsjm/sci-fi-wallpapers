const imageUtil = async (service, testing, cloudinaryRequestInfo) => {
     if (testing === true) {
        const testarr = [
            [
              "test/miami", 
              "test/hooverdam", 
              "test/geometric",
              "test/metropolis",
              "test/miami", 
              "test/hooverdam", 
              "test/geometric",
              "test/metropolis"
            ], 
            [
              "test/metropolis", 
              "test/storm", 
              "test/hooverdam",
              "test/cubes"
            ], 
            [
              "test/cubes", 
              "test/europe", 
              "test/neon",

            ], 
            [
              "test/planets",
              "test/vietnam"
            ]
        ]

        return testarr 
     } else {
        // Refactor serviceHandler
        if (cloudinaryRequestInfo) {
          const imageData = await imageServices[service](cloudinaryRequestInfo)
          return imageData
        } else {
          const imageData = await imageServices[service]()
          return imageData
        }
     }
}

const getAttachmentUrl = async (reqInfo) => {
  try {
    const downloadImageResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/download`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({source: reqInfo.source, options: reqInfo.options}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const parsedResponse = await downloadImageResponse.json();
    if (parsedResponse.status.code == 200) {
      return parsedResponse.data
    }
  } catch(err) {
    console.log(err)
  }
}

const getImageData = async () => {
    try {
        const responseGetImageData = await fetch(`${process.env.REACT_APP_API_URL}/api/images`, {
            credentials: 'include',
            method: 'GET'
        })
        const parsedResponse = await responseGetImageData.json();
        return parsedResponse.data
    } catch (error) {
        console.error(error)
        return error
    }
}

// const handleService = (service) => {
//     const fetchResult = imageServices[service]()
//     return fetchResult
// }

const imageServices = {getImages: getImageData, getAttachmentUrl: getAttachmentUrl}

export { imageUtil }