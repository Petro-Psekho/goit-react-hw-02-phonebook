import { Formik } from 'formik';

export const ContactForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const { name } = e.target.elements;
    console.log(name.value);
  };

  return (
    <div>
      <form action="Submit" onSubmit={handleSubmit}>
        <label htmlFor="Name">
          Name
          <input
            type="text"
            name="name"
            // onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
