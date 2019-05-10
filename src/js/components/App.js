import React, { Component } from "react";
import { Provider } from "react-redux";
import "../../css/main.scss";

import Header from "./header/Header";
import Posts from "./posts/Posts";
import PostForm from "./posts/Postform";
import store from "./store";

class App extends Component {
    state = {};

    constructor() {
        super();
        console.log("App - Constructor");
    }

    componentDidMount() {
        // Ajax api call
    }

    render() {
        console.log("App - Render");
        return (
            <Provider store={store}>
                <React.Fragment>
                    <Header />
                    <PostForm />
                    <hr />
                    <Posts />
                    <main className="container" />
                </React.Fragment>
            </Provider>
        );
    }
}

export default App;
