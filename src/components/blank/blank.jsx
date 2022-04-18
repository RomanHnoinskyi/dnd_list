import React from 'react';
import { Checkbox, Input, MenuItem, Radio, TextField} from "@mui/material";
import "./blank.css"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import {instruments, klass, langs, rassas} from "../../assets/constant/constant";


const Blank = () => {

    const [rassa, setRassa] = React.useState('человек');
    const [clas, setClas] = React.useState('бард');
    const [lang, setLang] = React.useState('общий')
    const [instrument, setInstrument] = React.useState('пивовара')
    const [selectedValue, setSelectedValue] = React.useState();
    const [strength, setStrength] = React.useState()
    const [constitution, setConstitution] = React.useState()
    const [dexterity, setDexterity] = React.useState()
    const [wisdom, setWisdom] = React.useState()
    const [intelligence, setIntelligence] = React.useState()
    const [charisma, setCharisma] = React.useState()
    const [BM, setBM] = React.useState(2)
    const [level, setLevel] = React.useState(1)
    const [spasstrtrain, setspasstrtrain] = React.useState(false);
    const [spascotrain, setspascotrain] = React.useState(false);
    const [spasdextrain, setspasdextrain] = React.useState(false);
    const [spasinttrain, setspasinttrain] = React.useState(false);
    const [spaswistrain, setspaswistrain] = React.useState(false);
    const [spaschatrain, setspaschatrain] = React.useState(false);

    const [expiriens, setExpiriens] = React.useState(0)

    const handleChangespascotrain  = (event) => {
        setspascotrain(event.target.checked);
    };
    const handleChangespasstrtrain  = (event) => {
        setspasstrtrain(event.target.checked);
    };
    const handleChangespasdextrain  = (event) => {
        setspasstrtrain(event.target.checked);
    };
    const handleChangespasinttrain  = (event) => {
        setspasinttrain(event.target.checked);
    };
    const handleChangespaswistrain  = (event) => {
        setspaswistrain(event.target.checked);
    };
    const handleChangespaschatrain  = (event) => {
        setspaschatrain(event.target.checked);
    };


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

        let spasstr = modStrength + (BM*spasstrtrain)
        let spascon = modConstitution + (BM*spascotrain)
        let spasdex = modDexterity + (BM*spasdextrain)
        let spasint = modIntelligence + (BM*spasinttrain)
        let spaswis = modWisdom + (BM*spaswistrain)
        let spascha = modCharisma + (BM*spaschatrain)


    //     if ( expiriens < 300) {
    //         setLevel = 1
    //     } if (300 <= expiriens < 900) {
    //         setLevel = 2
    // } if (900 <= expiriens < 2700){
    //          setLevel =3
    // }



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
                       value = {level}
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
                        value={expiriens}
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
                    <div className="col">
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
                    <div className="col">
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
                    <div className="blank_row">
                        <Checkbox
                            checked={spasstrtrain}
                            onChange={handleChangespasstrtrain}
                            defaultChecked size="small"
                        />
                        <TextField
                            value={spasstr}
                            className="spas_text"
                            variant="standard"
                        />
                        сила
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small"
                                  checked={spascotrain}
                                  onChange={handleChangespascotrain}
                        />
                        <TextField
                            value={spascon}
                            className="spas_text"
                            variant="standard"
                        />
                        тело
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small"
                                  checked={spasdextrain}
                                  onChange={handleChangespasdextrain}
                        />
                        <TextField
                            value={spasdex}
                            className="spas_text"
                            variant="standard"
                        />
                        ловкость
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small"
                                  checked={spasinttrain}
                                  onChange={handleChangespasinttrain}
                        />
                        <TextField
                            value={spasint}
                            className="spas_text"
                            variant="standard"
                        />
                        интелект
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small"
                                  checked={spaswistrain}
                                  onChange={handleChangespaswistrain}
                        />
                        <TextField
                            value={spaswis}
                            className="spas_text"
                            variant="standard"
                        />
                        мудрость
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small"
                                  checked={spaschatrain}
                                  onChange={handleChangespaschatrain}
                        />
                        <TextField
                            value={spascha}
                            className="spas_text"
                            variant="standard"
                        />
                        харизма
                    </div>

                </div>
                <div className="navik">
                    навыки
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <input
                            value={spascha}
                            className="nav_text"

                        />
                        акробатика(лов)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        анализ(инт)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        атлетика(сил)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        внимание(муд)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        выжив.(муд)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        выст.(хар)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        запуг.(хар)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        история(инт)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        лов. рук(лов)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        магия(инт)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        медицина(муд)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        обман(хар)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        природа(муд)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        прониц.(муд)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        религия(инт)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        скрыт(лов)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        убежд.(хар)
                    </div>
                    <div>
                        <Checkbox defaultChecked size="small" />
                        <TextField
                            value={spascha}
                            className="nav_text"
                            variant="standard"
                        />
                        у.животн.(муд)
                    </div>
                </div>
            </div>

            <div className="blank_statistic_small">

            <div className="blank_row">
                <div className="stat">
                    <h7>БМ</h7>
                    <TextField
                        variant="standard"
                        id="BM"
                        value={BM}
                        onChange={e => setBM(e.target.value)}
                        className="bm_text"
                        size="small"
                        defaultValue="2"
                        type="number"
                    >

                    </TextField>
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
                    <p>{modDexterity}</p>
                </div>
                <div className="stat">
                   <h7>Скорость</h7>
                    <p>30</p>
                </div>

            </div>
                <div className="heals">
                    <div className="blank_row">
                      <h1>HP : </h1>
                        <TextField
                            variant="standard" />

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