import React, {useCallback} from 'react';
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {Field, Formik} from "formik";

const initialValues = {
  name: '',
  age: '',
  password: '',
  username: '',
};


function App2() {
  const mutation = useMutation(newTodo => {
    axios.post('http://localhost:8080/create?timeout=2000', newTodo);
  })

  const handleSubmitForm = useCallback((values) => {
    mutation.mutate({
      id: new Date(),
      title: 'Do Laundry',
      ...values
    })
    console.log(values)
  }, [mutation])

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
                  username: <Field name="username"/>
                </div>
                <button
                  type="submit" onClick={handleSubmit}
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
