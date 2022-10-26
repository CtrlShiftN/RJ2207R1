const studentArr = [
    {
        id: 1,
        name: "Nguyen Van A",
        age: 18,
        address: "Ha Noi"
    },
    {
        id: 2,
        name: "Nguyen Van B",
        age: 19,
        address: "Ha Tay"
    },
    {
        id: 3,
        name: "Nguyen Van C",
        age: 20,
        address: "Hung Yen"
    },
];
export const StudentList = (props) => {
    return (
        <div className="container pt-3">
            <h1>Student List:</h1>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentArr.map((student, index) => (
                            <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                                <td>
                                    <button className="btn btn-warning mx-2">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}