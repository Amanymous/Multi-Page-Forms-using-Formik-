import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Props {
  handleNext: () => void;
}

export const form1: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext();
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="email">Your Email</label>
        <Field name="email" type="text" />
        <ErrorMessage name="email" />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
