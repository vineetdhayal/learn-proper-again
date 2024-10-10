import React from 'react'
import MessageList from './MessageList'

const Chat = () => {
    return (
        <div>
            <aside id="sidebar"></aside>
            <section id='main'>
                <MessageList />
                <section id='new-message-list'>new message</section>
            </section>
        </div>
    )
}

export default Chat
