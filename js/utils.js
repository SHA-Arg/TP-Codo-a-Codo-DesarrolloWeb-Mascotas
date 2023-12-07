const postData = async (url, data, request = 'POST') => {
    const response = await fetch(url, {
        method: request,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
}

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    mode:  'no-cors'
};

const getData = async (url) => {
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    console.log(data);
    return data
}


export { postData, getData }