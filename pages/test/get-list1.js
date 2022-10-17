import {useRequestQuery} from "../hooks/NetworkCustomHooks";
import React, {useCallback, useEffect, useState} from "react";

function GetList() {
    const createRequest = useRequestQuery();
    const [data, setData] = useState([]);
    const handleGetList = useCallback(
        async () => {
            await createRequest()
                .get('http://localhost:8080/sample-list?timeout=3000')
                .setSuccessFunc((resp) => {
                    console.log(resp)
                    setData(resp)
                })
                .run();
        }, [createRequest])

    useEffect(() => {
        handleGetList()
    }, [handleGetList])

    return (
        <>
            {data.map((item, i) => <li key={i}>이름: {item.username} name: {item.name} password: {item.password}, age
                : {item.age}</li>)}
        </>
    )

}

export default GetList;
