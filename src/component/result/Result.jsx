import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../redux/categories/categories.actions";
import "./Result.scss";

const mapStateToProps = (state) => ({
    currentResults: state.searchResults.results,
    displayResults: state.displayResults.show,
    loadingResults: state.loadingResults.loading,
    categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({
    addCategory: (category) => dispatch(addCategory(category)),
});

class Result extends Component {
    renderSingleRes = (res) => (
        <button
            key={res.id}
            className="result"
            onClick={() => this.onClick(res)}
            disabled={this.props.categories.some((x) => x.id === res.id)}
        >
            {res.name}
        </button>
    );

    isDisabled = (id) => {
        this.props.currentResults.some((x) => x.id === id);
    };

    onClick = (res) => {
        this.props.addCategory({ name: res.name, path: res.path, id: res.id });
    };

    render = () => (
        <div className="result-parent-container">
            {this.props.displayResults && this.props.currentResults.length > 0 ? (
                this.props.currentResults.map((x) => this.renderSingleRes(x))
            ) : (
                <span className="no-result">
                    {this.props.loadingResults ? "Loading..." : "No result to display"}
                </span>
            )}
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
