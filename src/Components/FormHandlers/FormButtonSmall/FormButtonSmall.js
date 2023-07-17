import React from 'react'
import classes from './FormButtonSmall.module.scss'

export const FormButtonSmall = (props) => {
    return (
        <button type={props.ButtonType} className={classes.FormButton}>{props.ButtonText}</button>
    )
}
