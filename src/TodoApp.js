import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab';
import Clear from '@material-ui/icons/Clear'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = { items: [], text: '', priority: 0, dueDate: moment() };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div className="App">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Fab color="primary" style={{backgroundColor:"#FF4136"}} aria-label="add">
                        <Clear />
                    </Fab>
                </Link>

                <form onSubmit={this.handleSubmit} className="todo-form">
                    <Typography component='h1' variant='h5'>
                        New TODO
                    </Typography>
                    <br /><br />
                    
                    <TextField
                        id="outlined-name"
                        label="Text"
                        value={this.state.text}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleTextChange}
                    />
                    
                    <br />
                    <br />
                    
                    <TextField
                        id="outlined-name"
                        label="Priority"
                        value={this.state.priority}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handlePriorityChange}
                    />                    
                    <br />
                    <br />

                    <DatePicker
                        id="due-date"
                        variant="outlined"
                        margin="normal"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDateChange}>
                    </DatePicker>
                    <br /><br />
                    
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className="submit">
                        Add #{this.state.items.length + 1}

                    </Button>

                </form>
                <br />
                <br />
                <TodoList todoList={this.state.items} />
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }




}