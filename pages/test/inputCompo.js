import React from 'react';
import {Field} from "formik";

const InputCompo = () => {
    return (
        <div>
            name: <Field name="name"/>
            {errors.name && <div>{errors.name}</div>}
        </div>
    );
};

export default InputCompo;
