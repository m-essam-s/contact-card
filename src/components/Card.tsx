import { useState } from "react";
import Star from "./Star";


const Card = () => {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    const toggleFavorite = (): void => {
        setContact({
            ...contact,
            isFavorite: !contact.isFavorite
        })
    }


    return (
        <article className="card">
            <img src="./images/user.png" className="card--image" />
            <div className="card--info">
                <Star
                    isFavorite={contact.isFavorite}
                    toggleFavorite={toggleFavorite}
                />
                <h2 className="card--name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <hr />
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
            </div>

        </article>

    )
}

export default Card;