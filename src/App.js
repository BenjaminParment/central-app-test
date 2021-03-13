import React, { Component } from "react";
import "./App.scss";
import Input from "./component/input/Input";
import Layout from "./component/layout/Layout";

class App extends Component {
    render = () => (
        <Layout>
            <Input />
        </Layout>
    );
}

export default App;
