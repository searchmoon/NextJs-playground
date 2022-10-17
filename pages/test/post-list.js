import { useRequestQuery } from "../hooks/NetworkCustomHooks";
import React, { useCallback, useState, useRef } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";

//useRef 변수를 포믹 폼에다가 연결해라
function PostList() {
  const createRequest = useRequestQuery();
  const formikRef = useRef(null);
  const handleSubmitForm = useCallback(
    async (values) => {
      console.log(values);

      await createRequest()
        .post("http://localhost:8080/sample")
        .setFormikRef(formikRef.current)
        .setData(values)
        .setSuccessFunc((resp) => {
          console.log("server result ", resp);
        })
        .run();
    },
    [formikRef.current]
  );

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          desc: "",
          level: "",
        }}
        innerRef={formikRef}
        // validationSchema={validationSchema}
        onSubmit={handleSubmitForm}
      >
        {({ handleSubmit, errors, isSubmitting }) => (
          <>
            <div>
              name: <Field name="name" />
              {errors.name && <div>{errors.name}</div>}
            </div>
            <div>
              desc: <Field name="desc" />
              {errors.desc && <div>{errors.desc}</div>}
            </div>
            <div>
              level: <Field name="level" />
              {errors.level && <div>{errors.level}</div>}
            </div>
            <button
              type={"button"}
              isSubmitting={isSubmitting}
              onClick={handleSubmit}
            >
              {isSubmitting ? "빙글뱅글" : "추가"}
            </button>
          </>
        )}
      </Formik>
    </>
  );
}

export default PostList;
