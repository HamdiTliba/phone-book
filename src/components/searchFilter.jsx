import Button from "./button";
import Input from "./input";

const SearchFilter = ({ toggleButtonClick, toggleSortAZ }) => {
  return (
    <section>
      <Button text={"Show Contacts"} onButtonClick={toggleButtonClick} />
      <Input />
      <Button text={"Reverse Contacts"} onButtonClick={toggleSortAZ} />
    </section>
  );
};

export default SearchFilter;
