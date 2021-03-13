import "./App.scss";

import React, { Component } from "react";

import { setInput } from "./redux/input/input.actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        input: state.input.content,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        set: (content) => dispatch(setInput(content)),
    };
};

export class App extends Component {
    onChange = (e) => {
        this.props.set(e.target.value);
    };

    render = () => (
        <div className="App">
            <input onChange={this.onChange}></input>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
