const imageUtil = async (service) => {  
     const imageData = await handleService(service)
     return imageData
}

const getImageData = async () => {
    try {
        const responseGetImageData = await fetch(`http://localhost:8000/api/images`, {
            credentials: 'include',
            method: 'GET'
        })
        const dataResponse = await responseGetImageData.json();
        return dataResponse

    } catch (error) {
        console.error(error)
        return error
    }
}

const handleService = (service) => {
    const fetchResult = imageServices[service]()
    return fetchResult
}

const imageServices = {getImages: getImageData}

export { imageUtil }