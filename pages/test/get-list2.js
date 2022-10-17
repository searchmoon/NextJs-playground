import {useRequestQuery} from "../hooks/NetworkCustomHooks";
import React, {useCallback, useEffect, useState} from "react";

function GetList() {
    const createRequest = useRequestQuery();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const handleGetList = useCallback(
        async () => {
            await createRequest()
                .get('http://localhost:8080/sample-list?timeout=2000')
                .setSuccessFunc((resp) => {
                    console.log(resp)
                    setData(resp)
                })
                .setOptions({
                    beforeCallFunc: () => {
                        setLoading(true);
                    },
                    afterCallFunc: () => {
                        setLoading(false);
                    },
                })
                .setErrorMsgFunc(setLoading, () => {
                    setError('알 수 없는 에러');
                })
                .run();
        }, [createRequest])

    useEffect(() => {
        handleGetList()
    }, [handleGetList])

    return (
        <>
            {/*<button onClick={handleGetList}>Get List2</button>*/}
            {loading && <div>로딩중</div>}
            {data.map((item, i) => <li key={i}>이름: {item.username} name: {item.name} password: {item.password}, age
                : {item.age}</li>)}
            {
                error && <div>{error}</div>
            }
        </>
    )

}

export default GetList;
