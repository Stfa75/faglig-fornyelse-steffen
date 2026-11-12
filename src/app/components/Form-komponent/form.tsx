"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react"; 
import { INITIAL_PERSONS } from "./names"; 
import "./form.css"; 

export default function Formular() {
  const router = useRouter();
  const [fejlBesked, setFejlBesked] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    setFejlBesked(null); // Nulstil evt. tidligere fejl

    const formData = new FormData(e.currentTarget);
    const indtastetNavn = formData.get("username") as string;
    const indtastetEmail = formData.get("email") as string;

    // Tjek om personen findes i arrayet (sammenligner med toLowerCase for at undgå store/små bogstav-fejl)
    const personFindes = INITIAL_PERSONS.some( //.some sørger for at det KUN er de personer i mit array der kan logge ind
      (person) => 
        person.name.toLowerCase() === indtastetNavn.toLowerCase() && 
        person.email.toLowerCase() === indtastetEmail.toLowerCase()
    );

    // Hvis personen IKKE findes, viser vi en fejl og stopper funktionen her
    if (!personFindes) {
      setFejlBesked("Fejl: Navn eller e-mail findes ikke i systemet.");
      return; 
    }

    console.log("Bruger godkendt! Sender videre...");
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

        {/* Viser fejlbeskeden hvis brugeren ikke blev fundet */}
        {fejlBesked && <p style={{ color: "red", marginTop: "10px" }}>{fejlBesked}</p>}
      </form>
    </>
  );
}