import React from 'react'
import './Style/header.css'
import Navbar from 'react-bootstrap/Navbar'


export default function Header() {
    return (
        <Navbar className="header" bg="dark" variant="dark">

            <div className="logo">
                <h2>Lando Chill</h2>
            </div>
            <div className="nav__items">
                <h3 className="menu__item">Button</h3>
                <h3 className="menu__item">Button</h3>
                <h3 className="menu__item">Button</h3>
                <h3 className="menu__item">Button</h3>
            </div>
        </Navbar>
    )
}
