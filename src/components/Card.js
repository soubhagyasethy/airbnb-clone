import React from "react"

export default function Card(props) {

    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText="SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText="ONLINE"
    }

    return (
            <div className="card">
                {/* {badgeText && <div className="card-badge">{badgeText}</div>} */}
                <div className="card-badge">{badgeText}</div>
                <img className="card-image" src={props.item.coverImg} alt="cover" />
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