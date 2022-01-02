import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

export default function App() {
  console.log("Hi %cthere %cguys", "color: red", "color: green");
  return (
    <div className="container">
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
