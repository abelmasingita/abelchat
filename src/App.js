import React from 'react'
import './App.css';
import {ChatEngine} from 'react-chat-engine' 
import ChatFeed from './components/ChatFeed'

function App() {
  return (
    <ChatEngine 
      height="100vh"
      projectID="97da2342-c06b-4256-a37b-247e44245f6f"
      userName="abelmasingita"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps}/>}
    />
  );
}

export default App;
