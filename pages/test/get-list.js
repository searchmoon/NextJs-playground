import {useRequestQuery} from "../hooks/NetworkCustomHooks";
import React, {useCallback, useState} from "react";

function GetList() {
    const createRequest = useRequestQuery();
    const [data, setData] = useState([]);
    const handleGetList = useCallback(
        async () => {
            await createRequest()
                .get('http://localhost:8080/sample/list')
                .setSilent()
                .setSuccessFunc((resp) => {
                    console.log(resp)
                    setData(resp)
                })
                .run();
        }, [createRequest])

    return (
        <>
            <button onClick={handleGetList}>Get List</button>
            {data.map((item, i) => <li key={i}>이름: {item.name} 직업: {item.desc} 나이: {item.level}</li>)}
        </>
    )

}

export default GetList;
