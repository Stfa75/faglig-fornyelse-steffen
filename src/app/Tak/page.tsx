"use client";

import { useState } from "react";

export default function Tak() {
  // Vi holder styr på hvilket trin vi er nået til (starter på 1, så kun den første vises)
  const [synligeSektioner, setSynligeSektioner] = useState(1);

  const naesteSaeetning = () => {
    // Øger tallet med 1, men stopper ved 4
    if (synligeSektioner < 4) {
      setSynligeSektioner(synligeSektioner + 1);
    }
  };

  return (
    <>
      <div>
        <h1>Tak for dit Login og velkommen til.....</h1>
        <p className="undertekst"> 
          Dette er en side for de mennesker som har lidt for lidt selvtillid. <br />
          Hver sætning, på denne side, er designet til at fjerne den væmmelige usikkerhed
        </p>    
      </div>

      {/* aria-live sørger for, at skærmlæsere opdager, når nye sætninger dukker op. Dette gør den mere brugervenli over for svagtseende - og eventuelt blinde brugere */} 
       <div className="linjer" aria-live="polite">
        <section>
          <h3>Første sætning:</h3>
          <p>Du er mere end bare god nok og vil altid være det</p>  
        </section>

        {/* Anden sektion vises kun hvis synligeSektioner er 2 eller mere */}
        {synligeSektioner >= 2 && (
          <section>
            <h3>Anden sætning:</h3>
            <p>Du kan meget mere end du går og tror - find dit mod</p>
          </section>
        )}

        {/* Tredje sektion vises kun hvis synligeSektioner er 3 eller mere */}
        {synligeSektioner >= 3 && (
          <section>
            <h3>Tredje sætning:</h3>
            <p>Altid stol på din viden og dine evner - du vil altid have hvad der skal til</p>
          </section>
        )}

        {/* Fjerde sektion vises kun hvis synligeSektioner er 4 */}
        {synligeSektioner >= 4 && (
          <section>
            <h3>Fjerde sætning:</h3>
            <p>
              At være i tvivl ændrer ikke på hvor dygtig du er <br />
              Du har allerede klaret svære ting før og du klarer også hvad du kæmper med nu
            </p>
          </section>
        )}
      </div>

      {/* Knappen vises kun så længe der er flere sætninger tilbage at vise */}
      {synligeSektioner < 4 && (
        <button onClick={naesteSaeetning} className="knap" style={{ marginTop: "20px" }}>
          Vis næste sætning
        </button>
      )}
    </>
  );
}