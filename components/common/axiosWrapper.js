import axios from "axios";
import CustomError from "../error/CustomError";

export function axiosWrapper(url, method='get'){
    return async function () {
        const config = {
            url,
            method,
            timeout: 4000,
            validateStatus: () => {
                return true;
            },
        }
        const response = await axios(config);
        if(response.status === 200 || response.status === 201){
            return response.data;
        }else{
            console.log('error status code :', response.status);
            console.log('error status data :', response.data);
            throw new CustomError('테스트 에러 메시지', response.data);
        }
    }
}
