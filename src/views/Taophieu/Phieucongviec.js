import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
window.$ = $;

class Phieucongviec extends Component {


    render() {
        return (
            <div>



                <div className="form-group">
                    <h6 className="m-0 font-weight-bold" style={{ color: '#00529c', fontSize: '25px', marginLeft: '20px' }}>Phiếu yêu cầu công việc</h6>
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
                            <div className="form-group col-sm-12">
                                <label htmlFor="myUser">Bộ phận tiếp nhận:</label>
                                <span className="text-danger">*</span>

                                <select id="myState" className="form-control">
                                    <option defaultValue>Choose...</option>
                                    <option>Kế toán</option>
                                    <option>Xưởng Hàn</option>
                                </select>
                            </div>
                        </div>


                        <div className="form-row">
                            <div className="form-group col-sm-12">
                                <label htmlFor="inputAddress">Nội dung yêu cầu:</label>
                                <span className="text-danger">*</span>
                                <textarea id="txtnote" type="text" className="form-control" style={{ borderRadius: '5px', height: '100px', resize: 'none' }} defaultValue={""} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-sm-12">
                                <label htmlFor="myUser">Thời gian hoàn thành:</label>
                                <span className="text-danger">*</span>
                                <input type="datetime-local" className="form-control" id="myUser" placeholder="Nhập MSNV" />
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
                            <div className="form-group col-sm-4">
                                <label htmlFor="myState">Kiểm tra 1</label>
                                <select id="myState" className="form-control">
                                    <option defaultValue>Choose...</option>
                                    <option>Nguyễn Tường</option>
                                    <option>Nguyễn Tấn Thảo</option>
                                </select>
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="myState">Kiểm tra 2</label>
                                <select id="myState" className="form-control">
                                    <option defaultValue>Choose...</option>
                                    <option>Cù Thị Thi Thương</option>
                                    <option>Phạm Thị Kim Phương</option>
                                </select>
                            </div>

                            <div className="form-group col-sm-4">
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
export default Phieucongviec;