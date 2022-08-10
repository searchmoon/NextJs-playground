import React, {useCallback} from 'react';
import {Formik, Field} from 'formik'

const initialValues = {
    name: '',
    age: '',
    gender: '',
}

const FormikPage = () => {
    const handleSubmitForm = useCallback((values) => {
        console.log(values)
    }, [])
    return (
        <div>
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
                            gender: <Field name="gender"/>
                        </div>
                        <button type={"button"} onClick={handleSubmit}>생성</button>
                    </>
                )}
            </Formik>
        </div>
    )
}

export default FormikPage;
