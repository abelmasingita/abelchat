import React from 'react'

const TheirMessage = ({lastmessage, message}) => {

    const isFirstMessageByUser =  !lastmessage || lastmessage.sender.username !== message.sender.username
    
    return (
        <div className='message-row'>
            {isFirstMessageByUser &&(
                <div 
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                    className='message-avatar'
                />
            )}
            {message?.attachments?.length > 0
            ?(
                        <img 
                            src={message.attachments[0].file}
                            alt="message-attachments"
                            className='message-image'
                            style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                        />
                    )
            :(
            <div className='message' 
                style={{float: 'left', background: '#CABCDC',marginLeft: isFirstMessageByUser ? '4px' : '48px'}}>
                {message.text}
             </div>
            )}
        </div>
    )
}

export default TheirMessage
