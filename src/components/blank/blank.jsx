import React from 'react';
import {Input, MenuItem, Radio, TextField} from "@mui/material";
import "./blank.css"
import {CheckBox} from "@mui/icons-material";
const rassas = [
    {
        value: 'человек',
        label: 'человек',
    },
    {
        value: 'гном',
        label: 'гном',
    },
    {
        value: 'дворф',
        label: 'дворф',
    },
    {
        value: 'тифлинг',
        label: 'тифлинг',
    },
    {
        value: 'полуорк',
        label: 'полуорк',
    },
    {
        value: 'кованный',
        label: 'кованный',
    },
    {
        value: 'драконорожденный',
        label: 'драконорожденный',
    },
    {
        value: 'эльф',
        label: 'эльф',
    },
];
const klass = [
    {
        value: 'воин',
    },
    {
        value: 'бард',
        label: 'бард',
    },
    {
        value: 'варвар',
        label: 'варвар',
    },
    {
        value: 'друид',
        label: 'друид',
    },
    {
        value: 'волшебник',
        label: 'волшебник',
    },
    {
        value: 'жрец',
        label: 'жрец',
    },
    {
        value: 'паладин',
        label: 'паладин',
    },
    {
        value: 'колдун',
        label: 'колдун',
    },
    {
        value: 'монах',
        label: 'монах',
    },
    {
        value: 'изобретатель',
        label: 'изобретатель',
    },
    {
        value: 'следопыт',
        label: 'следопыт',
    },
    {
        value: 'колдун',
        label: 'колдун',
    },
    {
        value: 'чародей',
        label: 'чародей',
    },

]




const Blank = () => {

    const [rassa, setRassa] = React.useState('человек');
    const [clas, setClas] = React.useState('воин');
    const handleChangeras = (event) => {
        setRassa(event.target.value);
    };
    const handleChangeklas = (event) => {
        setClas(event.target.value);
    };

    return (
        <div className="blank">
            <div className="blank_bio">Лист персонажа
                <TextField id="standard-basic" label="Имя" variant="standard"> Имя</TextField>
                <TextField
                    id="standard-select-currency"
                    select
                    label="расса"
                    value={rassa}
                    onChange={handleChangeras}
                    helperText="Выберете рассу"
                    variant="standard"
                >
                    {rassas.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="standard-select-currency-native"
                    select
                    label="класс"
                    value={clas}
                    onChange={handleChangeklas}
                    helperText="Выберете класс"
                    variant="standard"
                >
                    {klass.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField id="standard-basic" label="Уровень" type="number" variant="standard">Уровень</TextField>
            </div>
<div className="blank_row">
        <div className="blank_statistic">
        Блок статистики.
        <div>
            сила
            <TextField
                size="small"

            >

            </TextField>
        </div>
        <div>
            телосложение
            <TextField
                size="small"
            >

            </TextField>
        </div>
        <div>
            ловкость
            <TextField size="small"></TextField>
        </div>
        <div>
            мудрость
            <TextField size="small"></TextField>
        </div>
        <div>
            интелект
            <TextField size="small"></TextField>
        </div>
            <div>
                харизма
                <TextField size="small"></TextField>
            </div>

    </div>
        <div className="blank_statistic_tabs">
        <div className="blank_statistic_small">
            малое меню
            <div>
                <div>
                    БМ

                </div>
                <div>
                    Вдохновение
                    <CheckBox></CheckBox>
                </div>
                <div>
                    КД
                </div>
                <div>
                    Инициатива
                </div>
                <div>
                    Скорость
                </div>

            </div>

        </div>
</div>

            <div>
                спасы
            </div>
            <div>
                навыки
            </div>
            </div>
            <div>
                атаки
            </div>
        </div>
    );
};

export default Blank;