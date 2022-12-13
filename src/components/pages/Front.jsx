import React from "react";

export default class Front extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            display: this.props.display
        }

    }

    checkClasses = () => {
        let classes = " ";
        classes += this.props.display ? 'front' : 'back';
        classes += this.props.hasOwnProperty('background') && this.props.background.hasOwnProperty('className') ? (' ' + this.props.background.className) : "";
        return classes
    }
    render()
    {
    
        return (<div id="website" className={(this.props.display ? 'front' : 'back') + (this.checkClasses())}>{this.props.display ? this.props.children : this.props.before}</div>)
    }

}