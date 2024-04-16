import Contact from "../Contact/Contact"


const ContactList = ({contacts, onDeleteContact}) => {
  return (
      <div>
    <ul>
      {Array.isArray(contacts) &&
        contacts.map((contact) => (
          <li key={contact.id}>
            <Contact {...contact} onDeleteContact={onDeleteContact} />
          </li>
        ))}
          </ul>
      </div>
  )
}

export default ContactList