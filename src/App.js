import './App.css';
import React, { Component } from 'react';


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Trangchu from "./component/Trangchu";
import Taophieu from "./views/Taophieu/Taophieu";
import Quanlyhoso from "./views/Quanlyhoso/Quanlyhoso";
import Quanlynhansu from "./views/Quanlynhansu/Quanlynhansu";
import HuongdanCNTT from "./views/HuongdanCNTT/HuongdanCNTT";
import Lienhe from "./views/Lienhe/Lienhe";
import Footer from './views/Footer/Footer';
import Giayracong from "./views/Taophieu/Giayracong"
import Giayxinphep from "./views/Taophieu/Giayxinphep"
import Phieucongviec from "./views/Taophieu/Phieucongviec"

import $ from 'jquery';

window.$ = $;



class App extends React.Component {
  handleClick() {
    $('#sidebar').toggleClass('active');
  }



  render() {
    return (

      <BrowserRouter>
        <div>
          <div className="wrapper d-flex align-items-stretch">
            <nav id="sidebar" className="active">
              {/* <a href="#">Thaco Kia</a> */}

              <ul className="list-unstyled components mb-5">
                <li className="active">
                  <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    <span className="fa fa-dashboard"></span> Trang chủ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Taophieu"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <span className="fa fa-calendar-plus-o"></span> Tạo phiếu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Quanlyhoso"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <span className="fa fa-file-text-o"></span> Quản lý hồ sơ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Quanlynhansu"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <span className="fa fa-user-plus"></span> Quản lý nhân sự
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/HuongdanCNTT"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <span className="fa fa-book"></span> Hướng dẫn CNTT
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Lienhe"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <span className="fa fa-user"></span> Liên hệ
                  </NavLink>
                </li>
              </ul>


              <div className="footer">
                <p>
                  Copyright © 2023 Thaco Kia
                </p>
              </div>
            </nav>
            {/* Page Content  */}
            <div id="content" className="p-4 p-md-5">

              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <button type="button" id="sidebarCollapse" onClick={this.handleClick.bind(this)} className="btn btn-dark">
                    <i className="fa fa-bars" />
                    <span className="sr-only"></span>
                  </button>
                  <div>
                    <div className="p-4 p-md-5">
                      <div className='account'>
                        <span>Nguyễn Văn Hảo</span>
                        <span> | </span>
                        <span>Log Out</span>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

              <Routes>
                <Route exact path="/" element={<Trangchu />} />
                <Route path="/Taophieu" element={<Taophieu />} />
                <Route path="/Quanlyhoso" element={<Quanlyhoso />} />
                <Route path="/Quanlynhansu" element={<Quanlynhansu />} />
                <Route path="/HuongdanCNTT" element={<HuongdanCNTT />} />
                <Route path="/Lienhe" element={<Lienhe />} />
                <Route path="/Taophieu/Giayracong" element={<Giayracong />} />
                <Route path="/Taophieu/Giayxinphep" element={<Giayxinphep />} />
                <Route path="/Taophieu/Phieucongviec" element={<Phieucongviec />} />
              </Routes>

            </div>

          </div>
          <Footer />
        </div>


      </BrowserRouter>

    );
  }
}
export default App;
