import React from 'react';
import {connect} from "react-redux";

class EventListComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <h1>Event list</h1>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return{
        eventList: store.eventList
    }
};

export default connect(mapStateToProps)(EventListComponent);