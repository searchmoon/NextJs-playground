import React from 'react';
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'

import {axiosWrapper} from "../../../../components/common/axiosWrapper";


const FirstExample = () => {

  const {
    isLoading,
    data,
    isError,
    error,
  } = useQuery(["sample-list"], axiosWrapper(`http://localhost:8080/sample-list?timeout=5000&needError=true`), {
    // 🚀 only server errors will go to the Error Boundary
    useErrorBoundary: (error) => {
      console.log('ErrorBoundary ::  useErrorBoundary : ', error);
      return true;
    },
  });

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    console.log('is Error rendering', error);
    return <div> ~ error : {error?.toString()} <br/> isError: {isError.toString()} <br/> , </div>;
  }

  return (
    <>
      error : {error?.toString()} <br/> isError: {isError.toString()} <br/>
      <hr/>
      {data?.data?.map((item, idx) => {
        return <div key={idx}> 이름 : {item.name}, {item.username} , {item.password} </div>;
      })}
    </>
  );
}


export default FirstExample;
