import React, { useState } from 'react';
import axios from 'axios';
import useForm from '../../utils/useForm';

import './add-user.css';

const AddUser = () => {

    const [ sending, setSending] = useState(false);

    const { values, updateValue } = useForm({
        name: '',
        surname: '',
        desc:'',
        // email:'',
        // phone:''
    });

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://77.120.241.80:8911/api/users', {
            name: values.name,
            surname: values.surname,
            desc: values.desc
        })
        .catch((error) => {
                console.log(error);
        });
        setSending(true);
    }

    // const submitUser = e => {
    //     e.preventDefault();
    //     console.log(e);
    //     setSending(true);
    // } 

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Add A New User Form</h2>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>
                                Please, feel form fields below
                        </legend>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    disabled={sending}
                                    className="form-control"
                                    value={values.name}
                                    onChange={updateValue}
                                    placeholder="Enter Name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="surname">Last Name</label>
                                <input
                                    type="text"
                                    name="surname"
                                    disabled={sending}
                                    className="form-control"
                                    value={values.surname}
                                    onChange={updateValue}
                                    placeholder="Enter Last Name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="desc">Last Name</label>
                                <textarea
                                    name="desc"
                                    disabled={sending}
                                    rows="4" cols="50"
                                    className="form-control"
                                    value={values.desc}
                                    onChange={updateValue}
                                    placeholder="Enter You Question"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={sending}
                                className="btn btn-outline-success">
                                {sending ? 'New User Added' : 'Add A New User'}
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUser;