import {error} from "next/dist/build/output/log";


export default class CustomError extends Error{

    constructor(axiosResp, errorHandler) {
        super();
        console.log('In Custom Error :' , axiosResp);
        this.message = axiosResp.message;
        this.error = axiosResp.error;
        this.errors = axiosResp.errors;
        this.status = axiosResp.status;
        this.errorHandler = errorHandler;
    }

    executeErrorHandler(){
        if(this.errorHandler){
            this.errorHandler(this);
        }
    }
}
