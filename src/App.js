import logo from "./logo.svg";

import "./App.css";

function App() {
  class Contact {
    constructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
    }
  }
  const contact1 = new Contact("jerome", "jerome@gmail.com", "0606060606");
  const contact2 = new Contact("Jules", "jules@gmail.com", "0606060606");
  const contact3 = new Contact("Robert", "robert@gmail.com", "0606060606");
  const contact4 = new Contact("Raymond", "raymond@gmail.com", "0606060606");
  const contact5 = new Contact("Ginette", "ginette@gmail.com", "0606060606");
  return (
    <div>
      <h1 className="text-center">My contacts list 📱</h1>

      <div id="contact-list">
        <div className="contact">
          <div className="info">
            <p>{contact1.name}</p>
            <p>{contact1.email}</p>
            <p>{contact1.phone}</p>
          </div>
          <div className="delete-button">
            <button>Delete</button>
          </div>
        </div>
        <hr />
        <div className="contact">
          <div className="info">
            <p>{contact2.name}</p>
            <p>{contact2.email}</p>
            <p>{contact2.phone}</p>
          </div>
          <div className="delete-button">
            <button>Delete</button>
          </div>
        </div>
        <hr />
        <div className="contact">
          <div className="info">
            <p>{contact3.name}</p>
            <p>{contact3.email}</p>
            <p>{contact3.phone}</p>
          </div>
          <div>
            <div className="delete-button">
              <button>Delete</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="contact">
          <div className="info">
            <p>{contact4.name}</p>
            <p>{contact4.email}</p>
            <p>{contact4.phone}</p>
          </div>
          <div className="delete-button">
            <button>Delete</button>
          </div>
        </div>
        <hr />
        <div className="contact">
          <div className="info">
            <p>{contact5.name}</p>
            <p>{contact5.email}</p>
            <p>{contact5.phone}</p>
          </div>
          <div className="delete-button">
            <button>Delete</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default App;
