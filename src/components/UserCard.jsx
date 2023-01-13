import React from "react";
import mail from "../assets/icons/email.png";
import phone from "../assets/icons/llamada-telefonica.png";
import location from "../assets/icons/marcador-de-posicion.png";

const UserCard = ({ data }) => {
  return (
    <article>
      <h3 className="name">
        {data.name.title} {data.name.first} {data.name.last}
      </h3>
      <div className="card-user">
        <img className="photo" src={data.picture.medium} alt="" />
      </div>
      <div className="info">
        <h3>
          <img className="email" src={mail} alt="" />
          {data.email}
        </h3>
        <h3>
          <img className="phone" src={phone} alt="" />
          {data.phone}
        </h3>
        <h3>
          <img className="location" src={location} alt="" />
          {data.location.city} {data.location.state} {data.location.country}
        </h3>
      </div>
    </article>
  );
};

export default UserCard;
