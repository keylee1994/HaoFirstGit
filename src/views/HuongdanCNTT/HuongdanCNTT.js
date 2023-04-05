
import React, { Component } from 'react';
import MyPDF from './file/test.txt';
import '../HuongdanCNTT/Intrusction.css';

import $ from 'jquery';
window.$ = $;

class HuongdanCNTT extends Component {


    render() {
        return (
            <>
                <table className="table table-hover table-light">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tiêu đề</th>
                            <th scope="col">Nội dung</th>
                            <th scope="col">File hướng dẫn</th>
                            <th scope="col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Chữ ký điện tử</td>
                            <td>File hướng dẫn</td>
                            <td><a className='download-file' href={MyPDF} download> Tải file </a></td>
                            <td>
                                <span className='icon-act' type="button" data-toggle="tooltip" data-original-title="Chỉnh sửa">
                                    <i className="material-icons" style={{ color: '#3abaf4' }}>
                                        edit_note
                                    </i>
                                </span>
                                <span className='icon-act' type="button" data-toggle="tooltip" data-original-title="Xóa">
                                    <i className="material-icons" style={{ color: 'red' }}>
                                        delete
                                    </i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mail Thaco</td>
                            <td>File hướng dẫn</td>
                            <td><a className='download-file' href={MyPDF} download> Tải file </a></td>
                            <td>
                                <span className='icon-act' type="button" data-toggle="tooltip" data-original-title="Chỉnh sửa">
                                    <i className="material-icons" style={{ color: '#3abaf4' }}>
                                        edit_note
                                    </i>
                                </span>
                                <span className='icon-act' type="button" data-toggle="tooltip" data-original-title="Xóa">
                                    <i className="material-icons" style={{ color: 'red' }}>
                                        delete
                                    </i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Biểu mẫu CNTT</td>
                            <td>File hướng dẫn</td>
                            <td><a className='download-file' href={MyPDF} download> Tải file </a></td>
                            <td>
                                <span className='icon-act' type="button" data-toggle="tooltip" data-original-title="Chỉnh sửa">
                                    <i className="material-icons" style={{ color: '#3abaf4' }}>
                                        edit_note
                                    </i>
                                </span>
                                <span className='icon-act' type="button" data-toggle="tooltip" data-original-title="Xóa">
                                    <i className="material-icons" style={{ color: 'red' }}>
                                        delete
                                    </i>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}
export default HuongdanCNTT;
