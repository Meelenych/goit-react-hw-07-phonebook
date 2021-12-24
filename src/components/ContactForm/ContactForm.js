import { useState } from "react";
import { addContact } from "../../redux/contacts/actions";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacts/selectors";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "phoneNumber":
        setPhoneNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    contacts.map((contact) => contact.name).includes(name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({ name, phoneNumber }));
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setPhoneNumber("");
  };

  return (
    <>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            onChange={handleChange}
            name="phoneNumber"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit"> Add Contact</button>
      </form>
    </>
  );
}
