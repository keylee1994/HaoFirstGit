import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import '../Quanlyhoso/Managerfile.css';
window.$ = $;

class Quanlyhoso extends Component {
    handleClick() {
        alert("bshajkdbh");
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <h6 className="m-0 font-weight-bold" style={{ color: '#00529c', fontSize: '25px', marginLeft: '20px' }}>Quản lý hồ sơ</h6>
                    <hr />
                </div>

                <div className="col-sm-12" style={{ marginBottom: '10px' }}>
                    <div className="form-row">
                        <div className="form-group col-sm-2">
                            <label htmlFor="myUser">Từ ngày:</label>
                            <input type="datetime-local" className="form-control" id="myUser" placeholder="Nhập MSNV" />
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="myUser">Đến ngày:</label>
                            <input type="datetime-local" className="form-control" id="myUser" placeholder="Nhập MSNV" />
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="myUser">Bộ phận:</label>
                            <select id="myState" className="form-control">
                                <option defaultValue>Choose...</option>
                                <option>Kho vận chuyển nội bộ</option>
                                <option>Xưởng Hàn</option>
                                <option>Xưởng Sơn</option>
                                <option>Kiểm định</option>
                                <option>Quản lý chất lượng</option>
                                <option>Vận hành bảo dưỡng</option>
                                <option>Kỹ thuật</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-3">
                            <label htmlFor="myUser">Loại phiếu:</label>
                            <select id="myState" className="form-control">
                                <option defaultValue>Choose...</option>
                                <option>Giấy ra cổng</option>
                                <option>Giấy xin phép</option>
                                <option>Phiếu yêu cầu công việc</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-2">

                            <button className="btn btn-outline-success" type="button">
                                <i className="fa fa-search" aria-hidden="true"></i>
                                Tra cứu
                            </button>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className='form-group col-sm-3'>
                            <label htmlFor="myUser">Lọc hồ sơ:</label>
                            <select className="form-control">
                                <option value="S0001">Tất cả</option>
                                <option value="S0002">Đang duyệt</option>
                                <option value="S0003">Đã duyệt</option>
                                <option value="S0004">Đã từ chối</option>
                            </select>
                        </div>
                    </div>

                </div>
                <table className="table table-hover table-light">
                    <thead className="thead-table">
                        <tr>
                            <th className='thead-header' scope="col">STT</th>
                            <th className='thead-header' scope="col">Mã phiếu</th>
                            <th className='thead-header' scope="col">Nhân sự</th>
                            <th className='thead-header' scope="col">Bộ phận</th>
                            <th className='thead-header' scope="col">Loại phiếu</th>
                            <th className='thead-header' scope="col">Thời gian tạo</th>
                            <th className='thead-header' scope="col">Trạng thái</th>
                            <th className='thead-header' scope="col">Tiến trình</th>
                            <th className='thead-header' scope="col">Chức năng</th>
                        </tr>
                    </thead>



                    <tbody id="tbdata" style={{ fontFamily: 'Tahoma', background: 'white', textAlign: 'center' }}>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                F001120230323017
                            </td>
                            <td>
                                Nguyễn Văn Hảo
                            </td>
                            <td>
                                Phòng Kỹ thuật
                            </td>
                            <td>
                                Giấy ra cổng
                            </td>
                            <td>
                                16:30:35 23/03/2023
                            </td>
                            <td>
                                <span className="badge badge-success" id="daduyet">Đã duyệt
                                </span>
                            </td>
                            <td>
                                <div id="sbcontainer">
                                    <ul id="steppogbar">
                                        <li className="active">
                                            Đã gửi
                                        </li>
                                        <li className="active">
                                            1
                                        </li>
                                        <li className="active">
                                            Đã duyệt
                                        </li>
                                    </ul>
                                </div>
                            </td>
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
                            <td>F001120230323016</td>
                            <td>Nguyễn Văn Hảo</td>
                            <td>Phòng Kỹ thuật</td>
                            <td>Giấy ra cổng</td>
                            <td>16:18:54 23/03/2023</td>
                            <td>
                                <span className="badge badge-warning" id="dangduyet">Đang duyệt</span>
                            </td>
                            <td>
                                <div id="sbcontainer">
                                    <ul id="steppogbar">
                                        <li className="active">Đã gửi</li>
                                        <li className="cheking">1</li>
                                        <li className="cheking">Đã duyệt</li>
                                    </ul>
                                </div>
                            </td>
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
                            <td>3</td>
                            <td>F001120230321004</td>
                            <td>Nguyễn Văn Hảo</td>
                            <td>Phòng Kỹ thuật</td>
                            <td>Giấy ra cổng</td>
                            <td>16:10:10 21/03/2023</td>
                            <td>
                                <span className="badge badge-success" id="daduyet">
                                    Đã duyệt
                                </span>
                            </td>
                            <td>
                                <div id="sbcontainer">
                                    <ul id="steppogbar">
                                        <li className="active">Đã gửi</li>
                                        <li className="active">1</li>
                                        <li className="active">Đã duyệt</li>
                                    </ul>
                                </div>
                            </td>
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
export default Quanlyhoso;