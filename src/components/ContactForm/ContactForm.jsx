import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { ErrorMessage } from "formik";

const ContactForm = ({ handleAddContact }) => {
  const nameId = useId();
  const numberId = useId();
  const initialValues = {
    name: "",
    number: "",
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required("Required"),
    number: Yup.number()
      .min(3)
      .max(50)
      .positive()
      .integer()
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    handleAddContact({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameId} className={css.label}>
            Name
          </label>
          <Field type="text" name="name" id={nameId} className={css.input} />
          <ErrorMessage name="name" as="span" />
        </div>

        <div>
          <label htmlFor={numberId} className={css.label}>
            Number
          </label>
          <Field
            type="number"
            name="number"
            className={css.input}
            id={numberId}
          />
          <ErrorMessage name="number" as="span" />
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
