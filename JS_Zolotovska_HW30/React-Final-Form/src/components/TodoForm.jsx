import React from 'react';
import { Form, Field } from 'react-final-form';

const TodoForm = ({ onAddTodo }) => {
    const onSubmit = ({ text }) => onAddTodo(text);

    const validate = ({ text }) => ({
        text: !text || text.length < 5 ? 'Мінімум 5 символів' : undefined
    });

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, form, submitting, pristine, hasValidationErrors }) => (
                <form onSubmit={handleSubmit} className="form">
                    <Field name="text">
                        {({ input, meta }) => (
                            <div>
                                <input 
                                    {...input} 
                                    type="text" 
                                    placeholder="Додати завдання..." 
                                    className="form__input" />
                                {meta.error && meta.touched && (
                                    <span style={{ color: 'red' }}>{meta.error}</span>
                                )}
                            </div>
                        )}
                    </Field>
                    <button 
                        type="submit" 
                        disabled={submitting || pristine || hasValidationErrors} 
                        className="form__btn">
                        Додати
                    </button>
                </form>
            )}
        />
    );
};

export default TodoForm;


