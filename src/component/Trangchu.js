import React, { Component } from 'react';
import logo from '../assets/images/background.JPG'
import $ from 'jquery';
window.$ = $;

class Trangchu extends Component {


    render() {
        return (
            <div>
                {/* //<h1>Trangchu</h1> */}
                <img className='col-sm-12' src={logo} />
            </div>
        );
    }
}
export default Trangchu;