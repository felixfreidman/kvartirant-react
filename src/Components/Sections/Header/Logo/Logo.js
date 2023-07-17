import React from 'react'
import logo from "../../../../Images/Logo.svg"
import classes from './Logo.module.scss'

const Logo = (props) => {
    return (
        <div className={classes.logo}>
            <img src={logo} alt="" />
            <span className={classes.logo_name}>Квартирант</span>
        </div>
    )
}

export default Logo
