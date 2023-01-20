import React from "react"
import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card(props) {
    return (
        <section className="card">
            <img className="card-image" src={katie} alt="katie zaferes"/>
        <div className="card-rating">
            <img className="card-star" src={star} alt="star" />
            {/* <span>{props.rating}</span>
            <span className="grey">({props.reviewCount})</span>
            <span className="grey">•{props.country}</span> */}
            <p>{props.rating}&nbsp;<span style={{opacity:"0.6"}}>({props.reviewCount})&nbsp;• {props.country}</span> </p>
        </div>
        <div className="card-text">
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
        </section>
        
    )
}