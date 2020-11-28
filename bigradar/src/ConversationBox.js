import React from 'react'
import './conversationBox.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function ConversationBox() {
    return (
        <div className="Conversation__box">
            <div className="Conversation__item">
                <ul>
                    <li><AccountCircleIcon /></li>
                    <li className="Conversation__message">
                        <h4>Aman Jakhar</h4>
                        <p>this is a dummy message</p>
                    </li>
                </ul>
                <ul>
                    <li><AccountCircleIcon /></li>
                    <li className="Conversation__message">
                        <h4>Sandeep Singh</h4>
                        <p>bhenchod jaake chai leke aa.</p>
                    </li>
                </ul>
                <ul>
                    <li><AccountCircleIcon /></li>
                    <li className="Conversation__message">
                        <h4>Navendu Shekhar</h4>
                        <p>Me : bhai react ka tutorial dede</p>
                    </li>
                </ul>
                
            </div>
            
            
        </div>
        
    )
}

export default ConversationBox
