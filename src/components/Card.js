import React from "react"

export default function Card(props) {
    return (
            <div className="card">
                <img className="card-image" src={props.item.coverImg} alt="katie zaferes" />
                <div className="card-rating">
                    <img className="card-star" src="../images/star.png" alt="star" />
                    <p>{props.item.stats.rating}&nbsp;<span style={{opacity:"0.6"}}>({props.item.stats.reviewCount})&nbsp;• {props.item.location}</span> </p>
                </div>
                <div className="card-text">
                    <p>{props.item.title}</p>
                    <p><b>From ${props.item.price}</b> / person</p>
                </div>
            </div>
        
    )
}