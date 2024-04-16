
import css from './Contact.module.css'

const Contact = ({name, number, id, onDeleteContact}) => {
  return (
      <div className={css.contactCard}>
          <div>
              <p className={css.contactName}>👤 {name}</p>
          <p  className={css.contactNumber}>📞 {number}</p>
          </div>
          <div><button className={css.contactDelete} onClick={()=>onDeleteContact(id)}>❌</button></div>
    </div>
  )
}

export default Contact