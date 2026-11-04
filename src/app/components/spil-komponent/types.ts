
// 1. Her definerer jeg TypeScript-interfacet (hvilke datatyper vores komponent/funktion må modtage)
export type Card = {
  id: number;        // Unik identifikation af det enkelte kort
  emoji: string;     // Billedet/ikonet på kortet
  isFlipped: boolean; // Om kortet ligger med fronten opad
  isMatched: boolean; // Om kortet allerede er fundet som et par /skal bruges i en useState
};
export const emojis: string[] = ['🍕', '🎮', '🚀', '🐱'];
//2 Til min lille opgave skal jeg bruge et array, hvor ovenstående datatyper optræder

const initialCards: Card[] = [
  { id: 1, emoji: '🍕', isFlipped: false, isMatched: false },
  { id: 2, emoji: '🍕', isFlipped: false, isMatched: false },
  { id: 3, emoji: '🎮', isFlipped: false, isMatched: false },
  { id: 4, emoji: '🎮', isFlipped: false, isMatched: false },
  { id: 5, emoji: '🚀', isFlipped: false, isMatched: false },
  { id: 6, emoji: '🚀', isFlipped: false, isMatched: false },
  { id: 7, emoji: '🐱', isFlipped: false, isMatched: false },
  { id: 8, emoji: '🐱', isFlipped: false, isMatched: false },
];




