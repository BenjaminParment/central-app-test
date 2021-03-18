import axios from "axios";
import debounce from "lodash/debounce";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setDisplayResults } from "../../redux/display-results/display-results-actions";
import { setLoading } from "../../redux/loading/loading-actions";
import { setResults } from "../../redux/results/results.actions";
import "./Input.scss";

const mapStateToProps = (state) => ({
    currentResults: state.searchResults.results,
});

const mapDispatchToProps = (dispatch) => ({
    set: (res) => dispatch(setResults(res)),
    showResults: (show) => dispatch(setDisplayResults(show)),
    setLoading: (loading) => dispatch(setLoading(loading)),
});

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputContent: "",
        };
        this.fetch = debounce(this.fetch, 1000);
    }

    componentDidUpdate = ({}, prevState) => {
        if (
            this.state.inputContent.length >= 3 &&
            this.state.inputContent !== prevState.inputContent
        ) {
            this.fetch(this.state.inputContent);
        } else {
            this.props.showResults(false);
        }
    };

    fetch = (str) => {
        this.props.setLoading(true);
        axios
            .get(
                `https://dev.centralapp.com/api/v2/static/categories/like?name=${str}&language=en&level=L1`,
            )
            .then((ret) => {
                this.props.set(ret.data);
                this.props.setLoading(false);
                this.props.showResults(true);
            });
    };

    onChange = (e) => {
        this.setState({ inputContent: e.target.value });
    };

    render = () => (
        <div className="input-parent-container">
            <span className="title">Search:</span>
            <input onChange={this.onChange} className="input"></input>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
