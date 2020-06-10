import React, { Component } from 'react'

import './SelectedOptions.scss';

// import material-UI
import { IconButton } from '@material-ui/core';
import { Group, Person, Shuffle} from '@material-ui/icons';

class SelectedOptions extends Component {
    render() {
        return (
            <div className="Selected_Options">
                {/* import button chat with a friend */}
                <IconButton edge="start" className="Options__icon" color="inherit" aria-label="menu">
                    <Person />
                </IconButton>
                {/* import button chat group */}
                <IconButton edge="start" className="Options__icon" color="inherit" aria-label="menu">
                    <Group />
                </IconButton>
                {/* import button chat with anonymous user */}
                <IconButton edge="start" className="Options__icon" color="inherit" aria-label="menu">
                    <Shuffle />
                </IconButton>
            </div>
        )
    }
}

export default SelectedOptions