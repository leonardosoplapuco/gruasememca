import React from 'react';
import { useTranslation } from 'react-i18next';

function ChatBot(){
    const { t } = useTranslation('chatBot');

    return(
        <>
            <button type='' className='chatBotButton'>a</button>
        </>
    );
}

export default ChatBot;
