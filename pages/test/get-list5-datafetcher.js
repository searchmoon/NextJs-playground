import React from 'react';
import DataFetcher from "../../components/wrapper/DataFetcher";

function GetList3() {

    return (
        <>
            <DataFetcher method={{url: 'http://localhost:8080/sample-list'}}>
                {({data}) => (
                    <>
                        {data.map((item, i) => <li
                            key={i}>이름: {item.username} name: {item.name} password: {item.password}, age
                            : {item.age}</li>)}
                    </>
                )}
            </DataFetcher>
        </>
    )
}


export default GetList3;
