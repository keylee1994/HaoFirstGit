import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
window.$ = $;

class Giayracong extends Component {


    render() {
        return (
            <div>



                <div className="form-group">
                    <h6 className="m-0 font-weight-bold" style={{ color: '#00529c', fontSize: '25px', marginLeft: '20px' }}>Giấy ra cổng</h6>
                    <hr />
                </div>

                <div className="container-fluid mt-3">
                    {/* Thông tin nhân sự */}
                    <fieldset className='form-group col-sm-12' style={{ background: '#fffcd5' }}>
                        <legend style={{ padding: '0px 5px 0px 10px', fontWeight: 'bold', fontFamily: 'Tahoma', fontSize: '16px' }}>Thông tin nhân sự</legend>
                        <div className="form-row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="myUser">Mã nhân viên:</label>
                                <span className="text-danger">*</span>
                                <input type="text" className="form-control" id="myUser" placeholder="Nhập MSNV" />
                            </div>

                            <div className="form-group col-sm-6">
                                <label htmlFor="myFullName">Họ và tên:</label>
                                <span className="text-danger">*</span>
                                <input className="form-control" id="myFullName" placeholder="Họ tên" readOnly />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="myDepartment">Phòng ban:</label>
                                <span className="text-danger">*</span>
                                <input type="email" className="form-control" id="myDepartment" placeholder="Phòng ban" readOnly />
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="myPosition">Chức vụ:</label>
                                <span className="text-danger">*</span>
                                <input className="form-control" id="myPosition" placeholder="Chức vụ" readOnly />
                            </div>
                        </div>
                    </fieldset>

                    {/* Nội dung */}
                    <fieldset className='form-group col-sm-12' style={{ background: '#fffcd5' }}>
                        <legend style={{ padding: '0px 5px 0px 10px', fontWeight: 'bold', fontFamily: 'Tahoma', fontSize: '16px' }}>Nội dung</legend>
                        <div className="form-row">
                            <div className="form-group col-sm-4">
                                <label htmlFor="myUser">Thời gian ra:</label>
                                <span className="text-danger">*</span>
                                <input type="datetime-local" className="form-control" id="myUser" placeholder="Nhập MSNV" />
                            </div>


                            <div className="text-center col-sm-4">
                                <div className="input-group">
                                    {/* <div className='col-sm-5'> */}
                                    <p>
                                        <input name="allow" id="chkallow" type="radio" defaultChecked />
                                        <label htmlFor="chkallow" style={{ marginLeft: '5px' }}>Vào lại</label>
                                    </p>
                                    {/* </div> */}
                                    {/* <div className='col-sm-5'> */}
                                    <p>
                                        <input name="allow" id="chkNotallow" type="radio" />
                                        <label htmlFor="chkNotallow" style={{ marginLeft: '5px' }}>Không vào lại</label>
                                    </p>
                                    {/* </div> */}
                                </div>
                            </div>

                            <div className="form-group col-sm-4">
                                <label htmlFor="myFullName">Thời gian vào:</label>
                                <span className="text-danger">*</span>
                                <input type="datetime-local" className="form-control" id="myFullName" placeholder="Họ tên" />
                            </div>
                            <div className="form-group col-sm-12">
                                <label htmlFor="inputAddress">Lý do ra cổng:</label>
                                <span className="text-danger">*</span>
                                <input type="text" className="form-control" id="myAddress" placeholder="Nhập lý do ra cổng" />
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="myDrive">Phương tiện:</label>
                                <input type="text" className="form-control" id="myDrive" placeholder="Phương tiện di chuyển" />
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="myBring">Mang theo:</label>
                                <input type="text" className="form-control" id="myBring" placeholder="Vật tư mang theo" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-12">
                                <label htmlFor="myDrive">Ghi chú:</label>
                                <input type="text" className="form-control" id="myDrive" placeholder="Nhập ghi chú" />
                            </div>

                        </div>
                    </fieldset>

                    {/* Phê duyệt */}
                    <fieldset className='form-group col-sm-12' style={{ background: '#fffcd5' }}>
                        <legend style={{ padding: '0px 5px 0px 10px', fontWeight: 'bold', fontFamily: 'Tahoma', fontSize: '16px' }}>Phê duyệt</legend>
                        <div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="myState">Xem xét</label>
                                <select id="myState" className="form-control">
                                    <option defaultValue>Choose...</option>
                                    <option>Nguyễn Tường</option>
                                    <option>Nguyễn Tấn Thảo</option>
                                </select>
                            </div>


                            <div className="form-group col-sm-6">
                                <label htmlFor="myState">Phê duyệt</label>
                                <select id="myState" className="form-control">
                                    <option defaultValue>Choose...</option>
                                    <option>Lý Vũ Long</option>
                                    <option>Nguyễn Ngọc Hòa</option>
                                </select>
                            </div>
                        </div>

                    </fieldset>
                    <div className='text-center'>
                        <button type="button" className='btn btn-createfile'>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            <span className='create'>Tạo phiếu</span>
                        </button>
                    </div>
                </div>


                <div className="footer-file">
                    <NavLink className="btn btn-success" to="/Taophieu">
                        ❮❮❮ Back
                    </NavLink>
                    {/* <a className="w3-right w3-btn" href="html_intro.asp">Next ❯</a> */}
                </div>
            </div>
        );
    }
}
export default Giayracong;