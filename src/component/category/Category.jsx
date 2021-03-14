import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCategory } from "../../redux/categories/categories.actions";
import "./Category.scss";

const mapStateToProps = (state) => ({
    categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
    removeCategory: (category) => dispatch(removeCategory(category)),
});

class Category extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.categories);
    }

    remove = (category) => {
        this.props.removeCategory(category);
    };

    renderSingleCategory = (category) => (
        <tr className="row" key={category.id}>
            <td>{category.name}</td>
            <td>{category.path}</td>
            {/* <td>
                <button onClick={this.remove(category)}>Delete</button>
            </td> */}
        </tr>
    );

    render = () => (
        <div className="category-parent-container">
            <span className="title">Categories:</span>
            <table className="styled-table">
                <thead>
                    <tr key="header">
                        <th>Name</th>
                        <th>Path</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{this.props.categories.map((x) => this.renderSingleCategory(x))}</tbody>
            </table>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
