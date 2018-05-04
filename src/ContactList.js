import React, {Component} from 'react'
import ContactContent from './ContactContent'

class ContactList extends Component {

  state = {
    editContactId: null
  };

  enterEditMode = contactId =>
    this.setState({
      editContactId: contactId
    });

  render() {
    console.log(this.state.editContactId);
    return (
      <ul>
        {
          this.props.contacts.map(
            contact =>
              <li key={contact.id}>
                {
                  this.state.editContactId === contact.id
                    ? <p>in edit</p>
                    : <ContactContent
                      contact={contact}
                      enterEditMode={this.enterEditMode}
                      removeContact={this.props.removeContact}
                    />
                }
              </li>
          )
        }
      </ul>
    )
  }
}

export default ContactList