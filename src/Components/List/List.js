import React from 'react'
import { ListItem } from './ListItem/ListItem'
import classes from './List.module.scss'

export const List = () => {
    return (
        <div className={classes.List}>
            <ListItem itemContent="Быстрый поиск желаемой квартиры" />
            <ListItem itemContent="Поиск по вашим параметрам" />
            <ListItem itemContent="Бесплатно" />
        </div>
    )
}
