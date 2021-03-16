import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../redux/categories/categories.actions";
import "./Result.scss";

const mapStateToProps = (state) => ({
    currentResults: state.searchResults.currentResults,
    displayResults: state.displayResults.show,
});

const mapDispatchToProps = (dispatch) => ({
    addCategory: (category) => dispatch(addCategory(category)),
});

class Result extends Component {
    renderSingleRes = (res) => (
        <button key={res.id} className="result" onClick={() => this.onClick(res)}>
            {res.name}
        </button>
    );

    onClick = (res) => {
        this.props.addCategory({ name: res.name, path: res.path, id: res.id });
    };

    render = () => (
        <div className="result-parent-container">
            {this.props.displayResults ? (
                this.props.currentResults.map((x) => this.renderSingleRes(x))
            ) : (
                <span className="no-result">Search for result</span>
            )}
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
