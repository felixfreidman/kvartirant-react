import React from 'react'
import classes from './GreetingSection.module.scss'
import { LittleForm } from './LittleForm/LittleForm'

export const GreetingSection = (props) => {
    return (
        <div className={classes.GreetingSection}>
            <LittleForm />
        </div>
    )
}
