import { useState } from 'react'

const Message = ({message}) => {
    const [rating, setRating] = useState(message.rating)
    const updateRating = async (newRating) => {
        let response = await fetch('/message/'+ message._id, {
            method:'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ rating: newRating})
        })
        if (response.status === 200){
            console.log('success')
        }else {
            console.log('failure')
        }
    }
    const likeMessage = () => {
        console.log('you liked this message')
        let newRating = rating +1
        setRating(newRating)
        updateRating(newRating)
    }
    const dislikeMessage = () => {
        console.log('you disliked this message')
        let newRating = rating -1
        setRating(newRating)
        updateRating(newRating)
        
    }
    return (
        <div className='message'>
            <p>{message.name}</p>
            <p>{message.text}</p>
            <p>{rating}</p>
            <button onClick={()=>likeMessage(message)}>Like</button>
            <button onClick={()=>dislikeMessage(message)}>DisLike</button>
        </div>
    )
}

export default Message