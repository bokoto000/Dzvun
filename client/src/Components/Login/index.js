import React, {Component} from 'react';
import { Segment, Form, Container, Button } from 'semantic-ui-react';
import './index.css';


const req = require('../../helpers/fetch');
const post = req.post;
const get = req.get;

class Login extends Component {

    constructor(){
        super();
        this.state = {
        email: "",
        password: "",
        csrf: null,
        loggedIn: false
        };
        this.onChange = this.onChange.bind(this);
    }

    async componentDidMount() {
        const res = await get('/get-sess-info/csrf');
        if(res.ok) {
            const csrf = (await res.json()).csrfToken;
            this.setState({csrf});
        }
        
    }

    onChange(event){
        this.setState({[event.target.name]:  event.target.value})
    }

    onSubmit = async () => {
        const res = await post('login', {
            email: this.state.email,
            password: this.state.password},
            this.state.csrf)
        if(res.ok) {
            window.location.reload();
        }
    }


    render () {
        return (
        <Container style={{  padding: '0em 0em'}} className="body-container">
            <Segment>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field hidden name='_csrf' value={this.state.csrf} />
                    <Form.Field>
                        <label> E-mail </label>
                        <input type='email' placeholder='E-mail' required name='email' onChange={this.onChange}></input>
                    </Form.Field>
                    <Form.Field>
                        <label> Password </label>
                        <input type='password' placeholder='Password' required name='password' onChange={this.onChange}></input>
                    </Form.Field>
                    <Form.Field>
                        <Button fluid type='submit'>Log In</Button>
                    </Form.Field>      
                </Form>
            </Segment>
        </Container>    
        )
    }
}

export default Login;