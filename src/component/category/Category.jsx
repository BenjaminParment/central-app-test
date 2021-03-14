import React, { Component } from "react";
import "./Category.scss";

class Category extends Component {
    categories = [
        {
            name: "Benjamin Parment",
            path: "Benjamin>Parment>Nicolas",
        },
        {
            name: "Stephen Charlton",
            path: "Stephen>Charlton>Leeds",
        },
    ];

    renderSingleCategory = (category) => (
        <tr className="row">
            <td>{category.name}</td>
            <td>{category.path}</td>
            <td>Delete</td>
        </tr>
    );

    render = () => (
        <div className="category-parent-container">
            <span className="title">Categories:</span>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Path</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{this.categories.map((x) => this.renderSingleCategory(x))}</tbody>
            </table>
        </div>
    );
}

export default Category;
