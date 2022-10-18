import {useRequestQuery} from "../hooks/NetworkCustomHooks";
import React, {useCallback, useState, useRef} from "react";
import {Formik, Field} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    username: Yup
        .string()
        .required('username is required'),
});

//useRef 변수를 포믹 폼에다가 연결해라
function PostList() {
    const createRequest = useRequestQuery();
    const formikRef = useRef(null);
    const handleSubmitForm = useCallback(
        async (values) => {
            console.log("values", values);

            await createRequest()
                .post("http://localhost:8080/create")
                .setFormikRef(formikRef.current)
                .setData(values)
                .setSuccessFunc((resp) => {
                    console.log("server result ", resp);
                })
                .setErrorFuncWithCode("DUPLICATE", () => {
                    alert('rumi 는 중복된 이름입니다.')
                })
                .run();
        },
        [formikRef.current]
    );

    return (
        <>
            <Formik
                initialValues={{
                    username: "",
                    name: "",
                    password: "",
                    age: "",
                }}
                innerRef={formikRef}
                validationSchema={validationSchema}
                onSubmit={handleSubmitForm}
            >
                {({handleSubmit, errors, isSubmitting}) => (
                    <>
                        <div>
                            username: <Field name="username"/>
                            {errors.username && <div>{errors.username}</div>}
                        </div>
                        <div>
                            name: <Field name="name"/>
                            {errors.name && <div>{errors.name}</div>}
                        </div>
                        <div>
                            password: <Field name="password"/>
                            {errors.password && <div>{errors.password}</div>}
                        </div>
                        <div>
                            age: <Field name="age"/>
                            {errors.age && <div>{errors.age}</div>}
                        </div>
                        <button
                            type={"button"}
                            isSubmitting={isSubmitting}
                            onClick={handleSubmit}
                        >
                            {/*추가*/}
                            {isSubmitting ? "빙글뱅글" : "추가"}
                        </button>
                    </>
                )}
            </Formik>
        </>
    );
}

export default PostList;
