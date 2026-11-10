"use client";

import { useRouter } from "next/navigation";
import React from "react"; // Husk at importere React til form-typen
import { Person, INITIAL_PERSONS } from "./names"; 
import "./form.css"; 

export default function Formular() {
  const router = useRouter();

  // 1. Vi udskifter 'any' med den rigtige type for en formular-hændelse
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 

    // 2. Vi henter felterne ud fra formularen (bruger e.currentTarget)
    const formData = new FormData(e.currentTarget);
    const indtastetNavn = formData.get("username") as string;
    const indtastetEmail = formData.get("email") as string;

    // 3. Vi bruger din 'Person'-type til at oprette et nyt objekt, 
    // så TypeScript tjekker, at alle felterne er der og har den rigtige datatype
    const nyPerson: Person = { //Ved at skrive Person bruger vi de datatyper der er defineret i Person variablen inde i vores name.ts

      id: INITIAL_PERSONS.length + 1,
      name: indtastetNavn,
      email: indtastetEmail
    };

    console.log("Godkendt af TypeScript! Ny person:", nyPerson);

    router.push("/Tak"); 
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="formular">  
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="username" required />
        
        <label htmlFor="email">M@il:</label>
        <input type="email" id="email" name="email" required />
        
        <button type="submit" className="knap">Submit</button>
      </form>
    </>
  );
}