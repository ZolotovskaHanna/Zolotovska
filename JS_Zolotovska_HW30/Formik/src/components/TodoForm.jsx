import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    text: Yup.string()
        .min(5, 'Мінімум 5 символів')
        .required('Обов’язкове поле'), 
});

const TodoForm = ({ onAddTodo }) => {
    const initialValues = { text: '' };

    const handleSubmit = (values, { resetForm }) => {
        onAddTodo(values.text);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, isValid }) => (
                <>
                    <Form className="form">
                        <Field 
                            name="text" 
                            type="text" 
                            className="form__input" 
                            placeholder="Додати завдання..." 
                        />
                        <button 
                            type="submit" 
                            className="form__btn" 
                            disabled={isSubmitting || !isValid} 
                        >
                            Додати
                        </button>
                    </Form>
                    <ErrorMessage 
                        name="text" 
                        component="div" 
                        className="form-error" 
                    />
                </>
            )}
        </Formik>
    );
};

export default TodoForm;
