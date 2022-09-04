import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import {useHistory} from 'react-router-dom'
import { auth, provider } from '../firebase'
import {selectUserName, selectUserPhoto, setUserLoginDetails} from "../features/user/userSlice"

function Header(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    const handleAuth =() =>{
        auth.signInWithPopup(provider).then((result)=>{
            setUser(result.user)
        })
        .catch((error)=>{
            alert(error.message);
        });
    }

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="" />
      </Logo>
      <NavMenu>
        <a href="/home"><img src="/images/home-icon.svg" alt="HOME" />
        <span>HOME</span>
        </a>
        <a href="/home"><img src="/images/search-icon.svg" alt="HOME" />
        <span>SEARCH</span>
        </a>
        <a href="/home"><img src="/images/watchlist-icon.svg" alt="HOME" />
        <span>WATCHLIST</span>
        </a>
        <a href="/home"><img src="/images/original-icon.svg" alt="HOME" />
        <span>ORIGINALS</span>
        </a>
        <a href="/home"><img src="/images/movie-icon.svg" alt="HOME" />
        <span>MOVIES</span>
        </a>
        <a href="/home"><img src="/images/series-icon.svg" alt="HOME" />
        <span>SERIES</span>
        </a>

      </NavMenu>
      <Login onClick={handleAuth}>LOGIN</Login>
    </Nav>
  )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`

const Logo = styled.a`
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img{
        display: block;
        width: 100%;
    }
`

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: fkex-end;
    margin: 0;
    padding: 0;
    position:relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span{
            color: rgb(249,249,249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0;
            white-space: nowrap;
            position: relative;
            top: 3px;
        

        &:before{
            content: "";
            position: absolute;
            bottom: -6px;
            right: 0;
            left: 0;
            background-color: rgb(249,249,249);
            border-radius: 0 0 4px 4px;
            width: 100%;
            opacity: 0;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0%;
            visibility: hidden;
        }
    } 
    

    &:hover{
        span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
            width: 100%;
        }
    }
}
 
    @media(max-width: 768px){
        display: none;
    }
`

const Login = styled.a`
    background-color: rgb(0,0,0,0.6);
    padding: 8px 16px;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease-out;
    cursor: pointer;

    &:hover{
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
    }
`
export default Header
