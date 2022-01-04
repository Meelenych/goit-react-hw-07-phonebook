import { useCreateContactMutation } from "../../redux/contacts/slice";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function ContactForm() {
  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    createContact({
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    });
    e.currentTarget.reset();
  };

  return (
    <>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
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
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit">
          {isLoading ? (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          ) : (
            "Add contact"
          )}
        </button>
      </form>
    </>
  );
}
