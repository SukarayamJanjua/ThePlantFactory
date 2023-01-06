import React from 'react'
import './Header.css'
import plant__logo from './Images/plant_logo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



function Header() {
    return (
        <div className='header__main'>
            <div className="header__left">
                <p>The Plant Factory</p>
                <img src={plant__logo} alt="" />

                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder='Search for gifts,flowers...' />
                </div>
            </div>
                <div className="header__right">
                    <HeaderOption Icon={ShareLocationIcon} title='Track Order'/>
                    <HeaderOption Icon={CardGiftcardIcon} title='Gifts' />
                    <HeaderOption Icon={NoteAddIcon} title='Notes' />
                    <HeaderOption Icon={ShoppingCartIcon} title='Cart' />
                    <HeaderOption 
                        avatar="https://www.koimoi.com/wp-content/new-galleries/2020/10/peaky-blinders-do-you-know-cillian-murphy-as-thomas-shelby-smoked-3000-cigarettes-in-just-2-seasons-002.jpg" 
                        title='Me'/>
                    <HeaderOption Icon={MoreHorizIcon} title='more' />
                </div>
            </div>
        
            )
}

            export default Header
