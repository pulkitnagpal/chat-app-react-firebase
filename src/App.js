import React, { useState, useEffect, useRef } from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core'
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const messageContainer = useRef();
  useEffect(() => {
    setUsername(prompt('Enter the username'))
  }, [])

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map(doc => ({data: doc.data(), id: doc.id})))
    })
  }, [])
  useEffect(() => {
    messageContainer.current.scrollTop = messageContainer.current.scrollHeight
  }, [messages])
  const sendMessage = (event) => {
    // all the logic to send the message
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username || 'unknown user',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <div className="message-box">
        <div className="message-box__container" ref={messageContainer}>
          <FlipMove>
            {
              messages.map(({data, id}) => (
                <Message message={data} username={username} key={id}/>
              ))
            }
        </FlipMove> 
        </div>
      </div>
       
      <h1>Hello {username}</h1>
      <form>
        <FormControl className="message-form">
          <InputLabel>Enter a message..</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button type="submit" disabled={!input} variant="contained" color="primary" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      
      
    </div>
  );
}

export default App;
