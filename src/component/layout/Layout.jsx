import React, { Component } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import "./Layout.scss";

class Layout extends Component {
    render = () => (
        <>
            <Header />
            <div className="content">{this.props.children}</div>
            <Footer />
        </>
    );
}

export default Layout;
