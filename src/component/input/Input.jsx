import axios from "axios";
import debounce from "lodash/debounce";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setResults } from "../../redux/results/results.actions";

const mapStateToProps = (state) => ({
    searchResults: state.searchResults,
});

const mapDispatchToProps = (dispatch) => ({
    set: (d) => dispatch(setResults(d)),
});

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputContent: "",
        };
        this.fetch = debounce(this.fetch, 1000);
    }

    fetch = (str) => {
        axios
            .get(`https://dev.centralapp.com/api/v2/static/categories/like?name=${str}&language=en&level=L1`)
            .then((ret) => {
                this.props.set(ret.data);
            });
    };

    onChange = (e) => {
        this.setState({ inputContent: e.target.value });
        this.state.inputContent.length >= 3 && this.fetch(this.state.inputContent);
        console.log(this.props.searchResults);
    };

    render = () => (
        <div className="input-parent-container">
            <input onChange={this.onChange}></input>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
