const students = [
    {
        id: 1,
        name: 'Maria Anders',
        age: 20,
        address: 'New York, USA'
    },
    {
        id: 2,
        name: 'John Smith',
        age: 25,
        address: 'New Zealand, USA'
    },
    {
        id: 3,
        name: 'Maria Smith',
        age: 19,
        address: 'Ireland, USA'
    },
];

export default function StudentInfo(props) {
    console.log(students);
    return (
        <div className="container">
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Address</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}