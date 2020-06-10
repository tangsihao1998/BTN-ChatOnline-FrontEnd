import React, { Component } from 'react'

import './SelectedOptions.scss';

// import material-UI
import { IconButton } from '@material-ui/core';
import { Group, Person, Shuffle} from '@material-ui/icons';

class SelectedOptions extends Component {

    // Này t test qua đặt name cho khung click rồi, nhưng mà iconbutton thì lấy được name nhưng thằng person thì không
    // Nên đôi khi khi click sẽ ra undefined nên t tách ra 3 hàm để chia type chat
    personType = (e) => {
        
    }
    groupType = (e) => {
        
    }
    randomType = (e) => {
        
    }

    render() {
        return (
            <div className="Selected_Options">
                <div className="Group__icon"> 
                    {/* import button chat with a friend */}
                    <IconButton edge="start" className="Options__icon" color="primary" aria-label="Person" onClick={this.personType}>
                        <Person />
                    </IconButton>
                    {/* import button chat group */}
                    <IconButton edge="start" className="Options__icon" color="primary" aria-label="Group" onClick={this.groupType}>
                        <Group />
                    </IconButton>
                    {/* import button chat with anonymous user */}
                    <IconButton edge="start" className="Options__icon" color="primary" aria-label="Random" onClick={this.randomType}>
                        <Shuffle />
                    </IconButton>
                </div>
            </div>
        )
    }
}

export default SelectedOptions