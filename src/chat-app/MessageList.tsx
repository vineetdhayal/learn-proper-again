import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './chat-store';

const MessageList = () => {
  const [value, setvalue] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleKey = (e: any) => {
    console.log(state);
    if (e.key === 'Enter') {
      dispatch(actions.addmessage({ message: value, author: 'vineet' } as any));
      setvalue('');
    }
  }

  return (
    <section id="message-list">
      <input onKeyDown={handleKey} onChange={(e) => setvalue(e.target.value)} value={value}></input>
    </section>
  )
}

export default MessageList
