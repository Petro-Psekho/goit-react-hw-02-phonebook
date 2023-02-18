import React, { Component } from 'react';

import { Container } from 'components/App.styled';
import ContactForm from 'components/ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    // name: '',
  };

  formSubmitData = data => {
    console.log(data);
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
      </Container>
    );
  }
}

export default App;
