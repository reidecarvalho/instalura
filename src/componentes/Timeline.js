import React, { useEffect } from 'react';
import Photo from './Photo';

function Timeline() {

  useEffect(() => {
    fetch('https://instalura-api.herokuapp.com//api/public/fotos/vitor')
    .then(response => response.json())
    .then(fotos => console.log(fotos))
  });

  return (
      <div className="fotos container">
          <Photo />
      </div>
  );
}

export default Timeline;