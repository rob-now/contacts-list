import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <form>
          <input placeholder={'First and last name'}/>
          <input placeholder={'Phone number'}/>
          <input placeholder={'Email address'}/>
          <input placeholder={'Categories'}/>
          <button>Add</button>
        </form>

        <ul>
          <li>
            <p><strong>John Connor</strong></p>
            <p>700-400-300, jconnor@skynet.com</p>
            <p>[family], [starred]</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
