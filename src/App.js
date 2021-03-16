import React, { Component } from "react";
import "./App.scss";
import Category from "./component/category/Category";
import Input from "./component/input/Input";
import Layout from "./component/layout/Layout";
import Result from "./component/result/Result";

class App extends Component {
    render = () => (
        <Layout>
            <div className="input-category">
                <div className="left-panel">
                    <Input />
                    <Result />
                </div>
                <div className="right-panel">
                    <Category />
                </div>
            </div>
        </Layout>
    );
}

export default App;
