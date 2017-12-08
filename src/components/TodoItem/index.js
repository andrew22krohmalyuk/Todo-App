import React from 'react';

export default ({text, id, onDelete}) => {
    return(
        <p className="app-list-item">
            <span className="app-list-item-text">{text}</span>
            <span className="app-list-item-icon" onClick={() => {onDelete(id)}}>x</span>
        </p>
    )
}
