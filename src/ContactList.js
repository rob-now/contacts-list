import React, {Component, Fragment} from 'react'

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
                    : <Fragment>
                      <p><strong>{contact.contactName}</strong></p>
                      <p>{contact.contactPhone}, {contact.contactEmail}</p>
                      <p>{contact.contactCategories.split(',').map(
                        (category, index) => {
                          const categoryDisplay = `[${category.trim()}]`;
                          const categoriesLastIndex = contact.contactCategories.split(',').length - 1;
                          return index === categoriesLastIndex ? categoryDisplay : categoryDisplay + `, `;
                        }
                      )}</p>
                      <button onClick={() => this.enterEditMode(contact.id)}>
                        Edit
                      </button>
                      <button onClick={() => this.props.removeContact(contact.id)}>
                        Delete
                      </button>
                    </Fragment>
                }
              </li>
          )
        }
      </ul>
    )
  }
}

export default ContactList