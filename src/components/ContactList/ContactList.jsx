import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter); // Перейменовано змінну на nameFilter
  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(nameFilter.toLowerCase()) || // Використано nameFilter
      contact.number.includes(nameFilter)
    );
  });

  return (
    <div>
      <ul>
        {contacts &&
          filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
