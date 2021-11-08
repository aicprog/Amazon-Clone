import React from 'react'
import './Header.css'
import { headerLinks } from '../../../constants/headerLinks'

const Header = () => {
    return (
        <div className="header">
            {/* Header Logo */}
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" className="header-logo"/>
            {/* Header Search Input */}
            <div className="header-search">
                <input className="header-search-input" type="text"></input>
            </div>

            {/* Right: Header Options */}
            <div className="header-nav">
                <div className="header-option">
                    {
                        headerLinks.map((link) =>(
                            <div key={link.id} className={`header-option`}>
                                <span className="header-option-one">{link.topName}{link.topName === 'Hello' && " Guest"}</span>
                                <span className="header-option-two">{link.bottomName}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
