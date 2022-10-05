import {useRequestQuery} from "../hooks/NetworkCustomHooks";
import {useCallback, useState} from "react";

function GetList() {
    const createRequest = useRequestQuery();
    const [data, setData] = useState([]);
    const handleGetList = useCallback(
        async () => {
            await createRequest()
                .get('http://localhost:8080/sample/list')
                .setSilent()
                .setSuccessFunc((resp) => {
                    setData(resp)
                    console.log(resp)
                })
                .run();
        }, [createRequest])
    return (
        <>
            <button onClick={handleGetList}>Get List{data}</button>
        </>
    )

}

export default GetList;
