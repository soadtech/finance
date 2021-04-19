import { APP_API_URL } from "../config"
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function sendRequest (path, options) {
    const headers = options.headers || new Headers()
    headers.append('content-type', 'application/json')
    let url = `${APP_API_URL}${path}`

    const token = await getToken()
    console.log("url ->", url)
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token.token}`
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

    let url = `${APP_API_URL}${path}`;

    // if (token) {
    //     headers.append('Authorization', `Bearer ${token}`)
    // }
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

const getToken = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@token')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
        // saving error
    }
}
export const saveToken = async (value) => {
    try {
        await AsyncStorage.setItem('@token', value)
    } catch (e) {
        // saving error
    }
}