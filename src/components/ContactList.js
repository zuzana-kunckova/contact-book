import React, { useEffect, useState } from "react"
import CreateContact from "./CreateContact"

export default function ContactList() {
    const [contacts, setContacts] = useState([])

    const fetchContacts = () => {
        return fetch('http://contact-book-api.test/api/contacts', {
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
                {/* Because the list of contacts updates when a new contact is added, I need to pass the fetchContacts
                    function as a prop to CreateContact component.
                */}
                <CreateContact onCreate={fetchContacts} />
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


