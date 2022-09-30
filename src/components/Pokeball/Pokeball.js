import React from 'react';
import './Pokeball.css';

export default function Pokeball() {
  return (
    <div className="body">
      <div className="container">
        <div className="loadingText">Loading...</div>
        <div className="pokeball"></div>
      </div>
    </div>
  );
}
