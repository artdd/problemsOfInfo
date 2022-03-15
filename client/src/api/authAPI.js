import {$api} from "./index"

export const auth = async(data) => {
    try {
        const response = await $api.post('/auth',data)
        return response
    }catch (e){

    }

}