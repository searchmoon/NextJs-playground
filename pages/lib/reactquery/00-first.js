import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

import axios from "axios";
import ErrorBoundary from "../../../components/wrapper/ErrorBoundary";

async function fetchCompanies() {
    return axios.get(`http://localhost:8080/sample-list?timeout=1000`).then((resp) => resp.data);
}

const FirstExample = () => {

    const {
        isLoading,
        data,
        isError,
        error,
    } = useQuery(["sample-list"], fetchCompanies, {
        // 🚀 only server errors will go to the Error Boundary
        useErrorBoundary: (error) => error.response?.status >= 500,
        onError: (error) => {
            console.log('FirstExample onError :', error);
        }
    });

    if (isLoading) {
        return <div>loading</div>;
    }

    if (isError) {
        return <div> ~ error : {error?.toString()} <br /> isError: {isError.toString()} <br /> , errorMessage: {error.message}</div>;
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
