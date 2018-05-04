import React, {Component} from 'react'

const redFont = {
  color: "red"
};

class ContactEditForm extends Component {
  state = {
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    contactCategories: '',
    formError: null
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      contactName: nextProps.contactName,
      contactPhone: nextProps.contactPhone,
      contactEmail: nextProps.contactEmail,
      contactCategories: nextProps.contactCategories
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.contactName.trim() === '' ||
      this.state.contactPhone.trim() === '' ||
      this.state.contactEmail.trim() === '' ||
      this.state.contactCategories.trim() === ''
    ) {
      this.setState({
        formError: new Error('In order to add contact you need to fill in all inputs.')
      });
      return;
    }

    this.props.updateContact(
      this.props.contactId,
      this.state.contactName,
      this.state.contactPhone,
      this.state.contactEmail,
      this.state.contactCategories
    );

    this.props.exitEditMode();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      formError: null
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder={'First and last name'}
          name={'contactName'}
          value={this.state.contactName}
          onChange={this.handleChange}
        />
        <input
          placeholder={'Phone number'}
          name={'contactPhone'}
          value={this.state.contactPhone}
          onChange={this.handleChange}
        />
        <input
          placeholder={'Email address'}
          name={'contactEmail'}
          value={this.state.contactEmail}
          onChange={this.handleChange}
        />
        <input
          placeholder={'Categories'}
          name={'contactCategories'}
          value={this.state.contactCategories}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>
          Update
        </button>
        {this.state.formError && <p style={redFont}>{this.state.formError.message}</p>}
      </form>
    )
  }
}

export default ContactEditForm