import React, {useEffect, useState} from 'react';
import "../../styles/contactsStyle.css";

const Contacts = () => {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: ""
    });
    const [error, setError] = useState({
        nameErr: "",
        emailErr: "",
        phoneErr: ""
    });
    const [data, setData] = useState([]);

    function Change(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function validation(e) {
        const pattern = /^[a-zA-Z]{2,40}$/;
        const emRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

        const errorMassages = {
            nameErr: "",
            emailErr: "",
            phoneErr: ""
        }

        let valid = true;

        if (!form.fullName) {
            errorMassages.nameErr = "Name is Required";
            valid = false;
        } else if (pattern.test(form.fullName) === false) {
            errorMassages.nameErr = "Name is not valid, try again";
            valid = false;
        }

        if (!form.email) {
            errorMassages.emailErr = "Email is Required";
            valid = false;
        } else if (emRegex.test(form.email) === false) {
            errorMassages.emailErr = "Email in't valid, try again"
            valid = false;
        }

        if (!form.phone) {
            errorMassages.phoneErr = "Phone Number is Required"
        }

        setError(errorMassages);
        return valid;
    }

    function send(e) {
        e.preventDefault();

        if (validation(e)) {
            setData(oldData => [form, ...oldData]);
        }
    }

    useEffect(() => {
        let local_data = localStorage.getItem('dataKey');

        if(!JSON.parse(local_data).length)
            localStorage.setItem('dataKey', JSON.stringify(data));

        setForm({
            fullName: "",
            email: "",
            phone: ""
        })
    }, [data]);

    return (
        <div className="contact">
            <form>
                <div className="formVessel">
                    <input
                        type="text"
                        name="fullName"
                        id="name"
                        placeholder="Full Name"
                        onChange={Change}
                    />
                    {error.nameErr? <p className={'error-message'}>{error.nameErr}</p> : " "}
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={Change}
                    />
                    {error.emailErr? <p className={'error-message'}>{error.emailErr}</p> : " "}
                    <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Phone number"
                        onChange={Change}
                    />
                    {error.phoneErr? <p className={'error-message'}>{error.phoneErr}</p> : " "}
                    <button
                        onClick={send}
                        className="sendButton">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contacts;