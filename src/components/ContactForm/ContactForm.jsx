import React, { Component } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ErrMessage } from 'components/ContactForm/ContactForm.styled';

const pattern = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const title =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";

const validationSchema = yup.object({
  name: yup.string().required().matches(pattern, title),
});

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    console.log(values.name);
    console.log(values.number);

    this.setState(values);

    resetForm();
  };

  render() {
    const { name } = this.state;

    return (
      <Formik
        initialValues={{ name }}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        <Form>
          <label>
            Name
            <Field
              autoComplete="off"
              type="text"
              name="name"
              // value={this.state.value}

              // pattern={pattern}
              // title={title}
              // required
            />
          </label>
          <ErrMessage>
            <ErrorMessage name="name" />
          </ErrMessage>
          <label>
            Number
            <Field
              autoComplete="off"
              type="tel"
              name="number"
              // value={this.state.value}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              // required
            />
          </label>
          <ErrorMessage name="number" component="div" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}

export default ContactForm;
