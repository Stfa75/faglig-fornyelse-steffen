// 1. Regelsættet (TypeScript-typen)
export type Person = {
  id: number; //Det er her datatyperne bliver defineret for hvert egenskab i mit array
  name: string;
  email: string;
};

// 2. Start-array med et par test-personer
export const INITIAL_PERSONS: Person[] = [ 
  //Grunden til at der er et sæt [] bag persons er at det er sådan man kommunikerer med typescript:
  // Dette er en liste (array) og alle ting/elementer i arrayet overholder de regler du har sat (
  //datatyper du har sat for de  enkelte peoperties /egenskaber 
 
  {
    id: 1,
    name: 'Sofie Hansen',
    email: 'sofie@example.com'
  },
  {
    id: 2,
    name: 'Lars Jensen',
    email: 'lars@example.com'
  }
];