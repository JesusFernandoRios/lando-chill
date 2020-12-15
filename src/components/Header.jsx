import React from 'react'
import './Style/header.css'


export default function Header() {
    return (
        <header className="header">

            <div className="logo">
                <h2>Lando Chill</h2>
            </div>
            <div className="nav__items">
                <h3 className="menu__item">Button</h3>
                <h3 className="menu__item">Button</h3>
                <h3 className="menu__item">Button</h3>
                <h3 className="menu__item">Button</h3>
            </div>
        </header>
    )
}
