import {useLoadData, useRequestQuery} from "../hooks/NetworkCustomHooks";
import React, {useCallback, useEffect, useState} from "react";
import LoadingContainer from "../../components/wrapper/LoadingContainer";

// 'http://localhost:8080/sample-list?timeout=6000'
function GetList2() {
    const [getReq, setData, sampleContext] = useLoadData([]);

    const handleGetList = useCallback(async () => {
        await getReq().get('http://localhost:8080/sample-list?timeout=1000')
            .setSuccessFunc((resp) => {
                setData(resp)
            })
            .run();
    }, []);

    useEffect(() => {
        handleGetList();
    }, [handleGetList])

    return (
        <>
            <LoadingContainer {...sampleContext} >
                {console.log(sampleContext)}
                {sampleContext.data.map((item, i) => <li
                    key={i}>이름: {item.username} name: {item.name} password: {item.password}, age
                    : {item.age}</li>)}
            </LoadingContainer>
        </>
    )

}

export default GetList2;
