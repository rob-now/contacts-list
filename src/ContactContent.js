import React, {Component, Fragment} from 'react'

class ContactContent extends Component {
  render() {
    const contact = this.props.contact;
    return (
      <Fragment>
        <p><strong>{contact.contactName}</strong></p>
        <p>{contact.contactPhone}, {contact.contactEmail}</p>
        <p>{contact.contactCategories.split(',').map(
          (category, index) => {
            const categoryDisplay = `[${category.trim()}]`;
            const categoriesLastIndex = contact.contactCategories.split(',').length - 1;
            return index === categoriesLastIndex ? categoryDisplay : categoryDisplay + `, `;
          }
        )}</p>
        <button onClick={() => this.props.enterEditMode(contact.id)}>
          Edit
        </button>
        <button onClick={() => this.props.removeContact(contact.id)}>
          Delete
        </button>
      </Fragment>
    )
  }
}

export default ContactContent