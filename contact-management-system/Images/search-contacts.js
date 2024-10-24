// pages/search-contacts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchContacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleSearch = async () => {
    if (!searchTerm) {
      setContacts([]);
      return;
    }
    try {
      const response = await axios.get(`/api/contacts/search?term=${searchTerm}`);
      setContacts(response.data);
    } catch (error) {
      console.error('Error searching contacts:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Search Contacts</h1>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        className="border p-2 mb-4 w-full"
      />
      <div>
        {contacts.length > 0 ? (
          contacts.map(contact => (
            <div key={contact.id} className="border-b py-2">
              <span>{contact.name} - {contact.email}</span>
            </div>
          ))
        ) : (
          <p>No contacts found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchContacts;
