import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import ContactList from "./components/contactList";
import { getContacts } from "./components/db";

function App() {
  const [showContact, setShowContact] = useState(true);
  const dbContacts = getContacts();
  return (
    <div className="App">
      <Title text={"Phone Book"} classes={"title"} />
      <main>
        <Title text={"Display Contacts"} classes={"title main-title"} />
        {showContact && <ContactList contacts={dbContacts} />}
      </main>
    </div>
  );
}

export default App;
