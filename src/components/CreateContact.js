import React, { useState } from "react"
import api from "../api";

export default function CreateContact({ onCreate = () => { } }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // There are two ways to send a post request, fetch and axios. Fetch is installed by default, axios as to be installed separately
        // fetch("http://contact-book-api.test/api/contacts", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         first_name: firstName,
        //         last_name: lastName,
        //         phone_number: phoneNumber,
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        // }).then(onCreate)

        // Axios is the preferred way. In api.js I configured the default headers and url.

        api.post('/contacts', {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
        }).then(onCreate)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-5">
            <div className="space-x-5">
                <label>First name</label>
                <input
                    name='first_name'
                    type='text'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="px-3 py-2 rounded-md"
                />
            </div>

            <div className="space-x-5">
                <label>Last name</label>
                <input
                    name='last_name'
                    type='text'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className="px-3 py-2 rounded-md"
                />
            </div>

            <div className="space-x-5">
                <label>Phone number</label>
                <input
                    name='phone_number'
                    type='number'
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    className="px-3 py-2 rounded-md"
                />
            </div>

            <input
                type='submit'
                value='Submit'
                className="px-3 py-2 bg-white border rounded-md cursor-pointer"
            />
        </form>
    )
}
