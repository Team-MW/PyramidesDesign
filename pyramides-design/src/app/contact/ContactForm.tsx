"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className={styles.sent}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: 8 }}>Merci, message envoyé.</h2>
        <p>Nous revenons vers vous rapidement.</p>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Nom</label>
          <input id="name" name="name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Téléphone</label>
          <input id="phone" name="phone" type="tel" />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Votre projet</label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit" className="btn">
        Envoyer
      </button>
    </form>
  );
}
