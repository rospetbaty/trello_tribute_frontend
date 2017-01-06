import React from 'react'
import ReactDOM from 'react-dom';

'use strict';

export default class Form extends React.Component {
  /**
   * Sets the default state of this component.
   * https://facebook.github.io/react/docs/component-specs.html#getinitialstate
   */
   constructor() {
       super();
       this.state = {
          type: 'info',
          message: ''
    };
  };
  /**
   * Form submission callback.
   */
  handleSubmit = (event) =>{
    event.preventDefault();
    // Scroll to the top of the page to show the status message.
    document.getElementById('heading').scrollIntoView();
    this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
  }
  /**
   * Submits form data to the web server.
   */
  sendFormData() {
    // Prepare form data for submitting it.
    var formData = {
      email: ReactDOM.findDOMNode(this.refs.email).value,
      name: ReactDOM.findDOMNode(this.refs.name).value,
      phone: ReactDOM.findDOMNode(this.refs.phone).value,
      project: ReactDOM.findDOMNode(this.refs.phone).value,
      referal: ReactDOM.findDOMNode(this.refs.referal).value,
      rating: ReactDOM.findDOMNode(this.refs.rating).value,
      region: ReactDOM.findDOMNode(this.refs.region).value
    };

    // Extract checked values from "How can we help?" and "How soon do we need to start?".
    formData.areas = this.getSelected('areas');
    formData.when = this.getSelected('when');

    // Send the form data.
    var xmlhttp = new XMLHttpRequest();
    var _this = this;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        var response = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.status === 200 && response.status === 'OK') {
          _this.setState({ type: 'success', message: 'We have received your message and will get in touch shortly. Thanks!' });
        }
        else {
          _this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later or send us an email at info@example.com.' });
        }
      }
    };
    xmlhttp.open('POST', 'http://demo7359522.mockable.io/test', true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(this.requestBuildQueryString(formData));
    console.log(this.requestBuildQueryString(formData));
  }
  /**
   * Transforms an object into a URL querystring.
   *
   * @param object params
   * @return string the formatted querystring.
   */
  requestBuildQueryString(params) {
    var queryString = [];
    for(var property in params)
      if (params.hasOwnProperty(property)) {
        queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
      }
    return queryString.join('&');
  }
  /**
   * Extracts selected values from checkboxes and radios.
   *
   * @param string fieldName
   * @return string the selected value(s).
   */
  getSelected(fieldName) {
    var i;
    var fields = document.getElementsByName(fieldName);
    var selectedFields = [];
    for (i = 0; i < fields.length; i++) {
      if (fields[i].checked === true) {
        selectedFields.push(fields[i].value);
      }
    }
    return selectedFields.join(', ');
  }
  /**
   * Renders the component.
   * https://facebook.github.io/react/docs/component-specs.html#render
   */
  render(){
    if (this.state.type && this.state.message) {
      var classString = 'alert alert-' + this.state.type;
      var status = <div id="status" className={classString} ref="status">
                     {this.state.message}
                   </div>;
    }
    return (
      <div className="container">

        {status}

        <form className="well form-horizontal" action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-md-4 control-label">
              Your full name *
            </label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input className="form-control" placeholder="Full Name" name="name" ref="name" required type="text" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-4 control-label">Your email address *</label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                <input className="form-control" placeholder="E-mail" name="email" ref="email" required type="email" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-4 control-label">
              Your Phone No *
            </label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-phone"></i></span>
            <input className="form-control" placeholder="Phone No" name="phone" ref="phone" required type="phone" />
          </div>
        </div>
      </div>


          <div className="form-group row">
            <h3>How can we help&#63; *</h3>
            <label className="checkbox-inline"><input name="areas" ref="areas" type="checkbox" value="Website Issue" />Website Issue </label>
            <label className="checkbox-inline"><input name="areas" ref="areas" type="checkbox" value="Mobile Issue" />Mobile Issue </label>
            <label className="checkbox-inline"><input name="areas" ref="areas" type="checkbox" value="Refund" />Refund</label>
          </div>

          <div className="form-group row">
            <h3>Your priority is: *</h3>
            <label className="radio-inline"><input name="when" ref="when" type="radio" value="Immediate" /><span>Immediate </span></label>
            <label className="radio-inline"><input name="when" ref="when" type="radio" value="1-3 days" /><span>1-3 days </span></label>
            <label className="radio-inline"><input name="when" ref="when" type="radio" value="Not sure" /><span>Not sure</span></label>
          </div>

          <div className="form-group row">
            <label htmlFor="project">Describe your problem *</label>
            <textarea className="form-control" name="project" ref="project" rows="6"  />
          </div>

          <div className="form-group row">
            <label htmlFor="referral">How did you hear about us&#63; </label>
            <input className="form-control" name="referal" ref="referal" type="text" />
          </div>

        


          <div className="form-group row">
            <button className="btn btn-primary" type="submit">Send your form</button>
          </div>
        </form>
      </div>
    );
  }
};
