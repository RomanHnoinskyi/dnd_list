import React, {useEffect} from 'react';
import Navbar from "./navbar/Navbar";
import './app.css'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Registration from "./registration/Registration";
import Login from "./registration/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import Disk from "./disk/Disk";
import Profile from "./profile/Profile";
import Librium from "./librarium/librium";
import Paladin from "./librarium/class/paladin/paladin";

import dice from "./dice/Dice";
import Blank from "./blank/blank";
import Scout from "./librarium/class/scaut/scaut";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isAuth ) {
            dispatch(auth())
        }

    }, [])


    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar/>
                <div className="wrap">
                    {!isAuth ?
                        <Switch>
                            <Route path="/registration" component={Registration}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/librium" component={Librium}/>
                            <Route path="/dice" component={dice}/>
                            <Route path="/blank" component={Blank}/>
                            <Redirect to='/login'/>
                        </Switch>
                        :
                        <Switch>
                            <Route exact path="/" component={Disk}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route path="/librium" component={Librium}/>
                            <Route path="/dice" component={dice}/>
                            <Route path="/blank" component={Blank}/>
                            <Redirect to="/"/>
                        </Switch>
                    }
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;