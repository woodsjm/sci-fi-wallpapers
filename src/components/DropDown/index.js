import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const DropdownExample = ({ options }) => {
  const handleChange = (event, data) => {
    event.preventDefault()
    const { value } = data
    const { key } = data.options.find(option => option.value === value)
    console.log(data.options)
    console.log(value)
    console.log(key)
  }
  
  return(
    <div>
      <Dropdown
        placeholder='No filter'
        closeOnBlur
        selection
        options={options}
        onChange={handleChange}
      />
    </div>
  )
}

export default DropdownExample