import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ErrMessage } from 'components/ContactForm/ContactForm.styled';

const pattern = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const title =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";

const initialValues = {
  name: '',
};

const validationSchema = yup.object({
  name: yup.string().required().matches(pattern, title),
});

export const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">
          Name
          <Field
            autoComplete="off"
            type="text"
            name="name"
            // pattern={pattern}
            // title={title}
            // required
          />
        </label>
        <button type="submit">Add contact</button>
        <ErrMessage>
          <ErrorMessage name="name" />
        </ErrMessage>
      </Form>
    </Formik>
  );
};
