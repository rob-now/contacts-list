import React, {Component} from 'react'
import ContactForm from './ContactForm'

class App extends Component {

  state = {
    contacts: [
      {
        id: 1,
        contactName: 'Abc Def',
        contactPhone: '123-456-789',
        contactEmail: 'abc@abc.com',
        contactCategories: 'abc, def'
      },
      {
        id: 2,
        contactName: 'Ghi Jkl',
        contactPhone: '987-654-321',
        contactEmail: 'ghi@ghi.com',
        contactCategories: 'ghi , jkl jjj,ooo'
      }
    ]
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

  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <ContactForm addContact={this.addContact}/>
        <ul>
          {
            this.state.contacts.map(
              contact =>
                <li key={contact.id}>
                  <p><strong>{contact.contactName}</strong></p>
                  <p>{contact.contactPhone}, {contact.contactEmail}</p>
                  <p>{contact.contactCategories.split(',').map(
                    (category, index) => {
                      const categoryDisplay = `[${category.trim()}]`;
                      const categoriesLastIndex = contact.contactCategories.split(',').length - 1;
                      return index === categoriesLastIndex ? categoryDisplay : categoryDisplay + `, `;
                    }
                  )}</p>
                  <button onClick={() => this.removeContact(contact.id)}>
                    Delete
                  </button>
                </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
