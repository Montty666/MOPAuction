import React from 'react'
import * as styles from './HeaderStyles.module.css'
import logoIMG from '../../assets/wowmoplogo.png'
import { AppBar, Toolbar } from 'react95'
import { Search } from '../Search/Search'

export const Header = () => {
    return (
        <div className={styles.container}>
            <AppBar position="fixed">
                <Toolbar style={{ height: '54px' }}>
                    <img
                        src={logoIMG}
                        alt="react95 logo"
                        style={{ height: '50px'}}
                    />
                    <Search />
                </Toolbar>
            </AppBar>
        </div>
    )
}
