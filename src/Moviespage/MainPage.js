import React from 'react';
import MoviesRow from './MoviesRow'; 

function MainPage() {
  const categories = [
    { title: 'Live TV', shows: [{ id: 0, title: 'The Last Ship', url: 'https://www.youtube.com/embed/sXWFr5Nk-g8' }, { id: 1, title: 'The Last Ship', url: 'https://www.youtube.com/embed/cHsYClnlZEM?si' }, { id: 2, title: 'The Last Ship', url: 'https://www.youtube.com/embed/pG2fSL1pC139mTWj'}] }, 
    { title: 'News Live Up Next', shows: [{ id: 0, title: 'Anderson Cooper 360', url: 'https://www.youtube.com/embed/zkYN0MI9nZI?si=rRFKJIkYOLZoq6X1' }, { id: 1, title: 'Anderson Cooper 360', url: 'https://www.youtube.com/embed/HVjQp54UboA?si=KapIbxwLJEaA4sQo' }, { id: 2, title: 'Anderson Cooper 360', url: 'https://www.youtube.com/embed/GIhh-HitJTk?si=tnxVCTdnN5LQ78dQ' }  ] },
    { title: 'Live TV', shows: [{ id: 0, title: 'The Last Ship', url: 'https://www.youtube.com/embed/GCJnG6DYEeg?si=FJ0eZj2r81j1Y4Ww' }, { id: 1, title: 'The Last Ship', url: 'https://www.youtube.com/embed/ZrKCfj3u2cs?si'} ] }, 
    { title: 'Live TV', shows: [{ id: 0, title: 'The Last Ship', url: 'https://www.youtube.com/embed/E1_R7Ze84mo?si=jnOCeQL4jg95b9Kl"' }, ] }, { id: 1, title: 'The Last Ship', url: 'https://www.youtube.com/embed/VhuuwjU8Jqw?si'} ] }, { id: 2, title: 'The Last Ship', url:'https://www.youtube.com/embed/izAG-QtYGh4?si'} ] },
    { title: 'Live TV', shows: [{ id: 0, title: 'The Last Ship', url: 'https://www.youtube.com/embed/AiESdN5SC8s?si=Bdc7UF_0siSfA3ee' }, ] }, { id: 0, title: 'The Last Ship', url: 'https://www.youtube.com/embed/EgrehrOCpcA?si' }
    { title: 'Live TV', shows: [{ id: 0, title: 'The Last Ship', url: 'https://www.youtube.com/embed/5h0L68KEdxc?si=pMzXt_FZJdyngpa3' }, ] },
    // Add more categories as needed
  ];
 
  return (
    <div style={{ backgroundColor: 'black', color: 'white'}}>
      {categories.map(category => (
        <MoviesRow id={category.shows[0].id} key={category.shows[0].id} title={category.title} shows={category.shows} />
      ))}
    </div>
  );
}
 
export default MainPage;