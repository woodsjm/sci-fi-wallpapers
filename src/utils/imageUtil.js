const imageUtil = async (service, testing, target, source) => {
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
        const imageData = await imageServices[service](target, source)
        return imageData
     }
}

const getAttachmentUrl = async (target, source) => {
  console.log(target)
  console.log(source)
  try {
    const downloadImageResponse = await fetch('http://localhost:8000/api/download', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({source: source, target: target}),
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

// const handleService = (service) => {
//     const fetchResult = imageServices[service]()
//     return fetchResult
// }

const imageServices = {getImages: getImageData, getAttachmentUrl: getAttachmentUrl}

export { imageUtil }