import React from 'react'
import { withFormik, Form, Field } from 'formik';
// import * as yup from 'yup'


const Forms = (props) => {
    console.log(props)
    return (
      <Form>
        <Field type='text' name='name' placeholder="name" /> 
        <Field type='text' name='email' placeholder='email' /> 
        <Field type='text' name='password' placeholder='password' /> 
        <input type='checkbox' name='Terms of service'/> 
        <button type='submit'>Submit</button>
      </Form>
    )
    }
  
  export default withFormik ({
      mapPropsToValues: (values) => {
          return {
            name: values.name || "",
            email: values.email || "",
            password: values.password || ""
        }
      },
      handleToSubmit: (values) => {
          console.log(values)
      } 
  })(Forms)