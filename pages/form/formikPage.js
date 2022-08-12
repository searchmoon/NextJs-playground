import React, {useCallback} from 'react';
import {Formik, Field, Form} from 'formik'
import * as Yup from "yup";

const initialValues = {
    name: '',
    age: '',
    gender: '',
};
const validationSchema = Yup.object({
    name: Yup
        .string()
        .required('name is required'),
    age: Yup
        .string()
        .max(2)
        .required('Age is required'),
    gender: Yup
        .string()
        .required('Gender is required'),
});

const FormikTutorial = () => {
    const handleSubmitForm = useCallback((values) => {
        console.log(values)
    }, [])
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
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
                        <div>

                        </div>
                        <button type={"button"} onClick={handleSubmit}>생성</button>
                    </>
                )}
            </Formik>
        </div>
    )
}

export default FormikTutorial;
