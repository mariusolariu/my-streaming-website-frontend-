import React from 'react';
 
function MoviesCard({ id, shows }) {
  console.log(shows[0].url)  
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        title={shows[0].title}
        src={shows[0].url}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
</div>
  );
}
 
export default MoviesCard;
