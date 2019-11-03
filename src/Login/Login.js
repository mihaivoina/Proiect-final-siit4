import React from 'react';
import Axios  from 'axios';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SessionContext from './session.context';
import {Link} from 'react-router-dom';
import './Register.css';


class Login extends React.Component {
   
  //propunerea lui Paul
  // componentDidUpdate() {
  //     if(this.props.save) {
  //       call la axios login
  //     }
  //   }

  static contextType = SessionContext;

  state = {
    username: '',
    password: '',
    loginError: ''
  };

  handleInput = (e) => {
    const newState = {};
    newState[e.currentTarget.id] = e.currentTarget.value;

    this.setState(newState);

    this.setState({
      loginError: ''
    })
  }

  handleSumit = async (e) => {
    e.preventDefault();
    const res = await Axios(`http://localhost:3004/users?username=${this.state.username}&password=${this.state.password}`);
    if(res.data.length === 1) {
      this.context.setUser(res.data[0]);
    } else {
      this.setState({
        loginError: 'Username sau parola gresite!'
      })
      return;
    }
    this.props.handleModalSubmit();
  }

    render() {
      return (
        <>
        <form onSubmit={this.handleSumit} autoComplete="off">
          <p style={{ 'fontWeight': 'bold', color: '#cc0000'}}>
            {this.state.loginError}
          </p>
          <div className="input-wraper">
            <div className="row">
              <label htmlFor="username">User name: </label>
            </div>
            <div className="row">
              <input type="text" id="username" className="input-form" placeholder="Enter your user name" onChange={this.handleInput} value={this.state.username} />
            </div>
          </div>
          <div className="input-wraper">
            <div className="row">
              <label htmlFor="password">Password: </label>
            </div>
            <div className="row">
              <input type="password" id="password" className="input-form" placeholder="Password" onChange={this.handleInput} value={this.state.password} />
            </div>
          </div>
          <div className="input-comment">
            Daca nu aveti cont. Please - <Link as={Link} to="/register" onClick={this.props.handleModalSubmit}>Register here.</Link>
          </div>
          <div>
            <Button type="submit" className="btn float-right" variant="primary">Log In</Button>
          </div>
        </form>

        {/* varianta cu bootstrap */}

        {/* <Form onSubmit={this.handleSumit} autoComplete="off">
          <p style={{ 'fontWeight': 'bold', color: '#cc0000'}}>
            {this.state.loginError}
          </p>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your user name" onChange={this.handleInput} value={this.state.username} />
          </Form.Group>
      
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.handleInput} value={this.state.password} />
          </Form.Group>

          <Form.Text className="text-muted">
            Daca nu aveti cont. Please - <Link as={Link} to="/register" onClick={this.props.handleModalSubmit}>Register here.</Link>
          </Form.Text>
          <Button className="btn float-right" variant="primary" type="submit">
            Login
          </Button>
        </Form> */}

        {/* revenire la form din html+css */}


        {/* <form onSubmit={this.handleSumit} autoComplete="off">
          <p style={{ 'fontWeight': 'bold', color: '#cc0000'}}>
            {this.state.loginError}
          </p>
          <div className="input-wraper">
            <div className="row">
              <label htmlFor="login_user">User name:</label>
            </div>
            <div className="row">
              <input type="text" id="login_user" className="input-form" placeholder="Enter your user name" onChange={this.handleInput} value={this.state.username} />
            </div>
          </div> */}

        {/* <form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.handleInput} value={this.state.password} />
          </Form.Group>

          <Form.Text className="text-muted">
            Daca nu aveti cont. Please - <Link as={Link} to="/register" onClick={this.props.handleModalSubmit}>Register here.</Link>
          </Form.Text>
          <Button className="btn float-right" variant="primary" type="submit">
            Login
          </Button>
        </form> */}
          
        </>
    
          
      );
    }
}

export default Login;
