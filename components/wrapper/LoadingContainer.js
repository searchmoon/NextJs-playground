import React from 'react';

/**
 * 로딩 컨테이너
 * @param props
 * @param props.styleContainer
 * @param props.loading
 * @param props.loadingMore
 * @param props.styleLoaing 로딩 스타일
 * @param props.data
 * @param props.nullableData
 * ---- 에러 관련
 * @param props.error
 * @param props.btnRefresh 새로고침 버튼
 * @param props.retryFunc 새로고침 함수
 * @param props.noPrevious 이전버튼 필요없는 경우
 * @returns {JSX.Element}
 * @constructor
 */
const LoadingContainer = ({retryFunc, ...props}) => {
    return (
        <>
            {props.loading && <>로딩</>}
            {!props.nullableData && !props.loading && props.data != null && props.error == null && props.children}
            {props.nullableData && !props.loading && props.error == null && props.children}
            {props.loading == false && props.error != null && <div><span>에러</span>
                {retryFunc && <button onClick={retryFunc}>재시도</button>}
            </div>}
        </>
    );
};

export default LoadingContainer;
