import React from 'react';
class Getcomponent extends React.Component {
    constructor() {
        super()
        this.state = {
            mydata: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:8000/Employees')
            .then((res) => res.json())
            .then((result) => { this.setState({ mydata: result }) })
            .catch((err) => console.log(err))
    }
    render() {
        return (
            <div>
               
            <table className="table table-hover">
                <thead className='table-dark'>
                    <tr className='table-dark'>
                        <th scope="col">Id</th>
                        <th scope="col">Emp Name</th>
                        <th scope="col">Emp designation</th>
                        <th scope="col">Emp salary</th>
                        <th scope="col">Emp joining date</th>
                        <th scope="col">Emp department</th>
                        <th scope="col">Emp id</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.mydata.map((mypair) => (
                        <tr key={mypair.id} className='table-info'>
                            <td>{mypair.id}</td>
                            <td>{mypair.Emp_Name}</td>
                            <td>{mypair.Emp_Salary}</td>
                            <td>{mypair.Emp_Designation}</td>
                            <td>{mypair.Emp_Joining_Date}</td>
                            <td>{mypair.Emp_Department}</td>
                            <td>{mypair.Emp_id}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            </div>
        )
    }
}

export default Getcomponent;