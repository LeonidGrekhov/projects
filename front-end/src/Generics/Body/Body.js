import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from './Sidebar/Sidebar';


class BodyLanding extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSideBar: !props.noSideBar
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            showSideBar: !props.noSideBar
        })
    }

    render() {
        return (
            <div className="container-fluid">
            <div className="row flex-fill">


                {this.state.showSideBar && <div className="col-2"><SideBar/></div>}
                <div className="col">{this.props.content}</div>
            </div>
            </div>
        );
    }
} export default BodyLanding;