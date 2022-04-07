
import React, {useState} from 'react';
import './registration.css'
import Input from "../../utils/input/input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";
import {Button} from "@mui/material";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='registration'>
            <div className="authorization__header">Логин</div>
            <Input
                value={email}
                setValue={setEmail}
                type="text"
                placeholder="Введите email..."
            />
            <Input
                value={password}
                setValue={setPassword}
                type="password"
                placeholder="Введите пароль..."
            />
            <Button
                variant="contained"
                color="success"
                onClick={() => dispatch(login(email, password))}
            >
                Войти
            </Button>
        </div>
    );
};

export default Login;