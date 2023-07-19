import React from 'react'
import classes from './ListItem.module.scss'

export const ListItem = (props) => {
    return (
        <div className={classes.ListItem}>
            <div className={classes.ListItem__bullet}></div>
            <div className={classes.ListItem__content}>{props.itemContent}</div>
        </div>
    )
}
