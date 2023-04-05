import React, { Component } from 'react';
import $ from 'jquery';
import '../Footer/Footer.css';
window.$ = $;


class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className='footer-web'>


                    <footer className="text-center text-lg-start bg-dark text-muted">

                        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                            <div className="me-5 d-none d-lg-block">
                                <span>CÔNG TY TNHH SẢN XUẤT VÀ LẮP RÁP Ô TÔ DU LỊCH TRƯỜNG HẢI - KIA</span>
                            </div>


                            <div>
                                <a href="" className="me-4 text-reset">
                                    <i className="fa fa-home"></i>
                                </a>
                                <a href="" className="me-4 text-reset">
                                    <i className="fa fa-facebook-f"></i>
                                </a>

                                <a href="" className="me-4 text-reset">
                                    <i className="fa fa-google"></i>
                                </a>
                                <a href="" className="me-4 text-reset">
                                    <i className="fa fa-youtube"></i>
                                </a>
                            </div>
                        </section>

                        <section className="">
                            <div className="container text-center text-md-start mt-5">

                                <div className="row mt-2">
                                    <div className="col-md-3">

                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Company name
                                        </h6>
                                        <p className="text-justify">
                                            THACO KIA là nhà máy sản xuất - lắp ráp xe du lịch đầu tiên tại Việt Nam, được chuyển giao công nghệ hiện đại từ Tập đoàn KIA (Hàn Quốc).
                                        </p>
                                    </div>

                                    <div className="col-md-3">

                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Products
                                        </h6>
                                        <p>
                                            <a className="text-reset" href="https://sorentohybrid.kiavietnam.com.vn/" target="_blank">
                                                Sorento Hybrid
                                            </a>
                                        </p>
                                        <p>
                                            <a href="https://seltos.kiavietnam.com.vn/" target="_blank" className="text-reset">Seltos</a>
                                        </p>
                                        <p>
                                            <a href="https://carens.kiavietnam.com.vn/" target="_blank" className="text-reset">Carens</a>
                                        </p>
                                        <p>
                                            <a href="hhttps://thenewk3.kiavietnam.com.vn/" target="_blank" className="text-reset">K3</a>
                                        </p>
                                        <p>
                                            <a href="https://newmorning.kiavietnam.com.vn/" target="_blank" className="text-reset">New Morning</a>
                                        </p>
                                    </div>

                                    <div className="col-md-2">

                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Useful links
                                        </h6>
                                        <p>
                                            <a href="/" className="text-reset">Trang chủ</a>
                                        </p>
                                        <p>
                                            <a href="/HuongdanCNTT" className="text-reset">Hướng dẫn CNTT</a>
                                        </p>
                                        <p>
                                            <a href="/Lienhe" className="text-reset">Liên hệ</a>
                                        </p>
                                    </div>

                                    <div className="col-md-4">

                                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                        <p>
                                            <i className="fa fa-home me-3"></i> Thôn 4, Tam Hiệp, Núi Thành, Quảng Nam
                                        </p>
                                        <p>
                                            <i className="fa fa-envelope me-3"></i>
                                            rep-thacokia@thaco.com.vn
                                        </p>
                                        <p><i className="fa fa-phone me-3"></i> + 01 234 567 88</p>
                                        <p><i className="fa fa-print me-3"></i> + 01 234 567 89</p>
                                    </div>







                                    {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3"></i>Company name
                                    </h6>
                                    <p className="text-justify">
                                        THACO KIA là nhà máy sản xuất - lắp ráp xe du lịch đầu tiên tại Việt Nam, được chuyển giao công nghệ hiện đại từ Tập đoàn KIA (Hàn Quốc).
                                    </p>
                                </div> */}

                                    {/* <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Products
                                    </h6>
                                    <p>
                                        <a className="text-reset" href="https://sorentohybrid.kiavietnam.com.vn/" target="_blank">
                                            Sorento Hybrid
                                        </a>
                                    </p>
                                    <p>
                                        <a href="https://seltos.kiavietnam.com.vn/" target="_blank" className="text-reset">Seltos</a>
                                    </p>
                                    <p>
                                        <a href="https://carens.kiavietnam.com.vn/" target="_blank" className="text-reset">Carens</a>
                                    </p>
                                    <p>
                                        <a href="hhttps://thenewk3.kiavietnam.com.vn/" target="_blank" className="text-reset">K3</a>
                                    </p>
                                    <p>
                                        <a href="https://newmorning.kiavietnam.com.vn/" target="_blank" className="text-reset">New Morning</a>
                                    </p>
                                </div> */}

                                    {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="/" className="text-reset">Trang chủ</a>
                                    </p>
                                    <p>
                                        <a href="/HuongdanCNTT" className="text-reset">Hướng dẫn CNTT</a>
                                    </p>
                                    <p>
                                        <a href="/Lienhe" className="text-reset">Liên hệ</a>
                                    </p>
                                </div> */}

                                    {/* <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                    <span><i className="fa fa-home me-3"></i> Thôn 4, Tam Hiệp, Núi Thành, Quảng Nam </span>
                                    <p>
                                        <i className="fa fa-envelope me-3"></i>
                                        rep-thacokia@thaco.com.vn
                                    </p>
                                    <p><i className="fa fa-phone me-3"></i> + 01 234 567 88</p>
                                    <p><i className="fa fa-print me-3"></i> + 01 234 567 89</p>
                                </div> */}

                                </div>

                            </div>
                        </section>

                        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>

                            <p className="text-reset fw-bold">© 2023 Copyright: Nguyễn Văn Hảo - Phòng Kỹ thuật -  SĐT: 0379.959.717</p>
                        </div>
                    </footer >
                </div>
            </div >
        );
    }
}
export default Footer;


