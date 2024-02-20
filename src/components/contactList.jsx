import React from "react";
import Contact from "./contact";

const ContactList = ({ contacts }) => {
  const generateRandomImg = () => {
    const types = [
      "adventurer",
      "adventurer-neutral",
      "avataaars",
      "avataaars-neutral",
      "big-ears",
      "big-ears-neutral",
      "big-Smile",
      "Bottts",
      "Bottts-Neutral",
      "Croodles",
      "Croodles-Neutral",
      "Fun-Emoji",
      "Icons",
      "Identicon",
      "Initials",
      "Lorelei",
      "Lorelei-Neutral",
      "Micah",
      "Miniavs",
      "Notionists",
      "Notionists-Neutral",
      "Open-Peeps",
      "Personas",
      "Pixel-Art",
      "Pixel-Art-Neutral",
      "Rings",
      "Shapes",
      "Thumbs",
    ];
    const randomTypes = Math.floor(Math.random() * types.length);
    return types[randomTypes];
  };
  return (
    <ul>
      {contacts.map((contact, id) => {
        return (
          <Contact
            key={id}
            icon={`https://api.dicebear.com/7.x/${generateRandomImg().toLowerCase()}/svg`}
            firstName={contact.first_name}
            lastname={contact.last_name}
            phoneNumber={contact.phone}
            altImg={contact.first_name}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
