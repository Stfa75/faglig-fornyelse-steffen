
// 1. Her definerer jeg TypeScript-interfacet (hvilke datatyper vores komponent/funktion må modtage)
interface MineProps {
  titel: string; // datatype string 
  overskrift: string;
  antalKort: number; //datatype number
}
//2 Til min lille opgave skal jeg bruge et array, hvor ovenstående datatyper optræder





export default function GameCards({overskrift,antalKort}: MineProps) { //Med ": MineProps delen" her fortæller jeg, at de data, der kommer ind her i denne funktion, skal passe præcis med de datatyper, vi har defineret i MineProps
return (

    <>
    
    
    
    </>

)}
