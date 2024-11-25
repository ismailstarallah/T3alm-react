import { sculptureList } from './data.js';
import { useState } from 'react';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);


    function handleNextClick() {
        if (index === sculptureList.length - 1) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick} >
                <img
                    src={sculpture.url}
                    alt={sculpture.alt}
                    style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                    }}
                />
            </button>
            <h2>
                <i>{sculpture.name} </i>
                par {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} sur {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Masquer' : 'Afficher'} les détails
            </button>
            {showMore && <p>{sculpture.description}</p>}

        </>
    );
}