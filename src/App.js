import React, {Component} from 'react'
import ContactForm from './ContactForm'
import ContactList from './ContactList'

class App extends Component {

  state = {
    contacts: []
  };

  addContact = (contactName, contactPhone, contactEmail, contactCategories) => {
    this.setState(
      ({contacts}) => ({
        contacts: contacts.concat({
          id: contacts.length === 0
            ? 1
            : Math.max(...contacts.map(contact => contact.id)) + 1,
          contactName: contactName,
          contactPhone: contactPhone,
          contactEmail: contactEmail,
          contactCategories: contactCategories
        })
      })
    )
  };

  removeContact = contactId => {
    this.setState(
      ({contacts}) => ({
        contacts: contacts.filter(
          ({id}) =>
            id !== contactId
        )
      })
    )
  };

  updateContact = (contactId, contactName, contactPhone, contactEmail, contactCategories) =>
    this.setState({
      contacts: this.state.contacts.map(contact =>
        contact.id !== contactId
          ? contact
          : {
            id: contact.id,
            contactName: contactName,
            contactPhone: contactPhone,
            contactEmail: contactEmail,
            contactCategories: contactCategories
          }
      )
    });

  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <ContactForm addContact={this.addContact}/>
        <ContactList
          contacts={this.state.contacts}
          removeContact={this.removeContact}
          updateContact={this.updateContact}
        />
      </div>
    );
  }

  componentDidMount() {
    const contactsAsTextInJSONFormat = localStorage.getItem('storedContacts');
    const contactsFromLocalStorage = JSON.parse(contactsAsTextInJSONFormat);
    this.setState({
      contacts: contactsFromLocalStorage || []
    });
  }

  componentDidUpdate() {
    const contacts = this.state.contacts;
    localStorage.setItem('storedContacts', JSON.stringify(contacts));
  }
}

export default App;
