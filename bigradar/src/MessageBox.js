import React from 'react'
import Button from '@material-ui/core/Button';
import './messageBox.css';


function MessageBox() {   
    return (
        <div className="message">
            <div className="message__header">
                <Button variant="contained">Assign</Button>
                
                <div className="message__person">
                    <h4>Aman jakhar</h4>
                </div>
                <div className="message__close">
                    <Button variant="contained" color="primary">Block</Button>   
                    <Button variant="contained">Close</Button>
                </div>
            </div>
            <div className="messages">
                <div className="message__send">
                    <p>this message is send by me to a user</p>
                </div>
                <div className="message__recieved">
                    <p>this message is recieved by me to a user</p>
                </div>
                <div className="message__recieved">
                    <p>this message is recieved by me to a user this message is recieved 
                        by me to a userthis message is recieved by me to a user</p>
                </div>
                <div className="message__send">
                    <p>this message is send by me to a user</p>
                </div>
            </div>
            <div className="input__box">
                <textarea type="text" placeholder="Type Your Message here & HIT ENTER TO SEND" />
            </div>
            
        </div>
    )
}

export default MessageBox
