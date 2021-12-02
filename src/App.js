
import './App.css';
import { useEffect, useState } from 'react'
import MessageList from './components/MessageList';


function App() {
  const [messages, setMessages] = useState()

  useEffect(() => {
    const getMessages = async () => {
      let response = await fetch('/messages')
      let newMessages = await response.json()
      setMessages(newMessages)
    }
    getMessages()
  },[])


  return (
    <div className="App">
      {messages && <MessageList messages={messages} />}</div>
  )

}  

export default App;
