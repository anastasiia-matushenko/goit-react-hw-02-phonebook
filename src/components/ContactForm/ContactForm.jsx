import { Component } from "react";
import PropTypes from "prop-types";
import { Input, Button, Form, Label } from "./ContactForm.styled";

export class ContactForm extends Component {
    state = {
        name: "",
        number: '',
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        this.props.addContacts(this.state);
        this.setState({ name: "", number: "" });
    }

    render() {
        const { name, number } = this.state;
        return (
            <Form action="" onSubmit={this.handleSubmit}>
                <label>
                    <Label>Name</Label>
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleChange}
                        placeholder="Enter name"
                    />
                </label>
                <label>
                    <Label>Number</Label>
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        onChange={this.handleChange}
                        required
                        placeholder="111-11-11"
                    />
                </label>
                <Button>Add contact</Button>
            </Form>
        )     
    }
};

ContactForm.propTypes = {
    addContacts: PropTypes.func.isRequired,
};
