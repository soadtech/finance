import { sendRequest, sendPostRequest } from "../utils/service"
export async function getService (name, dataRequest) {
    const path = `/admin/students/${name}`
    const data = await AsyncStorage.getItem('userToken')
    let token
    if (!data) {
        token = dataRequest.token
    } else {
        token = data
    }
    const options = { token }
    delete dataRequest.token
    try {
        const result = await sendRequest(path, options)
        return result
    } catch (error) {
        console.log(error)
    }

}
export async function postService (name, dataRequest) {
    const path = `/admin/students/${name}`
    const data = await AsyncStorage.getItem('userToken')
    let token
    if (!data) {
        token = dataRequest.token
    } else {
        token = data
    }
    const options = { token }
    delete dataRequest.token
    try {
        const result = await sendPostRequest(path, dataRequest, options)
        return result
    } catch (error) {
        console.log(error)
    }

}
