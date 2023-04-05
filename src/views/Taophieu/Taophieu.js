
import React, { Component } from 'react';
import $ from 'jquery';
import '../Taophieu/createfile.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import giayracong from '../../assets/images/gatepass.png';
import giayxinphep from '../../assets/images/leave.png';
import giaycongviec from '../../assets/images/jobdemand.png';

window.$ = $;

class Taophieu extends Component {


  render() {
    return (
      // <BrowserRouter>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">

            <div className="caption">
              <h1 className='title'>Giấy ra cổng</h1>
              <p>
                <img className='image-file' src={giayracong} alt="" />
              </p>
              <p className='btn-taophieu'>
                <NavLink to="/Taophieu/Giayracong" className="btn btn-primary">TẠO PHIẾU</NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">

            <div className="caption">
              <h1 className='title'>Giấy xin phép</h1>
              <p>
                <img className='image-file' src={giayxinphep} alt="" />
              </p>
              <p className='btn-taophieu'>
                <NavLink to="/Taophieu/Giayxinphep" className="btn btn-primary">TẠO PHIẾU</NavLink>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">

            <div className="caption">
              <h1 className='title'>Phiếu yêu cầu công việc</h1>
              <p>
                <img className='image-file' src={giaycongviec} alt="" />
              </p>
              <p className='btn-taophieu'>
                <NavLink to="/Taophieu/Phieucongviec" className="btn btn-primary">TẠO PHIẾU</NavLink>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-file">
          <NavLink className="btn btn-success" to="/">
            ❮❮❮ Back
          </NavLink>
        </div>
      </div>
      // </BrowserRouter>
    );
  }
}
export default Taophieu;
