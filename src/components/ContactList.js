import React, { useEffect, useState } from "react"
import CreateContact from "./CreateContact"

export default function ContactList() {
    const [contacts, setContacts] = useState([])

    const fetchContacts = () => {
        return fetch('http://127.0.0.1:8000/api/contacts', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((contacts) => {
                return setContacts(contacts)
            })
    }

    useEffect(() => {
        fetchContacts();
    }, [])

    return (
        <>
            <div className="flex items-center justify-center py-5 bg-slate-200">
                <CreateContact />
            </div>

            <div className='flex items-center justify-center py-10 bg-slate-200'>
                <div>
                    {contacts && contacts.length > 0 && contacts.map((contact, index) => (
                        <h1
                            className='p-5 bg-white shadow-sm'
                            key={index}
                        >
                            Hello, {contact.first_name}!
                        </h1>
                    ))}
                </div>
            </div>
        </>
    )
}


