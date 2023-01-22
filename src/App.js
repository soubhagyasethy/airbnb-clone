import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import './App.css';
import data from "./data"


export default function App() {
  
  const cards = data.map((item) => {
    return(
      <Card 
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-section">
      {cards}
      {/* <Card
        rating="5.0"
        reviewCount="6"
        location="USA"
        title="Life lessons with Katie Zaferes"
        price="136" 
      /> */}
      </section>
    </div>
  );
}

