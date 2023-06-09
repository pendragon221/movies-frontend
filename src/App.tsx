import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
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
        <div className="min-h-screen w-full h-full bg-slate-100]">
            <div className='w-full p-10 flex flex-col items-center gap-10'>
                <AddPhotoForm setPhotos={setPhotos}/>
                {photos.map((photo) => (
                    <Photo url={photo.url} />
                )).reverse()}
            </div>
        </div>
    );
}

export default App;
