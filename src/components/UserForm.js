import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class UserForm extends React.Component {
    state = {
        username: '',
        email: '',
        city: '',
        phone: ''
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.history.push({
            pathname: '/details',
            state: this.state
        })
    }
    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <h1>Registration Form</h1>
                <Form className="register-form">
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter city"
                    name="city"
                    onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter phone"
                    name="phone"
                    onChange={this.handleInputChange}
                    />
                </Form.Group>

                <Link
                    className="btn btn-primary"
                    to={{
                    pathname: "/details",
                    state: this.state
                    }}
                >
                    Register
                </Link>
                </Form>
            </div>
        )
    }

}

export default UserForm