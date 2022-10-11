import React from "react";
import "./Contacts.css";

const contacts = {
  telegram: "@IamTRS",
};

console.log(contacts.telegram);

export const Contacts = () => {
  return (
    <main className="wrapper">
      <div className="container contacts">
        <div className="contacts__content">
          <span>Leave your number here</span>
          <br />
          <input type="tel"></input>
          <button>Send</button>
        </div>
      </div>
    </main>
  );
};
