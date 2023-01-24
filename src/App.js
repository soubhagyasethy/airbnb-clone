import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import './App.css';
import data from "./data"


export default function App() {
  
  const cards = data.map((item) => {
    return(
      <Card item={item} />
    )
  })
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-section">
      {cards}
      </section>
    </div>
  );
}

