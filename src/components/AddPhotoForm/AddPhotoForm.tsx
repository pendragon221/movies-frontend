import React, { useState } from 'react'

const AddPhotoForm = ({ setPhotos }: any) => {

    const [url, setUrl] = useState('')

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (url)
        {
            setPhotos((prev: any) => {
                return [...prev, { url: url }]
            })
            setUrl('')
        }
    }

    const onInput = (e: any) => {
        setUrl(e.target.value)
    }

    return (
        <form action="#" method="POST">
            <div className='w-[36rem] flex gap-10 justify-start'>
                <input type='text' name='photo_url'
                    placeholder='Enter link to a photo...'
                    onInput={onInput}
                    value={url}
                    className='w-80 px-5 py-2 shadow-none border border-gray-300 rounded-xl transition-shadow focus:shadow-2xl' />
                <button type='submit'
                    onClick={onSubmit}
                    className='py-2 px-4 transition-all border-2 border-gray-300 rounded-xl hover:border-green-300'>
                    Add photo
                </button>
            </div>
        </form>
    )
}

export default AddPhotoForm