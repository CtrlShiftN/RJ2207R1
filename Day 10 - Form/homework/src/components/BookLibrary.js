import { ErrorMessage, Field, Form, Formik, setNestedObjectValues, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const booksSchema = Yup.object().shape({
    title: Yup.string().required(),
    author: Yup.string().required(),
    quantity: Yup.number().min(1).max(100).required(),
});

export const BookLibrary = () => {
    const [form, setForm] = useState({ title: '', author: '', quantity: '' });
    const [bookShelf, setBookshelf] = useState(
        [
            { title: "Rung Than Khoc", author: "Thuc Linh", quantity: 3 },
            { title: "Khe Uoc Ban Dau", author: "Thuc Linh", quantity: 5 },
        ]
    );
    const [mode, setMode] = useState({ status: 'add', action: 'Submit' });

    const deleteBook = (index) => {
        setBookshelf(bookShelf.filter((currentValue, key) => key !== index));
    }

    const editBook = (index) => {
        setMode({ status: 'edit', action: 'Edit', selectedIndex: index });
        setForm({ ...bookShelf[index] });
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    return (
        <div className="container pt-3">
            <Formik
                initialValues={form}
                enableReinitialize={true}
                validationSchema={booksSchema}
                onSubmit={(value, { resetForm }) => {
                    // console.log(mode);
                    if (mode.status === 'add') {
                        // console.log(mode);
                        bookShelf.push(value);
                        setBookshelf([...bookShelf]);
                        resetForm();
                    } else {
                        bookShelf[mode.selectedIndex] = value;
                        setBookshelf([...bookShelf]);
                        setMode({ status: 'add', action: 'Submit', selectedIndex: null });
                    }
                    // console.log(bookShelf);
                }}
            >
                <Form >
                    <Field name="title" placeholder="Enter a title" value={form.title || ""} onChange={handleChange} />
                    <br />
                    <ErrorMessage component="div" className="text-danger" name="title" />
                    <br />

                    <Field name="author" placeholder="Enter an author" value={form.author || ""} onChange={handleChange} />
                    <br />
                    <ErrorMessage component="div" className="text-danger" name="author" />
                    <br />

                    <Field name="quantity" placeholder="Enter a quantity" value={form.quantity || ""} onChange={handleChange} />
                    <br />
                    <ErrorMessage component="div" className="text-danger" name="quantity" />
                    <br />

                    <button type="submit" className="btn btn-success mb-4 me-2">{mode.action}</button>
                    <button type="reset" className="btn btn-secondary mb-4 mx-2">Reset</button>
                </Form>
            </Formik>
            <table className="pt-3 table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Tiêu đề</th>
                        <th>Tác giả</th>
                        <th>Số lượng</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {bookShelf.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <button className="btn btn-primary mx-2" onClick={() => editBook(index)}>Edit</button>
                                <button className="btn btn-danger mx-2" onClick={() => deleteBook(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}