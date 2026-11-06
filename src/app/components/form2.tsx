import { useState } from 'react'
import {Person, INITIAL_PERSONS} from "./names"; 
//her importeres typecript reglerne samt arrayet (dataen)

// export default function SimpleForm() {
//   // Holder styr på om formularen er sendt (starter som false)
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitted(true); // Siger til at nu er den sendt!
//   };

//   // Hvis formularen ER sendt, viser vi bare en besked
//   if (isSubmitted) {
//     return <h2>Hej med dig!</h2>;
//   }