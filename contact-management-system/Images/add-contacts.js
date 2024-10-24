// pages/add-contacts.js - Add Contacts Page
import { useState } from "react";

export default function AddContacts() {
  const [contact, setContact] = useState({ name: "", phone: "", email: "" });

  const handleAddContact = async (e) => {
    e.preventDefault();
    // Logic to add a contact (API call)
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold text-center">Add Contact</h1>
      <form onSubmit={handleAddContact}>
        <input
          type="text"
          placeholder="Name"
          className="input"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
        <input
          type="phone"
          placeholder="Phone"
          className="input"
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
        <button type="submit" className="btn-primary">Add Contact</button>
      </form>
    </div>
  );
}
