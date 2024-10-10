import React, { useState } from 'react';

// Sample data
const initialChats = [
    { id: 1, name: 'User 1', type: 'private', participants: ['User 1', 'User 2'], messages: [] },
];

// Stub for sending and receiving messages
const sendMessage = (chatId, message) => {
    // Stub: Send message to server
    console.log(`Sending message "${message.content}" to chat ${chatId}`);
};

const receiveMessage = (chatId, message) => {
    // Stub: Receive message from server
    console.log(`Receiving message "${message.content}" in chat ${chatId}`);
    return message;
};

// Stub for deleting a chat
const deleteChat = (chatId, setChats) => {
    // Stub: Delete chat from server
    console.log(`Deleting chat ${chatId}`);
    setChats(prevChats => prevChats.filter(chat => chat.id !== chatId));
};

const Message = ({ message, isCurrentUser }) => {
    const { sender, timestamp, content } = message;
    const messageClass = isCurrentUser ? 'sent' : 'received';
    const bgColor = isCurrentUser ? '#DCF8C6' : '#E8E8E8'; // Change background color based on sender
    return (
        <div className={`message ${messageClass}`} style={{ backgroundColor: bgColor }}>
            <p><strong>{sender}</strong> - {timestamp.toLocaleString()}</p>
            <p>{content}</p>
        </div>
    );
};

const Chat = ({ chat, currentUser, onSend, onDelete }) => {
    const [messageUser1, setMessageUser1] = useState('');
    const [messageUser2, setMessageUser2] = useState('');
    const [messages, setMessages] = useState(chat.messages);

    const handleSendUser1 = () => {
        if (messageUser1.trim() !== '') {
            const newMessage = {
                sender: currentUser, // Dynamically set sender based on current user
                timestamp: new Date(),
                content: messageUser1
            };
            sendMessage(chat.id, newMessage);
            onSend(chat.id, newMessage);
            setMessages([...messages, newMessage]); // Update messages in state
            setMessageUser1('');
        }
    };

    const handleSendUser2 = () => {
        if (messageUser2.trim() !== '') {
            const newMessage = {
                sender: 'User 2', // Hardcoded for demonstration purposes
                timestamp: new Date(),
                content: messageUser2
            };
            sendMessage(chat.id, newMessage);
            onSend(chat.id, newMessage);
            setMessages([...messages, newMessage]); // Update messages in state
            setMessageUser2('');
        }
    };

    const handleReceive = (receivedMessage) => {
        onSend(chat.id, receivedMessage);
        setMessages([...messages, receivedMessage]);
    };

    return (
        <div>
            <h2>{chat.name}</h2>
            <div className="messages">
                {messages.map((msg, index) => (
                    <Message key={index} message={msg} isCurrentUser={msg.sender === currentUser} />
                ))}
            </div>
            <div>
                <input type="text" value={messageUser1} onChange={(e) => setMessageUser1(e.target.value)} />
                <button onClick={handleSendUser1}>Send</button>
            </div>
            <div>
                <h3>User 2</h3>
                <input type="text" value={messageUser2} onChange={(e) => setMessageUser2(e.target.value)} />
                <button onClick={handleSendUser2}>Send</button>
            </div>
            <button onClick={() => onDelete(chat.id)}>Delete Chat</button>
        </div>
    );
};

const ChatList = ({ chats, currentUser, onDelete, onReceiveMessage }) => {
    return (
        <div>
            {chats.map((chat) => (
                <div key={chat.id}>
                    <Chat
                        chat={chat}
                        currentUser={currentUser}
                        onSend={(chatId, message) => {
                            onReceiveMessage(chatId, message); // Receive message and update chat
                        }}
                        onDelete={onDelete}
                    />
                </div>
            ))}
        </div>
    );
};

const App = () => {
    const currentUser = 'User 1'; // Simulating the current user

    const [chats, setChats] = useState(initialChats);

    const handleSend = (chatId, message) => {
        setChats((prevChats) =>
            prevChats.map((chat) =>
                chat.id === chatId ? { ...chat, messages: [...chat.messages, message] } : chat
            )
        );
    };

    const handleDelete = (chatId) => {
        deleteChat(chatId, setChats);
    };

    return (
        <div>
            <h1>Chat App</h1>
            <ChatList
                chats={chats}
                currentUser={currentUser}
                onDelete={handleDelete}
                onReceiveMessage={(chatId, message) => {
                    handleSend(chatId, message);
                }}
            />
        </div>
    );
};

export default App;
