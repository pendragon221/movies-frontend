import React from 'react'

interface Props {
    url: string;
}

const Photo = ({ url }: Props) => {
    return (
        <img src={url} alt='photo'></img>
    )
}

export { Photo }