import React, { Component } from 'react'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Footer/>
        <Content/>
      </div>
    )
  }
}
