let contacts = [
  {
    id: 1,
    first_name: "John",
    last_name: "Smith",
    email: "john@example.com",
    phone: "123-456",
  },
];
export function getContacts() {
  let newContacts = [];
  for (let i = 0; i < 1000; i++) {
    let newContact = { ...contacts[0] };
    newContact.id = i + 1;
    newContacts.push(newContact);
  }
  return newContacts;
}
