import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import ContactList from "./components/contactList";
import { getContacts } from "./components/db";
import SearchFilter from "./components/searchFilter";

function App() {
  const [showContact, setShowContact] = useState(false);
  const [sortAZ, setSortAz] = useState(true);
  const [searchContact, setSearchContact] = useState("");
  const dbContacts = getContacts();
  const toggleButtonClick = () => {
    showContact ? setShowContact(false) : setShowContact(true);
  };
  const toggleSortAZ = () => {
    sortAZ ? setSortAz(false) : setSortAz(true);
  };
  return (
    <div className="App">
      <Title text={"Phone Book"} classes={"title"} />
      <main>
        <SearchFilter
          toggleButtonClick={toggleButtonClick}
          toggleSortAZ={toggleSortAZ}
          handleSearchContact={setSearchContact}
        />
        <Title text={"Display Contacts"} classes={"title main-title"} />
        {showContact && (
          <ContactList
            contacts={(sortAZ
              ? dbContacts.sort((a, b) =>
                  a.first_name.localeCompare(b.first_name)
                )
              : dbContacts.sort((a, b) =>
                  b.first_name.localeCompare(a.first_name)
                )
            ).filter((contact) => {
              if (searchContact === "") {
                return contact;
              } else if (
                contact.first_name.toLocaleLowerCase().includes(
                  searchContact.toLowerCase()
                )
              ) {
                return contact;
              }
            })}
          />
        )}
      </main>
    </div>
  );
}

export default App;
