import React from 'react'

export const HarryPotter = () => {
  return (
    <>
      <header>Welcome to Harry Potter web quiz </header>
      <p>1. What is Lord Voldemort’s real name?</p>
      <input></input>

      <p>2. What’s the LAST line of the book, “Harry Potter and the Sorcerer’s Stone”?</p>
      <input type="radio"/>"Goodbye, for now, Hogwarts"
      <br/>
      <input type="radio"/>"Harry, Ron, and Hermionse looked at each other sheepishly and smiled"
      <br/>
      <input type="radio"/>"I'm going to have a lot of fun with Dudley this summer..."
      <br/>
      <input type="radio"/>"'Untail the fall', sail Dumbledore with a nod."

      <p>3. According to the Dursleys, did Harry’s parents die in a car crash?</p>
      <select>
        <option>True</option>
        <option>False</option>
      </select>

      <p>4. What are the houses in Hogwarts?</p>
      <input type="radio" value="Gryffindor"/>Gryffindor
      <br/>
      <input type="radio" value="Whitehouse"/>Whitehouse
      <br/>
      <input type="radio" value="Ravenclaw"/>Ravenclaw
      <br/>
      <input type="radio" value="Hufflepuff"/>Hufflepuff
      <br/>
      <input type="radio" value="Greenhouse"/>Greenhouse
      <br/>
      <input type="radio" value="Slytherin"/>Slytherin
      
      <p>5. How old is Harry Potter in book 1 “Harry Potter and the Sorcerer's Stone”?</p>

      <button>Submit</button>
    </>
  )
}

