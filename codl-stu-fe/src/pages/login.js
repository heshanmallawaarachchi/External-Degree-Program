import React from "react"
import * as yup from "yup"


class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    On_Login = (e) => {
        e.preventDefault()

        // VALIDATION
        let schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required()
        })

        schema.validate({
            email: this.state.email,
            password: this.state.password
        })
        .then(valid => {
            fetch("http://localhost:3001/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then(Response => Response.json())
            .then(Response =>{
                if(Response.status === "success"){
                    localStorage.setItem("token",Response.data.token)
                    this.props.history.push('/Home')
                } else { alert("Failed") }
            })
        })
        .catch(e => {
            alert(e.errors)
        })

    }

    render() {
        return (
            <div>
                <div className='login'>
                <div className="close"></div>
                    <div className="loginForm">
                        <h1>Login</h1>
                        <form>
                            <input type="email" className="form-control bg-white border-0" placeholder="Email" onChange={event => this.setState({ email: event.target.value })} />
                            <input type="password" className="form-control bg-white border-0" placeholder="Password" onChange={event => this.setState({ password: event.target.value })} />
                            <button className="btn btn-success" onClick={this.On_Login}>Login</button>
                            <a href="/registration">Register</a>
                        </form>

                        
                    </div>


                    <img src="assets/imagas/degree.jpg" alt="degree" />
                </div>
            </div>
        )
    }
}

export default Login;
