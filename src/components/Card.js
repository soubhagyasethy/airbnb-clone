import React from "react"

export default function Card(props) {
    return (
        <section className="card">
            <img className="card-image" src="../images/katie-zaferes.png" alt="katie zaferes" />
        <div className="card-rating">
            <img className="card-star" src="../images/star.png" alt="star" />
            <p>{props.rating}&nbsp;<span style={{opacity:"0.6"}}>({props.reviewCount})&nbsp;• {props.country}</span> </p>
        </div>
        <div className="card-text">
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
        </section>
        
    )
}