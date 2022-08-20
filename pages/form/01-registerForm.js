import React from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup';

const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repassword: ''
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Must be a valid email')
                .max(30)
                .required('Email is required'),
            password: Yup
                .string()
                .min(8)
                .required('Password is required'),
            repassword: Yup
                .string()
                .min(8)
                .required('Password is required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Adress</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}/>
                {formik.touched.email && formik.errors.email ?
                    <div className='error'>{formik.errors.email}</div> : null}
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}/>
                {formik.touched.password && formik.errors.password ?
                    <div className='error'>{formik.errors.password}</div> : null}

                <label htmlFor="repassword">Password again</label>
                <input
                    id="repassword"
                    name="repassword"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.repassword}/>
                {formik.touched.repassword && formik.errors.repassword ?
                    <div className='error'>{formik.errors.repassword}</div> : null}

                <button type="submit">Resister</button>
            </form>
        </div>
    );
}

export default RegisterForm;
