import {Person, INITIAL_PERSONS} from "./names"; 
import"./form.css"

//enkel lille funktion der sender dig videre til siden. tak.html
 export default function Formular (){
const handleSubmit = (e: React.SubmitEvent) => { //e: er forkortelse for event
  e.preventDefault(); // Stopper siden i at genindlæse

  // Sender brugeren videre til en anden side/URL
  window.location.href = "/tak"; 
};
//selve formen
    return(
<>

<form onSubmit={handleSubmit} className="formular">  
  <label htmlFor="username">Name:</label>
  <input type="text" id="name" name="username" required />
  <label htmlFor="email">M@il:</label>
  <input type="email" id="email" name="email" required></input>
  <button type="submit" className="knap">Submit</button>
</form>


</>

 )}





