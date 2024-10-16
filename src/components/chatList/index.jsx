import React from 'react';
import { Link } from 'react-router-dom';
import './chatList.css';

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Lama AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {/* {isPending
          ? 'Loading...'
          : error
          ? 'Something went wrong!'
          : data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))} */}
            <Link to="/dashboard/chats/1">Chat 1</Link>
            <Link to="/dashboard/chats/1">Chat 1</Link>
            <Link to="/dashboard/chats/1">Chat 1</Link>
            <Link to="/dashboard/chats/1">Chat 1</Link>
            <Link to="/dashboard/chats/1">Chat 1</Link>
            <Link to="/dashboard/chats/1">Chat 1</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Lama AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
