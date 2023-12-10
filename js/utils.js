const postData = async (url, data) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(data);
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    return await fetch(url, requestOptions)
}

const getDataById = async (url, id) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    const response = await fetch(`${url}/${id}`, requestOptions)
    const data = await response.json()
    return data
}

const updateData = async (url, id, data) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(data);
    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    const response = await fetch(`${url}/${id}`, requestOptions)
    return await response.json()
}

export { postData, getDataById, updateData }
