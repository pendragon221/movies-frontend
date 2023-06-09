import React, { useState } from 'react';
import logo from './logo.svg';
import { Photo } from './components/Photo/Photo';
import AddPhotoForm from './components/AddPhotoForm/AddPhotoForm';


const App = () => {
  const [photos, setPhotos] = useState([
    {
      url: 'https://os1.i.ua/3/1/3775672_3b3c4d05.jpg'
    }, {
      url: 'https://www.radiovaledominho.com/wp-content/uploads/2022/03/New-Project-2022-03-13T011452.219.jpg'
    }, {
      url: 'https://3.bp.blogspot.com/-QkJpUM5zgBw/W5jgJYWGEdI/AAAAAAAAADA/2Lo3RX2rQbI-kppI1Mz1NBA1tDSahGgCwCLcBGAs/w1200-h630-p-k-no-nu/showimg_wad25_full.jpg'
    }, {
      url: 'https://zastavok.net/main/animals/163638740668.jpg'
    },
  ])

  return (
    <div className="min-h-screen w-full h-full">
      <div className='mt-10 flex justify-center'>
        <AddPhotoForm setPhotos={setPhotos} />
      </div>
      <div className='w-full py-10 px-10 grid justify-center grid-cols-1 gap-10 lg:grid-cols-2 lg:px-28 xl:grid-cols-3'>
        {photos.map((photo) => (
          <Photo url={photo.url} />
        )).reverse()}
      </div>
    </div>
    // flex flex-col items-center gap-10
  );
}

export default App;
