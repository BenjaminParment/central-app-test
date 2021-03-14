import React, { Component } from "react";
import { connect } from "react-redux";
import { setInput } from "../../redux/input/input.actions";

const mapStateToProps = (state) => ({
    input: state.input.content,
});

const mapDispatchToProps = (dispatch) => ({
    set: (content) => dispatch(setInput(content)),
});

class Input extends Component {
    onChange = (e) => {
        this.props.set(e.target.value);
    };

    render = () => (
        <div className="input-parent-container">
            <input onChange={this.onChange}></input>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
