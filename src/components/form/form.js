import React from 'react';
import {connect} from 'react-redux';
import BreadCrumbThree from '../BreadCrumbThree';
import {Formik, Form, Field} from "formik/dist/index";
import {billingAction} from "../../Action";
import {initialValues, validateName, validateEmail, validateZip} from "./formHandler";
import Summary from '../Summary';
// import { toast } from 'react-toastify';
// toast.configure()
class FieldLevelValidationForm extends React.Component{
  handleSubmit = (values, {resetForm}) => {
      const {billingAction} = this.props;
      billingAction(values);
      resetForm();
      this.props.history.push('/submit');
      alert('Submitted Successfully!');
    //   toast.success("Submitted Successfully!", {
    //     position: toast.POSITION.TOP_CENTER
    //   });
  } 

  handleShippingAddressCheckbox = (setFieldValue, values) => {
    Object.keys(values).map(item => {
        setFieldValue(['shipping_' + item], values[item]);
    })
}

  render(){
    return (
<React.Fragment>
    <header className="form-header">
        <BreadCrumbThree />
    </header>

        <Summary />

      <Formik
      initialValues={initialValues}
      onSubmit={this.handleSubmit}
      render={({errors, setFieldValue, values}) => (
         <div className="checkOutShop">
          <Form className="form-details">
          <h2 className="checkoutHead">Checkout</h2>
          <h4 className="checkoutHead">Your Details</h4> 
              <fieldset className="billing">
                  <h5 className="billHead">Billing</h5>
                  <div>
                      <label className="checkLabel">Name:</label>
                      <Field
                          className="input-fields"
                          name="username"
                          validate={validateName}
                      />
                      {errors.username &&
              
                          <span className="errors">{errors.username}</span>
              
                      }
                  </div>
                  <div>
                      <label className="checkLabel">Email:</label>
                      <Field
                          className="input-fields"
                          name="email"
                          validate={validateEmail}
                      />
                      {
                          errors.email &&
              
                              <span className="errors">{errors.email}</span>
            
                      }
                  </div>
                  <div>
                      <label className="checkLabel">City:</label>
                      <Field
                          className="input-fields"
                          name="city"
                      />
                  </div>
                  <div>
                      <label className="checkLabel">Address:</label>
                      <Field
                          className="input-fields"
                          name="address"
                      />
                  </div>
                  <div>
                      <label className="checkLabel">Zipcode:</label>
                      <Field
                          className="input-fields"
                          name="zipcode"
                          validate={validateZip}

                      />
                      {
                          errors.zipcode &&
            
                              <span className="errors">{errors.zipcode}</span>
            
                      }
                  </div>
                  <div>
                      <label className="checkLabel">Country:</label>
                      <Field component="select" name="country" className="country">
                          <option value="India">India</option>
                          <option value="Thailand">Thailand</option>
                          <option value="USA">USA</option>
                      </Field>
                  </div>
              </fieldset>

              <div className="billSame">
                  <label className="billCursor">Same as Billing
                    <input
                    type="checkbox"
                    onChange={(e) => this.handleShippingAddressCheckbox(setFieldValue, values)}
                    className="checkBilling billCursor"
                    />
                    <span class="checkmark1"></span>
                  </label>
              </div>

              <fieldset className="shipping">
                  <h5 className="shipHead">Shipping</h5>
                  <div>
                      <label className="checkLabel">Name:</label>
                      <Field
                          className="input-fields"
                          name="shipping_username"
                          validate={validateName}
                      />
                      {errors.username &&
                          <span className="errors">{errors.username}</span>
                    
                      }
                  </div>
                  <div>
                      <label className="checkLabel">Email:</label>
                      <Field
                          className="input-fields"
                          name="shipping_email"
                          validate={validateEmail}
                      />
                      {
                          errors.email &&
                      
                              <span className="errors">{errors.email}</span>
                       
                      }
                  </div>
                  <div>
                      <label className="checkLabel">City:</label>
                      <Field
                          className="input-fields"
                          name="shipping_city"
                      />
                  </div>
                  <div>
                      <label className="checkLabel">Address:</label>
                      <Field
                          className="input-fields"
                          name="shipping_address"
                      />
                  </div>
                  <div>
                      <label className="checkLabel">Zipcode:</label>
                      <Field
                          className="input-fields"
                          name="shipping_zipcode"
                          validate={validateZip}

                      />
                      {
                          errors.zipcode &&
                          
                              <span className="errors">{errors.zipcode}</span>
                       
                      }
                  </div>
                  <div>
                      <label className="checkLabel">Country:</label>
                      <Field component="select" name="country" className="country">
                          <option value="India">India</option>
                          <option value="Thailand">Thailand</option>
                          <option value="USA">USA</option>
                      </Field>
                  </div>
              </fieldset>
              <button type="submit" className="btn btn-danger btn-checkout">
                  Submit
              </button>
          </Form>
          </div>

      )}

  />

</React.Fragment>
);
}
}

const mapDispatchToProps = {
billingAction
}

export default connect(null, mapDispatchToProps)(FieldLevelValidationForm);