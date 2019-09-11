import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import './Login.css'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: '/',
            isLoggedIn: false
        }

    }
    DATA(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        
        if (this.state.email === localStorage.getItem("email")  && this.state.password===localStorage.getItem("password")){
            this.setState({
                isLoggedIn:true
            })
            window.location="/todo"            
        }
        else{
            return;
        }
        
    }
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                <h3>The User is: admin@mail.com</h3>
                <h3>The Password is: admin</h3>
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form onSubmit={this.handleSubmit.bind(this)} className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" name="email" required value={this.state.email} onChange={this.DATA.bind(this)} autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input required
                                    value={this.state.password}  onChange={this.DATA.bind(this)}
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>

                            <Link to={this.state.redirect} id="redirect" name="redirect" style={{ textDecoration: 'none' }}>
                                <Button
                                    onClick={this.handleSubmit.bind(this)}
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    color='primary'
                                    className="submit">
                                    Sign In

                                </Button>
                            </Link>
                        </form>
                    </Paper>
                </main>
                <p>{JSON.stringify(this.state)}</p>

                
            </React.Fragment>
        );

    }

}