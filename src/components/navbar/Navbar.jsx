import React, {useState} from 'react';
import './navbar.css'
import Logo from '../../assets/img/logo.svg'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";
import {getFiles, searchFiles} from "../../actions/file";
import {showLoader} from "../../reducers/appReducer";
import avatarLogo from '../../assets/img/avatar.svg'
import {API_URL} from "../../config";
import {Button} from "@mui/material";
import {ArrowBack, BookOutlined, CasinoOutlined} from "@mui/icons-material";


const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const currentDir = useSelector(state => state.files.currentDir)
    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()
    const [searchName, setSearchName] = useState('')
    const [searchTimeout, setSearchTimeout] = useState(false)
    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo

    function searchChangeHandler(e) {
        setSearchName(e.target.value)
        if (searchTimeout !== false) {
            clearTimeout(searchTimeout)
        }
        dispatch(showLoader())
        if(e.target.value !== '') {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFiles(value));
            }, 500, e.target.value))
        } else {
            dispatch(getFiles(currentDir))
        }
    }

    return (
        <div className="navbar">
            <div className="container">

                        <img src={Logo} alt="" className="navbar__logo"/>
                        <div className="navbar__header"><NavLink to="/">Persona List</NavLink> </div>
                        <Button
                            variant="outlined"
                            startIcon={<BookOutlined />}
                        >
                            <NavLink to="/librium"> Библиотека</NavLink></Button>
                        <Button
                            variant="outlined"
                            startIcon={<CasinoOutlined />}
                        >
                            <NavLink to="/dice"> Кубы</NavLink></Button>


                        {isAuth && <input
                            value={searchName}
                            onChange={e => searchChangeHandler(e)}
                            className='navbar__search'
                            type="text"
                            placeholder="Название файла..."/>}
                        <img className="navbar__avatar" src={avatar} alt=""/>
                        {!isAuth && <Button variant="contained" color="success"> <NavLink to="/login">Войти</NavLink></Button> }
                        {!isAuth && <Button variant="outlined" color="secondary"><NavLink to="/registration">Регистрация</NavLink></Button> }
                        {isAuth && <Button variant="contained" color="error" onClick={() => dispatch(logout()) }>Выход</Button> }
                        {isAuth && <NavLink to='/profile'>

                        </NavLink>}




            </div>
        </div>
    );
};

export default Navbar;