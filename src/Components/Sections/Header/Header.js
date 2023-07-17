import React, { Component } from 'react'
import Logo from './Logo/Logo'
import classes from './Header.module.scss'
import { NavButton } from './NavButton/NavButton'
import adtLogo from '../../../Images/adt_logo.svg'
import profileLogo from '../../../Images/profile_logo.svg'
import vkLogo from '../../../Images/social_vk.svg'
import tgLogo from '../../../Images/social_tg.svg'

export default class Header extends Component {

    state = {
        buttons: [
            { buttomImg: vkLogo, isLink: true },
            { buttomImg: tgLogo, isLink: true },
            { buttomImg: adtLogo, isLink: true },
            { buttomImg: profileLogo, isLink: true },
        ]
    }




    render() {
        const buttonsArray = this.state.buttons;

        return (
            <header className={classes.header}>
                <Logo />
                <div className={classes.container}>
                    {buttonsArray.map((button, index) => {
                        return (
                            <NavButton
                                key={index}
                                buttonImg={button.buttomImg}
                                isLink={button.isLink}
                            />
                        )
                    })
                    }
                </div>
            </header>
        )
    }
}

