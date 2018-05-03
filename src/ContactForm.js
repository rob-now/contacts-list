import React, {Component} from 'react'


class ContactForm extends Component {
  state = {
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    contactCategories: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addContact(
      this.state.contactName,
      this.state.contactPhone,
      this.state.contactEmail,
      this.state.contactCategories
    );

    this.setState({
      contactName: '',
      contactPhone: '',
      contactEmail: '',
      contactCategories: ''
    })
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
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
          Add
        </button>
      </form>
    )
  }
}

export default ContactForm