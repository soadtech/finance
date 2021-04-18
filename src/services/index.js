import { APP_API_URL } from "../config"

export async function sendRequest (path, options) {
    const headers = options.headers || new Headers()
    headers.append('content-type', 'application/json')
    let url = `${APP_API_URL}${path}`

    if (options.token) {
        headers.append('Authorization', `Bearer ${options.token}`)
    }
    console.log("url ->", url)
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization': `Bearer ${options.token}`
            }
        })
        if (response.ok) {
            const data = await response.json()
            return data
        }
        return await response.json()
    } catch (error) {
        console.log(error)
    }

}
export async function sendPostRequest (path, data, options) {
    const headers = options.headers || new Headers()
    headers.append('content-type', 'application/json')

    let url = `${APP_API_URL}${path}`

    if (options.token) {
        headers.append('Authorization', `Bearer ${options.token}`)
    }
    console.log("url ->", url)
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(data),
        })
        if (response.ok) {

            const data = await response.json()
            // if (rest.errorCode) {
            //     throw new Error(rest.message)
            // }
            return data
        }
        return await response.json()
        //throw new Error(error)
    } catch (error) {
        console.log(error)
    }

}


