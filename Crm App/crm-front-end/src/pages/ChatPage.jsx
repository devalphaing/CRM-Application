import React from 'react';
import styles from './ChatPage.module.css';
import { Button } from '@mui/material';
import Info from '../components/Info';
import Conversation from '../components/Conversation';
import TextArea from '../components/TextArea';

const ChatPage = ()=> {
  return (
    <div className={styles['container']}>
      <div className={styles['chat-container']}>

        <div className={styles['cancel-text']}>
          I want to cancel my subscription
        </div>

        <Info />
        
        <Conversation />

        <TextArea />

      </div>
    </div>
  )
}

export default ChatPage;
