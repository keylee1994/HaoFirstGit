import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Quanlyhoso/Managerfile.css';
import $ from 'jquery';
window.$ = $;

class Quanlynhansu extends Component {
    handleClick() {
        alert("bshajkdbh");
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <h6 className="m-0 font-weight-bold" style={{ color: '#00529c', fontSize: '25px', marginLeft: '20px' }}>Quản lý nhân sự</h6>
                    <hr />
                </div>

                <div className="col-sm-12" style={{ marginBottom: '10px' }}>
                    <div>
                        <label htmlFor="myUser">Nhập tên hoặc MSNV:</label>
                    </div>
                    <span>
                        <input type="text" className="form-control col-sm-3" id="myUser" placeholder="Nhập tên hoặc MSNV" />
                    </span>

                    <button className="btn btn-outline-success" type="button">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        Tra cứu
                    </button>

                </div>
                <table className="table table-hover table-light">
                    <thead className="thead-table">
                        <tr>
                            <th className='thead-header' scope="col">STT</th>
                            <th className='thead-header' scope="col">Họ và tên</th>
                            <th className='thead-header' scope="col">Mã số nhân viên</th>
                            <th className='thead-header' scope="col">Bộ phận</th>
                            <th className='thead-header' scope="col">Chức vụ</th>
                            <th className='thead-header' scope="col">Địa chỉ mail</th>
                            <th className='thead-header' scope="col">Chức năng</th>
                        </tr>
                    </thead>



                    <tbody id="tbdata" style={{ fontFamily: 'Tahoma', background: 'white', textAlign: 'center' }}>
                        <tr>
                            <td>1</td>
                            <td>Nguyễn Văn Hảo</td>
                            <td>2011052</td>
                            <td>Phòng Kỹ thuật</td>
                            <td>Chuyên viên</td>
                            <td>nguyenvanhao2@thaco.com.vn</td>
                            <td>
                                <span onClick={this.handleClick.bind(this)} type="button" data-toggle="tooltip" data-original-title="Xem">
                                    <i className="material-icons" style={{ color: '#17a2b8' }}>
                                        visibility
                                    </i>
                                </span>
                                <span type="button" data-toggle="tooltip" data-original-title="Xem">
                                    <i className="material-icons" style={{ color: '#3e64ff' }}>
                                        mode
                                    </i>
                                </span>
                                <span type="button" data-toggle="tooltip" data-original-title="Xem">
                                    <i className="material-icons" style={{ color: 'green' }}>
                                        check_circle_outline
                                    </i>
                                </span>
                                <span type="button" data-toggle="tooltip" data-original-title="Xem">
                                    <i className="material-icons" style={{ color: 'red' }}>
                                        highlight_off
                                    </i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Nguyễn Tường</td>
                            <td>2011052</td>
                            <td>Phòng Kỹ thuật</td>
                            <td>Trưởng phòng</td>
                            <td>nguyentuong@thaco.com.vn</td>

                            <td>
                                <span type="button" data-toggle="tooltip" data-original-title="Xem">
                                    <i className="material-icons" style={{ color: '#17a2b8' }}>
                                        visibility
                                    </i>
                                </span>
                                <span type="button" data-toggle="tooltip" data-original-title="Xem">
                                    <i className="material-icons" style={{ color: '#3e64ff' }}>
                                        mode
                                    </i>
                                </span>
                                <span type="button" data-toggle="tooltip" data-original-title="Xem">
                                    <i className="material-icons" style={{ color: 'green' }}>
                                        check_circle_outline
                                    </i>
                                </span>
                                <span type="button" data-toggle="tooltip" data-original-title="Xem">
                                    <i className="material-icons" style={{ color: 'red' }}>
                                        highlight_off
                                    </i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Nguyễn Văn Hảo</td>
                            <td>2011052</td>
                            <td>Phòng Kỹ thuật</td>
                            <td>Chuyên viên</td>
                            <td>nguyenvanhao2@thaco.com.vn</td>

                            <td>
                                <span type="button" data-toggle="tooltip" data-original-title="Xem">
                                    <i className="material-icons" style={{ color: '#17a2b8' }}>
                                        visibility
                                    </i>
                                </span>
                                <span type="button" data-toggle="tooltip" data-original-title="Xem">
                                    <i className="material-icons" style={{ color: '#3e64ff' }}>
                                        mode
                                    </i>
                                </span>
                                <span type="button" data-toggle="tooltip" data-original-title="Xem">
                                    <i className="material-icons" style={{ color: 'green' }}>
                                        check_circle_outline
                                    </i>
                                </span>
                                <span type="button" data-toggle="tooltip" data-original-title="Xem">
                                    <i className="material-icons" style={{ color: 'red' }}>
                                        highlight_off
                                    </i>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <div className="footer-file">
                    <NavLink className="btn btn-success" to="/">
                        ❮❮❮ Back
                    </NavLink>
                    {/* <a className="w3-right w3-btn" href="html_intro.asp">Next ❯</a> */}
                </div>
            </div>

        );
    }
}
export default Quanlynhansu;