import React from 'react';
import { nanoid } from 'nanoid';
import ContactsList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import style from './styles.module.css';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  searchName = () => {
    const lowerCase = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCase)
    );
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <div className={style.container}>
        <h1>Phoneboock</h1>
        <ContactForm onSubmit={this.addContact} arr={contacts} />
        <h2>Contacts</h2>
        <Filter onChangeFilter={this.changeFilter} valueFilter={filter} />
        {contacts.length > 0 && (
          <ContactsList
            onClick={this.deleteContact}
            contacts={this.searchName()}
          />
        )}
      </div>
    );
  }
}

export default App;
