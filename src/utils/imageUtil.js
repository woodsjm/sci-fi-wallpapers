const imageUtil = async (service, testing) => {
     if (testing === true) {
        const testarr = [
            [
              "test/neon", 
              "test/vietnam", 
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
              "test/miami",

            ], 
            [
              "test/planets"
            ]
        ]

        return testarr 
     } else {
        const imageData = await handleService(service)
        return imageData.data
     }
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