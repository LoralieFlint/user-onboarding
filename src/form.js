import React from 'react'
import { withFormik, Form, Field } from 'formik';
// import * as yup from 'yup'


const Forms = (props) => {
    return (
      <Form>
        <Field type='text' name='name' placeholder="name" /> 
        <Field type='text' name='email' placeholder='email' /> 
        <Field type='text' name='password' placeholder='password' /> 
        <input type='checkbox' /> 
        <button type='submit'>Submit</button>
      </Form>
    )
    }
  
  export default withFormik ({
      mapPropsToValues: (props) => {
          return {
              some: 'value'
          }
      } 
  })(Forms)