import React from 'react'
import classes from './FormInput.module.scss'

export const FormInput = (props) => {
    return (
        <input className={classes.FormInput} type={props.InputType} name={props.InputName} placeholder={props.InputPlaceholder} />
    )
}
