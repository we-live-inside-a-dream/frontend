import Message from './Message'

const MessageList = ({messages}) => {

    return messages.map((message) => (
        <Message message={message} />
    ))
}

export default MessageList
