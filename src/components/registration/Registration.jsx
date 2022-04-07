import React, {useState} from 'react';
import Input from "../../utils/input/input";
import "./registration.css"
import {registration} from "../../actions/user";
import {Button} from "@mui/material";

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="registration">
            <div className="registration__header"> Регистрация</div>
            <Input
                value = { email }
                setValue = { setEmail }
                type="text"
                placeholder="введите email"
            />
            <Input
                value = { password }
                setValue = { setPassword }
                type="password"
                placeholder="введите пароль"
            />
            <Button
                variant="contained"
                color="secondary"
                onClick={() => registration(email,password)}
            >
                Зарегистрироваться
            </Button>
        </div>
    );
};

export default Registration;