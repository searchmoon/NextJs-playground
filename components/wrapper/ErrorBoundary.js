import React from 'react';
import CustomError from "../error/CustomError";

/**
 * React ErrorBoundary
 * 참고 링크 : https://tecoble.techcourse.co.kr/post/2021-10-01-react-query-error-handling/
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage : 'Something went wrong.' };
    }

    static getDerivedStateFromError(error) {
        console.log('ErrorBoundary :: getDerivedStateFromError error :', error);
        // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('ErrorBoundary :: componentDidCatch error :', error);
        console.log('ErrorBoundary :: component did catch errorInfo', errorInfo)
        if (error instanceof CustomError) {
            console.log('ErrorBoundary ::  instance of CustomError' , error.axiosResp)
            if(error.axiosResp.message){
                this.setState({
                    errorMessage : error.axiosResp.message
                })
            }
        }
        // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
            return <h1>{this.state.errorMessage} , {this.state.hasError.toString()}</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
