import React from 'react'
import './App.css';
import {ChatEngine} from 'react-chat-engine' 
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine 
      height="100vh"
      projectID="97da2342-c06b-4256-a37b-247e44245f6f"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps}/>}
    />
  );
}

export default App;
