import React from 'react'
import './minibar.css';
import ForumIcon from '@material-ui/icons/Forum';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AdbIcon from '@material-ui/icons/Adb';
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function MiniBar() {
    return (
        <div className="minibar">
            <div className="mini__logo">

            </div>
            <ul className="tooltip">
                <li><a href="/messages"><ForumIcon /></a></li>
                <span id="tooltiptext">Messages</span>
            </ul>
            <ul className="tooltip">
                <li><a href="/"><SpeakerNotesIcon /></a></li>
                <span id="tooltiptext">Campaigns</span>
            </ul>
            <ul className="tooltip">
                <li><a href="/"><SupervisorAccountIcon /></a></li>
                <span id="tooltiptext">Users</span>
            </ul>
            <ul className="tooltip">
                <li><a href="/"><AdbIcon /></a></li>
                <span id="tooltiptext">Bots</span>
            </ul>
            <ul className="tooltip">
                <li><a href="/"><SettingsIcon /></a></li>
                <span id="tooltiptext">Settings</span>
            </ul>
            <ul className="tooltip">
                <li><a href="/"><AssessmentIcon /></a></li>
                <span id="tooltiptext">Reports</span>
            </ul>

            <div className="mini__profile">
                <AccountCircleIcon />
            </div>
        </div>
    )
}

export default MiniBar
