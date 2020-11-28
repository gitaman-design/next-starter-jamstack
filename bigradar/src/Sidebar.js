import React from 'react';
import './sidebar.css';


function Sidebar() {
    return (
        <div className="sidebar__main">
            <div className="sidebar__header">
                <input placeholder="Search Here" />
            </div>
            <div className="sidebar__links">
                <div className="sidebar__heading">
                    <h2>Messages</h2>
                </div>
                <ul>
                    <li>All Messages</li>
                    <li>Posts</li>
                    <li>Custom Bots</li>
                    <li>Email Campaigns</li>
                    <li>Banners</li>
                    <li>Product Tours</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar
