import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from "react";
import { Message, Subtitle, Title } from "./App.styled";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  addContacts = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    const newName = this.state.contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    const result = newName
      ? toast.error(`${name} is already in contacts`, {position: "top-center"})
      : this.setState((prevState) => ({
        contacts: [contact, ...prevState.contacts],
      }))
    return result;
  };

  handleChange = (evt) => {
    this.setState({
      filter: evt.target.value
    })
  }

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const filterName = filter.toLowerCase();
    return contacts.filter(({name}) => name.toLowerCase().includes(filterName));
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId)
    })
    )
  }

  render() {
    const { filter } = this.state;
    const contacts = this.filterContacts();
    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm addContacts={this.addContacts} />
        <Subtitle>Contacts</Subtitle>
        <Filter value={filter} onChange={this.handleChange} />
        {contacts.length > 0
          ? <ContactsList
          contacts={contacts}
          deleteContact={this.deleteContact}
          />
          : <Message>❌ Your query did not find anything</Message>}
        <ToastContainer/>
      </>
    )  
  }
};
