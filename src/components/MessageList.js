const MessageList = ({messages, name}) => {
const likeMessage = () => {
    console.log('you liked this message')
}
const dislikeMessage = () => {
    console.log('you disliked this message')
}
    return messages.map((message) => <div className='message'><p>{message.name}</p><p>{message.text}</p>
    <button onClick={likeMessage()}>Like</button>
    <button onClick={dislikeMessage()}>DisLike</button>
    </div>)
}

export default MessageList
