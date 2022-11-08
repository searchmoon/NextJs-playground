import {error} from "next/dist/build/output/log";

/**
 * 참고 링크 : https://tecoble.techcourse.co.kr/post/2021-10-01-react-query-error-handling/
 */
export default class CustomError extends Error{

    constructor(message, axiosResp, errorHandler) {
        super(message);
        console.log('In Custom Error :' , axiosResp);
        this.axiosResp = axiosResp;
        this.errorHandler = errorHandler;
    }

    executeErrorHandler(){
        if(this.errorHandler){
            this.errorHandler(this);
        }
    }
}
