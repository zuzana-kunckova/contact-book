import React, { useEffect, useState } from "react"

export default function CreateContact() {
    return (
        <>
            <label for="name" className="mr-5">Name</label>

            <input
                type="text"
                id="name"
                name="name"
                required
                minLength="4"
                maxLength="8"
                size="10" />
        </>
    )
}
