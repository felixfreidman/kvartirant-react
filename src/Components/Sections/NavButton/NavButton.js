import React from 'react'
import classes from './NavButton.module.scss'

export const NavButton = (props) => {
    console.log(props)
    if (props.isLink) {
        return (
            <div className={classes.NavButton}>
                <img src={props.buttonImg} alt="" />
            </div>
        )
    } else {
        return (
            <div className={classes.NavButton}>
                <img src={props.buttonImg} alt="" />
            </div>
        )
    }

}
