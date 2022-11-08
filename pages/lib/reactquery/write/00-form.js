import React from 'react';
import {useMutation} from "@tanstack/react-query";
import axios from "axios";

function App() {
  const mutation = useMutation(newTodo => {
    return axios.post('http://localhost:8080/create', newTodo);
  })
  return (
    <div>
      {mutation.isLoading ? (
        'Adding todo...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({
                id: new Date(),
                title: 'Do Laundry',
                username: 'test',
                password: 'test',
                age: 20,
                name: 'test'
              })
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  )
}

export default App;
