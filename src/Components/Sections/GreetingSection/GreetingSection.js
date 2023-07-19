import React from 'react'
import classes from './GreetingSection.module.scss'
import { LittleForm } from './LittleForm/LittleForm'
import { List } from '../../List/List'

export const GreetingSection = (props) => {
    return (
        <div className={classes.GreetingSection}>
            <div className={classes.GreetingSection__container}>
                <div className={classes.GreetingSection__header}>Самый простой способ <br></br>
                    найти квартиру</div>
                <List />
            </div>
            <LittleForm formHeader="Мы вам перезвоним и ответим на все важные вопросы" />
        </div>
    )
}
