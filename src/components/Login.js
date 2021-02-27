import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errorMsg: ''
    }
    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleLogin = (event) => {
        event.preventDefault()
        const { email, password } = this.state
        if (email === "demo@demo.com" && password === "pass") {
            this.setState({
                errorMsg: ''
            })
            this.props.history.push('/dashboard')
        } else {
            this.setState({
                errorMsg: 'Invalid login credentials.'
            })
        }
    }
    render() {
        const { email, password, errorMsg } = this.state
        return (
            <div>
              <Link to="/">Go back to Home</Link>
              <br/>
              <Link to="/registration">Register</Link>
              <h1>Login</h1>
              {errorMsg && <p className="error-msg">{errorMsg}</p>}
              <form onSubmit={this.handleLogin}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={this.handleInputChange}
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={this.handleInputChange}
                />
                <button type="submit">Login</button>
              </form>
            </div>
        )
    }
}

export default Login