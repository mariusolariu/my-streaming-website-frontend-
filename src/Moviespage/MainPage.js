import React from 'react';
import MoviesRow from './MoviesRow'; 

function MainPage() {
  const categories = [
    { title: 'Live TV', shows: [{ id: 0, title: 'The Last Ship', url: 'https://www.youtube.com/watch?v=zkYN0MI9nZI' }, /* More shows */] },
    { title: 'News Live Up Next', shows: [{ id: 1, title: 'Anderson Cooper 360', url: 'https://www.youtube.com/watch?v=hbuZrg1ZAnE' }, /* More shows */] },
    { title: 'Live TV', shows: [{ id: 2, title: 'The Last Ship', url: 'https://www.youtube.com/watch?v=ABG0BthfTOQ' }, /* More shows */] },
    { title: 'Live TV', shows: [{ id: 3, title: 'The Last Ship', url: 'https://www.youtube.com/watch?v=sXWFr5Nk-g8' }, /* More shows */] },
    { title: 'Live TV', shows: [{ id: 4, title: 'The Last Ship', url: 'https://www.youtube.com/watch?v=p6X6L4evKgs' }, /* More shows */] },
    { title: 'Live TV', shows: [{ id: 5, title: 'The Last Ship', url: 'https://www.youtube.com/watch?v=MnKas07tYu8' }, /* More shows */] },
    // Add more categories as needed
  ];
 
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      {categories.map(category => (
        <MoviesRow id={category.shows[0].id} key={category.shows[0].id} title={category.title} shows={category.shows} />
      ))}
    </div>
  );
}
 
export default MainPage;