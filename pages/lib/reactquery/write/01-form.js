import React, {useCallback} from 'react';
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {Field, Formik} from "formik";

const initialValues = {
  name: '',
  age: '',
  gender: '',
};


function App2() {
  const mutation = useMutation(newTodo => {
    return axios.post('http://localhost:8080/create?timeout=5000', newTodo)
  })

  const handleSubmitForm = () => {
    mutation.mutate({
      id: new Date(),
      title: 'Do Laundry',
      username: 'test',
      password: 'test',
      age: 20,
      name: 'test'
    })
    console.log('mutation', mutation);
  }

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

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmitForm}
          >
            {({handleSubmit}) => (
              <>
                <div>
                  name: <Field name="name"/>
                </div>
                <div>
                  age: <Field name="age"/>
                </div>
                <div>
                  password: <Field name="password"/>
                </div>
                <div>

                </div>
                <button
                  onClick={handleSubmit}
                >
                  Create Todo
                </button>
              </>
            )}
          </Formik>

        </>
      )}
    </div>
  )
}

export default App2;
