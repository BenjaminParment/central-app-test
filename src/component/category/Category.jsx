import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCategory } from "../../redux/categories/categories.actions";
import "./Category.scss";

const mapStateToProps = (state) => ({
    categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({
    removeCategory: (category) => dispatch(removeCategory(category)),
});

class Category extends Component {
    remove = (category) => {
        this.props.removeCategory(category);
    };

    renderSingleCategory = (category) => (
        <tr className="row" key={category.id}>
            <td>{category.name}</td>
            <td>{category.path}</td>
            <td>
                <button className="delete" onClick={() => this.remove(category)}>
                    x
                </button>
            </td>
        </tr>
    );

    render = () => (
        <div className="category-parent-container">
            <span className="title">Categories:</span>
            <table className="styled-table">
                <thead>
                    <tr key="header">
                        <th className="name">Name</th>
                        <th className="path">Path</th>
                        <th className="delete">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.categories.length > 0 ? (
                        this.props.categories.map((x) => this.renderSingleCategory(x))
                    ) : (
                        <td colSpan="3" className="row no-categories">
                            No categories to display
                        </td>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
