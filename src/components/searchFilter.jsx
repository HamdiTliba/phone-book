import Button from "./button";
import Input from "./input";

const SearchFilter = ({
  toggleButtonClick,
  toggleSortAZ,
  handleSearchContact,
}) => {
  return (
    <section>
      <Button text={"Show Contacts"} onButtonClick={toggleButtonClick} />
      <Input handleSearchContact={handleSearchContact} />
      <Button text={"Reverse Contacts"} onButtonClick={toggleSortAZ} />
    </section>
  );
};

export default SearchFilter;
