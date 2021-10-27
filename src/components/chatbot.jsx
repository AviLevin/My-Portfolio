
import React from 'react';
import ChatBot from 'react-simple-chatbot';
class Hello extends React.Component{
  render() {
    return(
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hi, how can i help you?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'please leave a message and contact info, i responde in very short time.',
            trigger: '4',
          },



          {
            id: '4',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message: 'Я думал, ты обрабатываешь заказы или настраиваешь сервер.',
            trigger: '6',
          },
          {
            id: '6',
            user: true,
            trigger: '7',
          },
          {
            id: '7',
            message: 'А ты кем работаешь?',
            end: true,
          }

        ]}
      />
    )
  }
}
export default Hello;
