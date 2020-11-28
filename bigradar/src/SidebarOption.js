import React from 'react'
import './sidebarOption.css'

function SidebarOption({ Icon, title}) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (
                <h3>
                    {title}
                </h3> 
            ) :
            (
                <h3 className="sidebarOption__items">
                    <span className="sidebarOption__star">*</span> {title}
                </h3>
            )
        }
        </div>
    )
}

export default SidebarOption
