import React from 'react'

interface Props {
    url: string;
}

const Photo = ({ url }: Props) => {
    return (
            <div className='max-w-xl'>
                <img src={url} alt='photo'></img>
            </div>
    )
}

export { Photo }