import React from 'react'
import ReactDOM from 'react-dom'
import { Field, reduxForm } from 'redux-form'

'use strict';

const renderInput = field =>   // Define stateless component to render input and errors
  <div>
    <input {...field.input} type={field.type}/>  // Type specified below in <Field>
    {field.meta.touched &&
     field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>

export default class Form extends React.Component {

    render() {

    const { handleSubmit } = this.props       // No fields prop

    return (
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="username">Username</label>
          <Field
            name="username"                   // Specify field name
            component={renderInput}           // Specify render component above
            type="text"/>                     // "type" prop passed to renderInput
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field
            name="password"                   // Specify field name
            component={renderInput}           // Reuse same render component
            type="password"/>                 // "type" prop passed to renderInput
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  };
};
Form: "logIn";
(Form);
