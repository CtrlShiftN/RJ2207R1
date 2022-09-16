import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
// const passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';


export const Login = () => {
    const loginSchema = Yup.object().shape({
        username: Yup.string().email().required(),
        password: Yup.string().min(6).max(10).required(),
    });
    let navigate = useNavigate();
    const [form, setForm] = useState({ username: '', password: '' });

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    return (
        <div className="container pt-3">
            <Formik
                initialValues={form}
                enableReinitialize={true}
                validationSchema={loginSchema}
                onSubmit={(value, { resetForm }) => {
                    if (value.username === 'admin@gmail.com' && value.password === 'letmein') {
                        navigate("/employee");
                    } else {
                        setForm({ username: "", password: "" });
                        alert("Please enter a valid account");
                    }
                }}
            >
                <Form>
                    <Field name="username" placeholder="Enter your account" value={form.username || ""} onChange={handleChange} />
                    <br />
                    <ErrorMessage component="div" className="text-danger" name="username" />
                    <br />

                    <Field name="password" type="password" placeholder="Enter your password" value={form.password || ""} onChange={handleChange} />
                    <br />
                    <ErrorMessage component="div" className="text-danger" name="password" />
                    <br />

                    <button type="submit" className="btn btn-success mb-4 me-2">Login</button>
                    <button type="reset" className="btn btn-secondary mb-4 mx-2">Reset</button>
                </Form>
            </Formik>
        </div>
    )
}