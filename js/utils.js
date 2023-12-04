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
    const data = await response.text()
    console.log(data);
    return data
}
  
//   fetch("https://sofiae99.pythonanywhere.com/mascotas", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

export { postData, getData }