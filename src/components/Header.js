import React, { Component } from 'react'
import '../App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

export default class Header extends Component {
  render(){
    return(
      <div className="page-header row">
        <h1>Anna Lewis <small className="text-muted">Web Developer | Educator</small></h1>
        <Link to="/" className="col-md-4">Home</Link>
        <Link to="/projects" className="col-md-4">Projects</Link>
        <Link to="/contact" className="col-md-4">Contact</Link>
      </div>
    )
  }
}
