import React from 'react';
import './Card.css';

function Card({ img, name, desc }) {
  return (
    <div className="card">
      <img src={img} alt={name} className="card-img" height={130} />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-desc">{desc}</p>
        <div className='btn'>
        <button class="bn30" role="button">join</button>
        <button class="bn30" role="button">share</button>
        </div>
        
      </div>
    </div>
  );
}

export default Card;
