import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import axios from "axios";
import { Previewfetch } from "./Components/Previewfetch";
export default class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      posts: null,
    };
  }
  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data }, () => {
          console.log(this.state);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  loginHandler = () => {
    this.setState({ auth: !this.state.auth });
  };
  dleteHandler = (id) => {
    axios
      .delete("http://jsonplaceholder.typicode.com/posts/" + id)
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    let posts = null;
    if (this.state.posts != null) {
      posts = this.state.posts.map((post) => {
        return (
          <Previewfetch
            dlete={() => this.dleteHandler(post.id)}
            key={post.id}
            title={post.title}
             title={post.body}
          />
        );
      });
    }
    return (
      <div>
        <Router>
          <NavBar login={this.loginHandler} status={this.state.auth} />
          <Switch>
            <Route path="/contact">
              <Header back="4.jpg" />
              <Contact />
            </Route>

            <Route exact path="/about">
              {this.state.auth === false ? (
                <Redirect to="/" />
              ) : (
                <>
                  <Header back="3.jpg" />
                  <About />
                </>
              )}
            </Route>
            <Route exact path="/">
              <Header back="1.jpg" />
              <Home>{posts}</Home>
            </Route>
            <Route exact path="/*">
              <Header back="6.png" />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </div>
    );
  }
}
