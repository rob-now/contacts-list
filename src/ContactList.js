import React, {Component} from 'react'
import ContactContent from './ContactContent'
import ContactEditForm from './ContactEditForm'

class ContactList extends Component {

  state = {
    editContactId: null
  };

  enterEditMode = contactId =>
    this.setState({
      editContactId: contactId
    });

  exitEditMode = () =>
    this.setState({
      editContactId: null
    });

  render() {
    return (
      <ul>
        {
          this.props.contacts.map(
            contact =>
              <li key={contact.id}>
                {
                  this.state.editContactId === contact.id
                    ? <ContactEditForm
                      contactId={contact.id}
                      contactName={contact.contactName}
                      contactPhone={contact.contactPhone}
                      contactEmail={contact.contactEmail}
                      contactCategories={contact.contactCategories}
                      updateContact={this.props.updateContact}
                      exitEditMode={this.exitEditMode}
                    />
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