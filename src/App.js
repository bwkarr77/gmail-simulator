import logo from './logo.svg';
import './App.css';
import './styling/mail.scss';

import {messages} from './data/data.jsx'

import MailList from './components/list/MailList.jsx'

function App() {
  return (
    <div className="container-mobile">
      <div className="header">
        Header
      </div>
      <div id="search-container">
        <a href="#" className='search-button'>
          <div className="fa fa-bars"></div>
          </a>
        <input />
        <a href="#" div className='search-button'>
          <div className="fa fa-user-o"></div>
          </a>
      </div>
      <div className="message-list">
        Messages
        {messages.map((message) => {
          return (
            <div>{message.title}</div>
          )
        })
      }
      <MailList messages={messages} />
      </div>
    </div>
  );
}

export default App;
