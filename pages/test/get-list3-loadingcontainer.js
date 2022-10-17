import {useLoadData, useRequestQuery} from "../hooks/NetworkCustomHooks";
import React, {useCallback, useEffect, useState} from "react";

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
            {/*<button onClick={handleGetList}>Get List2</button>*/}
            {sampleContext.loading && <div>로딩중</div>}
            {sampleContext.data.map((item, i) => <li
                key={i}>이름: {item.username} name: {item.name} password: {item.password}, age
                : {item.age}</li>)}
            {
                sampleContext.error && <div>{sampleContext.error}</div>
            }
        </>
    )

}

export default GetList2;
