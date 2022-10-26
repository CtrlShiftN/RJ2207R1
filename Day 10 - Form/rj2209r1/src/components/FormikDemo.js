import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

export const MyFormikDemo = () => {
    const [form, setForm] = useState({ email: "", message: "" });
    let validateSchema = Yup.object().shape({
        email: Yup.string().email("Please enter a valid email!").required("Please enter an email"),
        message: Yup.string().min(2).required("Please enter a message")
    })

    const handleSubmit = (values) => {
        console.log(values);
        // TODO
    }

    const handleChange = (e) => {
        console.log(e.target);
        // TODO
    }
    return (
        <div className="container pt-3">
            <h1>Contact form</h1>
            <Formik
                initialValues={{ email: "", message: "" }}
                validationSchema={validateSchema}
                onSubmit={handleSubmit}
            >
                {
                    ({ errors, touched }) => (
                        <Form>
                            <Field name="email" onChange={handleChange}></Field>
                            {errors.email && touched.email ? <span className='text-danger'>{errors.email}</span> : ""}
                            <br />
                            <Field name="message" onChange={handleChange}></Field>
                            {errors.message && touched.message ? <span className='text-danger'>{errors.message}</span> : ""}
                            <br />
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}