import { Component } from 'react';
import { Form, Input, BtnSubmit } from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetState();
  };

  handleInputValue = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  resetState = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.onFormSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleInputValue}
        />
        <Input
          type="tel"
          name="number"
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleInputValue}
        />
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </Form>
    );
  }
}
