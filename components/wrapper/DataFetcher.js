import React, {forwardRef, useCallback, useEffect} from 'react';

import LoadingContainer from "./LoadingContainer";
import {useLoadData} from "../../pages/hooks/NetworkCustomHooks";

const DataFetcher = ({method, displayName, afterSuccessFunc, preHandleData, ...props}) => {
    const [getReq, setData, context, _, data] = useLoadData();

    const loadData = useCallback(async () => {
        const timeout = `?timeout=${Math.random() > 0.5 ? 1000 : 6000}`;
        await getReq()
            .method(method.url + timeout, method.requestType)
            .setSuccessFunc(res => {
                console.log(`${displayName ? displayName : ''} loadData result: `, JSON.stringify(res));
                if (preHandleData) {
                    res = preHandleData(res);
                }
                setData(res);
                if (afterSuccessFunc) {
                    afterSuccessFunc(res);
                }
            })
            .run();
    }, [getReq, method.url, method.requestType]);


    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <LoadingContainer {...context} retryFunc={loadData}>
            {!context.loading && data && props.children({data, setData})}
        </LoadingContainer>
    );
};

export default DataFetcher;
