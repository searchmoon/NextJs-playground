import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

import axios from "axios";
import ErrorBoundary from "../../../components/wrapper/ErrorBoundary";
import CustomError from "../../../components/error/CustomError";

async function fetchCompanies() {
    const url = `http://localhost:8080/sample-list?timeout=1000&needError=true`;
    const config = {
        url,
        method: 'get',
        timeout: 4000,
        validateStatus: () => {
            return true;
        },
    }
    const response = await axios(config);
    if(response.status === 200 || response.status === 201){
        return response.data;
    }else{
        console.log('error status code :', response.status);
        console.log('error status data :', response.data);
        throw new CustomError(response.data);
    }
}

const FirstExample = () => {

    const {
        isLoading,
        data,
        isError,
        error,
    } = useQuery(["sample-list"], fetchCompanies, {
        // 🚀 only server errors will go to the Error Boundary
        useErrorBoundary: (error) => {
           return true;
        },
        onError: (error) => {
            console.log('error :', error);
        }
    });

    if (isLoading) {
        return <div>loading</div>;
    }

    if (isError) {
        console.log('is Error rendering', error);
        return <div> ~ error : {error?.toString()} <br /> isError: {isError.toString()} <br /> , </div>;
    }

    return (
        <ErrorBoundary>
            error : {error?.toString()} <br /> isError: {isError.toString()} <br />
            <hr/>
            {data?.data?.map((item, idx) => {
                return <div key={idx}> 이름 : {item.name}, {item.username} , {item.password} </div>;
            })}
        </ErrorBoundary>
    );
}


export default FirstExample;
