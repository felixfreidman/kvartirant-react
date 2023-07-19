import React from 'react'
import classes from './LittleForm.module.scss'
import { FormInput } from '../../../FormHandlers/FormInput/FormInput'
import { FormButtonSmall } from '../../../FormHandlers/FormButtonSmall/FormButtonSmall'


export const LittleForm = (props) => {
    return (
        <div className={classes.LittleForm}>
            <div className={classes.FormHeader}>{props.formHeader}</div>
            <FormInput InputType="text" InputName="userName" InputPlaceholder="Ваше Имя" />
            <FormInput InputType="text" InputName="userPhone" InputPlaceholder="Телефон" />
            <FormButtonSmall ButtonType="submit" ButtonText="Отправить" />
        </div>
    )
}
