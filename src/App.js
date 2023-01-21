import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import './App.css';


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136" 
      />

      <Card
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136" 
      />

      <Card
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136" 
      />
    </div>
  );
}

