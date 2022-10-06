import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from "next/router";
import axios from "axios";

export class CfRequest {
    constructor(errorMsg500, errorMsg500Func) {
        this.successFunc = () => {
        };
        this.errorHandlerWithCodeMap = new Map();
        this.errorFuncWithStatusMap = new Map();
        this.errorFuncBefore = () => {
        };
        const $this = this;
        this.errorMsg500 = errorMsg500 || '알 수 없는 에러가 발생하였습니다. 문제가 계속될 경우 고객센터에 문의해주세요';
        this.errorMsg500Func =
            errorMsg500Func != undefined
                ? errorMsg500Func
                : (status) => {
                    if (status != undefined) {
                        $this.showMsg(`CODE:${status} : ` + this.errorMsg500);
                    } else {
                        $this.showMsg(this.errorMsg500);
                    }
                };
        this.header = {'Content-Type': 'application/json'};
        this.isSilentError = false; // 최종적으로 에러 메시지 표현할 것인지 여부

        this.formikRef = null;
        this.options = {};
        this.timeout = 10000;
    }

    showMsg(msg) {
        alert(msg);
    }

    call(info) {
        this.url = info.url;
        this.requestType = info.method;
        return this;
    }

    get(url) {
        this.url = url;
        this.requestType = 'get';
        return this;
    }

    post(url) {
        this.url = url;
        this.requestType = 'post';
        return this;
    }

    delete(url) {
        this.url = url;
        this.requestType = 'delete';
        return this;
    }

    addHeader(header) {
        this.header = Object.assign(this.header, header);
        return this;
    }

    addHeaderKeyValue(key, value) {
        this.header[key] = value;
        return this;
    }

    setData(data) {
        this.data = data;
        return this;
    }

    setTimeout(timeout) {
        this.timeout = timeout;
        return this;
    }

    setOptions(options) {
        this.options = options;
        return this;
    }

    setErrorFunc(initError, addErrorMsg) {
        this.initError = initError;
        this.addErrorMsg = addErrorMsg;
        return this;
    }

    setErrorFuncBefore(func) {
        this.errorFuncBefore = func;
        return this;
    }

    nologin() {
        delete this.header['Authorization'];
        return this;
    }

    noAuthToken() {
        delete this.header['X-Auth-Token'];
        return this;
    }

    setSpinner() {
        this.isSpinnerMode = true;
        return this;
    }

    setSilent() {
        this.isSilentError = true;
        return this;
    }

    setSuccessFunc(func) {
        this.successFunc = func;
        return this;
    }

    // load, data, error 형태에서 사용될 때 호출이 정상동작안한 경우 error 지정
    setErrorMsgFunc(setLoading, setError) {
        this.setLoading = setLoading;
        this.errorMsgFunc = setError;
        return this;
    }

    /**
     * 응답코드를 다루는 에러함수 정의
     * @param status
     * @param func
     * @returns {CfRequest}
     */
    setErrorFuncWithCode(errorCode, func) {
        this.errorHandlerWithCodeMap.set(errorCode, func);
        return this;
    }

    setFormikRef(formikRef) {
        this.formikRef = formikRef;
        return this;
    }

    setDispatchFunc(dispatch) {
        this.dispatch = dispatch;
        return this;
    }

    /**
     * http status 에 응답하는 함수를 처리
     * @param status
     * @param func
     * @returns {CfRequest}
     */
    setErrorFuncWithStatus(status, func) {
        this.errorFuncWithStatusMap.set(status, func);
        return this;
    }

    async _callNetwork() {
        if (this.successFunc == undefined || this.url == undefined || this.requestType == undefined || this.dispatch == undefined) {
            throw new Error('You must use this class correctly.');
        }
        // config 에서 error message 얻기 위해 처리 https://github.com/axios/axios/issues/1143
        const hostUrl = this.url;
        const config = {
            url: hostUrl,
            method: this.requestType.toString(),
            timeout: 4000,
            validateStatus: () => {
                return true;
            }, // I'm always returning true, you may want to do it depending on the status received
        };
        if (this.header !== undefined) {
            config.headers = this.header;
        }

        config.data = this.data;

        if (this.initError) {
            this.initError();
        }

        return axios(config);
    }

