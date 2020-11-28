import React from 'react'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import './welcome.css'
function Welcome() {
    return (
        <div className="welcome">
            <EmojiEmotionsIcon />
            <div className="welcome__message">
                <h1>Hey Buddy, Welcome to the BigRadar</h1>
                <p>Headover to the profile and design your own chat widget.</p>
            </div>
        </div>
    )
}

export default Welcome
