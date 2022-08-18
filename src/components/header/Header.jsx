import React from 'react'

import './header.scss'

import { logo } from '../../assets/images'

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner container">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="header__nav">
                    <li><a href="#">Tổng quan</a></li>
                    <li><a href="#">Dự án</a></li>
                    <li><a href="#">Thành viên</a></li>
                    <li><a href="#">Xem thêm</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