    async run() {
        try {
            if (this.options.beforeCallFunc) {
                this.options.beforeCallFunc();
            }
            /*if (this.isSpinnerMode) {
              this.dispatch({ type: SHOW_INDICATOR });
            }*/
            const response = await this._callNetwork();
            if (this.options.afterCallFunc) {
                this.options.afterCallFunc();
            }
            /*if (this.isSpinnerMode) {
              this.dispatch({ type: CLOSE_INDICATOR });
            }*/
            // console.log('axios response', response);

            if (response.status === 200 || response.status === 201) {
                return await this.successFunc(response.data);
                /**
                 * 서버 상태가 200이 아닌 경우
                 */
            } else {
                console.log('error status code :', response.status);
                console.log('error status data :', response.data);
                this.errorFuncBefore();
                /**
                 * 에러 코드가 있는 경우
                 */
                if (response.data.errorCode != undefined && response.data.errorCode !== 'VALIDATION') {
                    const errorCode = response.data.errorCode;
                    if (this.errorHandlerWithCodeMap.has(errorCode)) {
                        const handler = this.errorHandlerWithCodeMap.get(errorCode);
                        if (typeof handler === 'string') {
                            this.showMsg(handler);
                            return;
                        }
                        return handler(response.data);
                    } else {
                        // 에러코드는 있는데 메시지가 있는 경우
                        if (response.data?.message && response.data.message !== 'no error message') {
                            this.showMsg(response.data.message);
                            return;
                        }

                        // 에러코드는 있는데 처리가 안 된 경우
                        this.errorMsg500Func('SN: ' + response.status);
                        return;
                    }
                }

                /*console.log('response.status : ', response.status);
                        console.log('Array.isArray(response.data): ', Array.isArray(response.data));
                        console.log('this.formikRef : ', this.formikRef != null);*/
                /**
                 * 밸리데이션 실패 에러인 경우
                 */
                if (response.status === 400 && Array.isArray(response.data.errors) && this.formikRef != null) {
                    const error = {};
                    const errors = response.data.errors;
                    for (let i = 0; i < errors.length; i++) {
                        const err = errors[i];
                        if (error.hasOwnProperty(err.name)) {
                            error[err.name] += err.desc;
                        } else {
                            error[err.name] = err.desc;
                        }
                    }
                    this.formikRef.setErrors(error);
                    return;
                }

                /**
                 * 미리 정의된 http status 가 있는 경우 처리
                 */
                if (this.errorFuncWithStatusMap.has(response.status)) {
                    const func = this.errorFuncWithStatusMap.get(response.status);
                    return func(response.data);
                }

                /**
                 * 에러메시지가 있는 경우
                 */
                console.log('error message :', response.data?.data?.message);
                // 에러코드는 있는데 메시지가 있는 경우
                if (response.data?.message) {
                    if (response.data.message === 'no error message') {
                        return this.errorMsgFunc('CODE:NOERRMSG - ' + this.errorMsg500);
                    }
                    this.showMsg(response.data.message);
                    return;
                }

                if (!this.isSilentError && this.errorMsgFunc == undefined) {
                    this.errorMsg500Func('NERROR');
                }
                if (this.errorMsgFunc) {
                    if (this.setLoading) {
                        this.setLoading(false);
                    }
                    this.errorMsgFunc('CODE:NERROR - ' + this.errorMsg500);
                }
            }
        } catch (e) {
            console.log('after catch e :', e, this.url);
            if (this.options.afterCallFunc) {
                this.options.afterCallFunc();
            }
            /*if (this.isSpinnerMode) {
              this.dispatch({ type: CLOSE_INDICATOR });
            }*/
            if (e?.message == 'CANCEL_BY_TIMEOUT') {
                this.errorFuncWithStatusMap.get('CANCEL_BY_TIMEOUT')();
                return;
            }

            if (!this.isSilentError && this.errorMsgFunc == undefined) {
                this.errorMsg500Func('ERROR');
            }
            if (this.errorMsgFunc) {
                if (this.setLoading) {
                    this.setLoading(false);
                }
                this.errorMsgFunc('CODE:ERROR - ' + this.errorMsg500);
            }
        }
    }
}

export function useRequestQuery() {
    const dispatch = useDispatch();
    const router = useRouter();

    const createReq = useCallback(() => {
        const req = new CfRequest();
        req.setDispatchFunc(dispatch);
        req.setErrorFuncWithStatus(401, () => {
            console.log('status 401 :');
            router.push("/");
        });
        req.setErrorFuncWithStatus('CANCEL_BY_TIMEOUT', () => {

        });
        return req;
    }, [dispatch]);

    return createReq;
}
