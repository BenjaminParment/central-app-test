import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
    render = () => (
        <div className="header-parent-container">
            <div className="top-panel" />
            <div className="bottom-panel">
                <span className="title">CentralApp Search Tool</span>
            </div>
        </div>
    );
}

export default Header;
