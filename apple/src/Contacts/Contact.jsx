import React, { useEffect, useState } from 'react';
import ContactList from './ContactList';
import Axios  from 'axios';
import Details from './Details';

const Contacts = () => {
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
      .then((res) => {
        setContacts(res.data);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <pre>{JSON.stringify(contacts)}</pre>
      <div className="container">
        <div className="row">
          <div className="col-8">
            {contacts.length > 0 ? <ContactList contacts={contacts} /> : <h1>No Data</h1>}
          </div>
          <div className="col-4">
            <Details />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
