import React, {Component} from 'react';

class App extends Component {

  state = {
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    contactCategories: '',
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

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };


  render() {
    return (
      <div>
        <h2>Contacts</h2>
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
          <button>Add</button>
        </form>

        <ul>
          <li>
            <p><strong>John Connor</strong></p>
            <p>700-400-300, jconnor@skynet.com</p>
            <p>[family], [starred]</p>
          </li>
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
                </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
