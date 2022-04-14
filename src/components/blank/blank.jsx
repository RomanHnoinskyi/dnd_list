import React from 'react';
import {Button, Checkbox, Input, MenuItem, Radio, TextField} from "@mui/material";
import "./blank.css"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import {instruments, klass, langs, rassas} from "../../assets/constant/constant";


const Blank = () => {

    const [rassa, setRassa] = React.useState('человек');
    const [clas, setClas] = React.useState('воин');
    const [lang, setLang] = React.useState('общий')
    const [instrument, setInstrument] = React.useState('пивовара')
    const [selectedValue, setSelectedValue] = React.useState();
    const [strength, setStrength] = React.useState()
    const [constitution, setConstitution] = React.useState()
    const [dexterity, setDexterity] = React.useState()
    const [wisdom, setWisdom] = React.useState()
    const [intelligence, setIntelligence] = React.useState()
    const [charisma, setCharisma] = React.useState()

    const handleChangeras = (event) => {
        setRassa(event.target.value);
    };
    const handleChangeklas = (event) => {
        setClas(event.target.value);
    };
    const handleChangelangs = (event) => {
        setLang(event.target.value);
    };
    const handleChangeinstrument = (event) => {
        setInstrument(event.target.value);
    };
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

        let  modStrength = Math.floor((strength -10)/2)
        let  modConstitution = Math.floor((constitution -10)/2)
        let  modDexterity = Math.floor((dexterity -10)/2)
        let  modWisdom = Math.floor((wisdom -10)/2)
        let  modIntelligence = Math.floor((intelligence -10)/2)
        let  modCharisma = Math.floor((charisma -10)/2)

    return (
        <div className="blank">
            <div className="blank_bio">Лист персонажа
                <div className="">
                    <TextField id="standard-basic" variant="standard" />
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
                </div>
                <div>
                    <TextField
                        id="level"
                        label="Уровень"
                        type="number"
                        variant="standard"
                    >
                        Уровень
                    </TextField>
                    <TextField
                        id="expiriens"
                        label="Опыт"
                        type="number"
                        variant="standard"
                    >
                        Опыт
                    </TextField>
                </div>
            </div>
        <div className="blank_row">
            <div className="col">
                <div className="blank_statistic">
                    <div className="cell">
                        сила
                        <h1> {modStrength}</h1>
                        <TextField
                            id="strength"
                            value={strength}
                            onChange={e => setStrength(e.target.value)}
                            className="stat_text"
                            size="small"
                            defaultValue="10"
                            type="number"
                        >

                        </TextField>
                    </div>
                    <div className="cell">
                        тело
                        <h1> {modConstitution}</h1>
                        <TextField
                            id="constitution"
                            value={constitution}
                            onChange={e => setConstitution(e.target.value)}
                            className="stat_text"
                            size="small"
                            defaultValue="10"
                            type="number"
                        >

                        </TextField>
                    </div>
                    <div className="cell">
                        ловкость
                        <h1> {modDexterity}</h1>
                        <TextField
                            value={dexterity}
                            id="dexterity"
                            onChange={e => setDexterity(e.target.value)}
                            className="stat_text"
                            size="small"
                            defaultValue="10"
                            type="number"
                        >

                        </TextField>
                    </div>
                    <div className="cell">
                        мудрость
                        <h1> {modWisdom}</h1>
                        <TextField
                            id="wisdom"
                            value={wisdom}
                            onChange={e => setWisdom(e.target.value) }
                            className="stat_text"
                            size="small"
                            defaultValue="10"
                            type="number"
                        >

                        </TextField>
                    </div>
                    <div className="cell">
                        интелект
                        <h1> {modIntelligence}</h1>
                        <TextField
                            value={intelligence}
                            onChange={e => setIntelligence(e.target.value) }
                            id="intelligence"
                            className="stat_text"
                            size="small"
                            defaultValue="14"
                            type="number"
                        >

                        </TextField>
                    </div>
                    <div className="cell">
                        харизма
                        <h1> {modCharisma}</h1>
                        <TextField
                            value={charisma}
                            onChange={e => setCharisma(e.target.value) }
                            id="charisma"
                            className="stat_text"
                            size="small"
                            defaultValue="10"
                            type="number"
                        >
                        </TextField>
                    </div>

                </div>

                <div className="lang">
                    <div>
                        языки
                        <TextField
                            id="standard-select-currency"
                            select
                            value={lang}
                            onChange={handleChangelangs}
                            variant="standard"
                        >
                            {langs.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        инструменты
                        <TextField
                            id="standard-select-currency"
                            select
                            value={instrument}
                            onChange={handleChangeinstrument}
                            variant="standard"
                        >
                            {instruments.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </div>
            </div>


        <div className="blank_statistic_tabs">
            <div>
                <div className="spas">
                    спасы
                    <div>
                        <Checkbox defaultChecked size="small" />
                        сила
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        тело
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        ловкость
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        интелект
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        мудрость
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        харизма
                    </div>

                </div>
                <div className="navik">
                    навыки
                    <div>
                        <Checkbox defaultChecked size="small" />
                        акробатика
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        анализ
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        атлетика
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        внимание
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        выживание
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        выступление
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        запугивание
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        история
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        ловкость рук
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        магия
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        медицина
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        обман
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        природа
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        проницательность
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        религия
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        скрытность
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        убеждение
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        ухо.животн.
                    </div>
                </div>
            </div>

            <div className="blank_statistic_small">

            <div className="blank_row">
                <div className="stat">
                    <h7>БМ</h7>
                     <p>3</p>
                </div>
                <div className="stat">
                  <h7>Вдохновение</h7>
                    <p><Checkbox size="small" ></Checkbox></p>
                </div>
                <div className="stat">
                   <h7>КД</h7>
                    <p>11</p>
                </div>
                <div className="stat">
                   <h7>Инициатива</h7>
                    <p>2</p>
                </div>
                <div className="stat">
                   <h7>Скорость</h7>
                    <p>30</p>
                </div>

            </div>
                <div className="heals">
                    <div>
                      <h1>HP : 90</h1>

                    </div>
                    <div>
                        spas of dead
                        <div>
                            success
                            <Radio
                                checked={selectedValue === 'a'}
                                onChange={handleChange}
                                value="a"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <Radio
                                checked={selectedValue === 'b'}
                                onChange={handleChange}
                                value="b"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'B' }}
                            />
                            <Radio
                                checked={selectedValue === 'c'}
                                onChange={handleChange}
                                value="c"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'C' }}
                            />
                        </div>
                        <div>
                            fail
                            <Radio
                                checked={selectedValue === 'd'}
                                onChange={handleChange}
                                value="d"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'D' }}
                            />
                            <Radio
                                checked={selectedValue === 'e'}
                                onChange={handleChange}
                                value="e"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'E' }}
                            />
                            <Radio
                                checked={selectedValue === 'f'}
                                onChange={handleChange}
                                value="f"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'F' }}
                            />
                        </div>



                    </div>
                </div>
                <div className="attack">
                    <h3>Действия/Атаки</h3>
                    <div className="blank_row attack_item">
                        <div>
                            название
                        </div>
                        <div>
                            бонус атаки
                        </div>
                        <div>
                            урон/вид
                        </div>
                    </div>

                    <div className="blank_row">
                        <TextField id="" variant="standard" />
                        <TextField id="" variant="standard" />
                        <TextField id="" variant="standard" />
                    </div>
                </div>
                <div className="items">
                    снаряжение
                    <div className="blank_row">
                        <div className="col">
                            мм
                            <TextField
                                className="stat_text"
                                size="small"
                                defaultValue=""
                                type="number"
                            >
                            </TextField>
                        </div>
                        <div className="col">
                            см
                            <TextField
                                className="stat_text"
                                size="small"
                                defaultValue=""
                                type="number"
                            >
                            </TextField>
                        </div>
                        <div className="col">
                            эм
                            <TextField
                                className="stat_text"
                                size="small"
                                defaultValue=""
                                type="number"
                            >
                            </TextField>
                        </div>
                        <div className="col">
                            зм
                            <TextField
                                className="stat_text"
                                size="small"
                                defaultValue=""
                                type="number"
                            >
                            </TextField>
                        </div>
                        <div className="col">
                            пм
                            <TextField
                                className="stat_text"
                                size="small"
                                defaultValue=""
                                type="number"
                            >
                            </TextField>
                        </div>
                    </div>
                    <div>
                        <TextField id="standard-basic" variant="standard" />
                        <TextField id="standard-basic" variant="standard" />
                        <TextField id="standard-basic" variant="standard" />
                        <TextField id="standard-basic" variant="standard" />

                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <AddCircleOutlineIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </div>

                </div>
        </div>

        </div>

            </div>

        </div>
    );
};

export default Blank;