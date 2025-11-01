import { Chatbox } from '@talkjs/react-components';
import '@talkjs/react-components/default.css';
import { getTalkSession } from '@talkjs/core';
import { useEffect } from 'react';

export default function Chat() {
  const appId = 'tHMayYki';
  const userId = 'frank';
  const otherUserId = 'nina';
  const conversationId = 'new_conversation';
  const session = getTalkSession({
    // @ts-ignore
    host: 'durhack.talkjs.com',
    appId,
    userId,
  });

  useEffect(() => {
    session.currentUser.createIfNotExists({ name: 'Frank' });
    session.user(otherUserId).createIfNotExists({ name: 'Nina' });

    const conversation = session.conversation(conversationId);
    conversation.createIfNotExists();
    conversation.participant(otherUserId).createIfNotExists();
  }, [session, conversationId, otherUserId]);

  return (
    <Chatbox
      // @ts-ignore
      host="durhack.talkjs.com"
      style={{ width: '600px', height: '600px' }}
      appId={appId}
      userId={userId}
      conversationId={conversationId}
      // chatHeaderVisible={false}
      // messageFieldVisible={false}
    />
  );
}