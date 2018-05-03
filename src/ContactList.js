import React, {Component} from 'react'

class ContactList extends Component {
  render() {
    return(
      <ul>
        {
          this.props.contacts.map(
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
                <button onClick={() => this.props.removeContact(contact.id)}>
                  Delete
                </button>
              </li>
          )
        }
      </ul>
    )
  }
}

export default ContactList