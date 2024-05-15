import React from 'react';
 
function MoviesCard({ id, shows }) {
  console.log(shows[0].url)  
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe width="560" height="315" src={shows[0].url} title={shows[0].title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
  );
}
 
export default MoviesCard;
