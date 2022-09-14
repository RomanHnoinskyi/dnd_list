import React from 'react';
import {Button, Checkbox, MenuItem, Radio, TextField} from "@mui/material";
import "./blank.css"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import {instruments, klass, langs, rassas} from "../../assets/constant/constant";
import SettingsIcon from '@mui/icons-material/Settings';
import Stat from "./parts/stat";
import Parametr from "./parts/parametr";
import Money from "./parts/money";


const Blank = () => {

    const [rassa, setRassa] = React.useState('человек');             //рассы
    const [clas, setClas] = React.useState('бард');                 //классы
    const [lang, setLang] = React.useState('общий')                  //языки
    const [instrument, setInstrument] = React.useState('пивовара')      //инструменты
    const [selectedValue, setSelectedValue] = React.useState();
    const [strength, setStrength] = React.useState( 10)             //сила
    const [constitution, setConstitution] = React.useState(10)      //телосложение
    const [dexterity, setDexterity] = React.useState(10)            //ловкость
    const [wisdom, setWisdom] = React.useState(10)                  //мудрость
    const [intelligence, setIntelligence] = React.useState(10)      //интелект
    const [charisma, setCharisma] = React.useState(10)              //харизма
    const [BM, setBM] = React.useState(2)                           //бонус мастерства
    const [level, setLevel] = React.useState(1)                     //уровень



    let  modStrength = Math.floor((strength -10)/2)
    let  modConstitution = Math.floor((constitution -10)/2)
    let  modDexterity = Math.floor((dexterity -10)/2)
    let  modWisdom = Math.floor((wisdom -10)/2)
    let  modIntelligence = Math.floor((intelligence -10)/2)
    let  modCharisma = Math.floor((charisma -10)/2)

    const [spasstrtrain, setspasstrtrain] = React.useState(false);
    const [spascotrain, setspascotrain] = React.useState(false);
    const [spasdextrain, setspasdextrain] = React.useState(false);
    const [spasinttrain, setspasinttrain] = React.useState(false);
    const [spaswistrain, setspaswistrain] = React.useState(false);
    const [spaschatrain, setspaschatrain] = React.useState(false);

    const [navakrobtrain, setnavakrobtrain] = React.useState(false);
    const [navlovrtrain, setnavlovrtrain] = React.useState(false);
    const [navsteltrain, setnavsteltrain] = React.useState(false);
    const [navanaltrain, setnavanaltrain] = React.useState(true);
    const [navhisttrain, setnavhisttrain] = React.useState(false);
    const [navmagitrain, setnavmagitrain] = React.useState(false);
    const [navrelitrain, setnavrelitrain] = React.useState(false);
    const [navatletrain, setnavatletrain] = React.useState(false);
    const [navsenstrain, setnavsenstrain] = React.useState(false);
    const [navsurvtrain, setnavsurvtrain] = React.useState(false);
    const [navmeditrain, setnavmeditrain] = React.useState(false);
    const [navnatutrain, setnavnatutrain] = React.useState(false);
    const [navprontrain, setnavprontrain] = React.useState(false);
    const [navbeastrain, setnavbeastrain] = React.useState(false);
    const [navshowtrain, setnavshowtrain] = React.useState(false);
    const [navsceatrain, setnavsceatrain] = React.useState(false);
    const [navcheatrain, setnavcheatrain] = React.useState(false);
    const [navopintrain, setnavopintrain] = React.useState(false);

    const [expiriens, setExpiriens] = React.useState(0)

    const [mm, setMm] = React.useState(0)                           //медные монеты
    const [sm, setSm] = React.useState(0)                           //серебряные монеты
    const [em, setEm] = React.useState(0)                            //электрумовые монеты
    const [gm, setGm] = React.useState(0)                           //золотые монеты
    const [pm, setPm] = React.useState(0)                           //платиновые монеты

    const handleChangespascotrain  = (event) => {
        setspascotrain(event.target.checked);
    };
    const handleChangespasstrtrain  = (event) => {
        setspasstrtrain(event.target.checked);
    };
    const handleChangespasdextrain  = (event) => {
        setspasdextrain(event.target.checked);
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

    const handleChangenavakrobtrain  = (event) => {
        setnavakrobtrain(event.target.checked);
    };
    const handleChangenavlovrtrain  = (event) => {
        setnavlovrtrain(event.target.checked);
    };
    const handleChangenavsteltrain  = (event) => {
        setnavsteltrain(event.target.checked);
    };
    const handleChangenavanaltrain  = (event) => {
        setnavanaltrain(event.target.checked);
    };
    const handleChangenavhisttrain  = (event) => {
        setnavhisttrain(event.target.checked);
    };
    const handleChangenavmagitrain  = (event) => {
        setnavmagitrain(event.target.checked);
    };
    const handleChangenavrelitrain  = (event) => {
        setnavrelitrain(event.target.checked);
    };
    const handleChangenavatletrain  = (event) => {
        setnavatletrain(event.target.checked);
    };
    const handleChangenavsenstrain  = (event) => {
        setnavsenstrain(event.target.checked);
    };
    const handleChangenavsurvtrain  = (event) => {
        setnavsurvtrain(event.target.checked);
    };
    const handleChangenavmeditrain  = (event) => {
        setnavmeditrain(event.target.checked);
    };
    const handleChangenavnatutrain  = (event) => {
        setnavnatutrain(event.target.checked);
    };
    const handleChangenavprontrain  = (event) => {
        setnavprontrain(event.target.checked);
    };
    const handleChangenavbeastrain  = (event) => {
        setnavbeastrain(event.target.checked);
    };
    const handleChangenavshowtrain = (event) => {
        setnavshowtrain(event.target.checked);
    };
    const handleChangenavsceatrain  = (event) => {
        setnavsceatrain(event.target.checked);
    };
    const handleChangenavcheatrain  = (event) => {
        setnavcheatrain(event.target.checked);
    };
    const handleChangenavopintrain  = (event) => {
        setnavopintrain(event.target.checked);
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
        //спасброски
        let spasstr = modStrength + (BM*spasstrtrain)
        let spascon = modConstitution + (BM*spascotrain)
        let spasdex = modDexterity + (BM*spasdextrain)
        let spasint = modIntelligence + (BM*spasinttrain)
        let spaswis = modWisdom + (BM*spaswistrain)
        let spascha = modCharisma + (BM*spaschatrain)
        // навыки
        let akrob = modDexterity +BM*navakrobtrain                   //акробатика
        let lovruk = modDexterity + BM*navlovrtrain                  //ловкость рук
        let stels = modDexterity + BM*navsteltrain                   //скрытность
         let analiz = modIntelligence + BM*navanaltrain              //анализ
         let history = modIntelligence  + BM*navhisttrain           //история
         let magick = modIntelligence + BM*navmagitrain           //магия
         let religion = modIntelligence + BM*navrelitrain         //религия
         let atletick = modStrength + BM*navatletrain             //атлетика
         let sensor = modWisdom + BM*navsenstrain                 //внимание
         let survai = modWisdom + BM*navsurvtrain                  //выживание
         let medic = modWisdom + BM*navmeditrain                  //медицына
         let nature = modWisdom + BM*navnatutrain                 //природа
         let pronic = modWisdom + BM*navprontrain                 //проницательность
         let beast = modWisdom + BM*navbeastrain                  //уход за животными
         let show = modCharisma + BM*navshowtrain                  //выступление
         let sceary = modCharisma + BM*navsceatrain               // запугивание
         let cheat = modCharisma + BM*navcheatrain                 //обман
         let opinion = modCharisma + BM*navopintrain              //убеждение



    let speed = 0

    if (rassa == 'человек' || 'тифлинг' || 'полуорк' || 'кованный' || 'драконорожденный' || 'эльф' ) {
            speed = 30
    } else {
            speed = 25
    }

     function chekspas (n) {
        return  Math.floor(Math.random()*20)+1 + n
        // return alert(ran)
    }
      function push( n, text) {
        alert(`${text}  ${chekspas(n)}`)
    }


    return (
        <div className="blank">
            <div className="blank_bio">
                <div>
                    <h4>
                        Лист персонажа
                    </h4>
                </div>
                <div className="col baz">
                    <div className="blank_row" >
                        <h3>
                            Имя персонажа:
                        </h3>
                        <TextField id="standard-basic" variant="standard" />
                        <TextField
                            id="standard-select-currency"
                            select
                            label="расса"
                            value={rassa}
                            onChange={handleChangeras}
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
                            variant="standard"
                        >
                            {klass.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <IconButton aria-label="delete">
                            <SettingsIcon />
                        </IconButton>
                    </div>
                    <div className="blank_row">
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

            </div>
        <div className="blank_row">
            <div className="col">
                <div className="blank_statistic">
                    <Stat  name='сила' mod={modStrength} stat={strength} setStat={setStrength}/>
                    <Stat  name='тело' mod={modConstitution} stat={constitution} setStat={setConstitution}/>
                    <Stat  name='ловкость' mod={modDexterity} stat={dexterity} setStat={setDexterity}/>
                    <Stat  name='мудрость' mod={modWisdom} stat={wisdom} setStat={setWisdom}/>
                    <Stat  name='интелект' mod={modIntelligence} stat={intelligence} setStat={setIntelligence}/>
                    <Stat  name='харизма' mod={modCharisma} stat={charisma} setStat={setCharisma}/>
                </div>
                <div className="lang">
                    <div className="col">
                       <h4 className="text_tit">
                           языки
                       </h4>
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
                        <h3 className="text_tit">
                            инструменты
                        </h3>
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
                    <h4 className="text_tit">
                        спасы
                    </h4>
                    <Parametr name='сила' value={spasstr} cheks={spasstrtrain} change={handleChangespasstrtrain}/>
                    <Parametr name='тело' value={spascon} cheks={spascotrain} change={handleChangespascotrain}/>
                    <Parametr name='ловкость' value={spasdex} cheks={spasdextrain} change={handleChangespasdextrain}/>
                    <Parametr name='интелект' value={spasint} cheks={spasinttrain} change={handleChangespasinttrain}/>
                    <Parametr name='мудрость' value={spaswis} cheks={spaswistrain} change={handleChangespaswistrain}/>
                    <Parametr name='харизма' value={spascha} cheks={spaschatrain} change={handleChangespaschatrain}/>
                </div>
                <div className="navik">
                    <h3 className="text_tit">
                        навыки
                    </h3>
                    <Parametr name='акробатика(л)' value={akrob} cheks={navakrobtrain} change={handleChangenavakrobtrain}/>
                    <Parametr name='анализ(и)' value={analiz} cheks={navanaltrain} change={handleChangenavanaltrain}/>
                    <Parametr name='атлетика(с)' value={atletick} cheks={navatletrain} change={handleChangenavatletrain}/>
                    <Parametr name='внимание(м)' value={sensor} cheks={navsenstrain} change={handleChangenavsenstrain}/>
                    <Parametr name='выжив.(м)' value={survai} cheks={navsurvtrain} change={handleChangenavsurvtrain}/>
                    <Parametr name='выст.(х)' value={show} cheks={navshowtrain} change={handleChangenavshowtrain}/>
                    <Parametr name='запуг.(х)' value={sceary} cheks={navsceatrain} change={handleChangenavsceatrain}/>
                    <Parametr name=' история(и)' value={history} cheks={navhisttrain} change={handleChangenavhisttrain}/>
                    <Parametr name=' лов. рук(л)' value={lovruk} cheks={navlovrtrain} change={handleChangenavlovrtrain}/>
                    <Parametr name='магия(и)' value={magick} cheks={navmagitrain} change={handleChangenavmagitrain}/>
                    <Parametr name='медицина(м)' value={medic} cheks={navmeditrain} change={handleChangenavmeditrain}/>
                    <Parametr name='обман(х)' value={cheat} cheks={navcheatrain} change={handleChangenavcheatrain}/>
                    <Parametr name='природа(м)' value={nature} cheks={navnatutrain} change={handleChangenavnatutrain}/>
                    <Parametr name='прониц.(м)' value={pronic} cheks={navprontrain} change={handleChangenavprontrain}/>
                    <Parametr name='религия(и)' value={religion} cheks={navrelitrain} change={handleChangenavrelitrain}/>
                    <Parametr name=' скрыт(л)' value={stels} cheks={navsteltrain} change={handleChangenavsteltrain}/>
                    <Parametr name=' убежд.(х)' value={opinion} cheks={navopintrain} change={handleChangenavopintrain}/>
                    <Parametr name='у.животн.(м)' value={beast} cheks={navbeastrain} change={handleChangenavbeastrain}/>
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
                  <span>
                      Вдохнов.
                  </span>
                    <p><Checkbox size="small" ></Checkbox></p>
                </div>
              <div className="blank_row">
                  <div className="stat">
                      <h7>КД</h7>
                      <p>11</p>
                  </div>
                  <div className="stat">
                      <Button
                          variant="text"
                          size="small"
                          onClick={ () =>  chekspas(modDexterity) }
                      >
                          Инициатива
                      </Button>
                      <p>{modDexterity}</p>
                  </div>
                  <div className="stat">
                      <h7>Скорость</h7>
                      <p>{speed}</p>
                  </div>
              </div>

            </div>
                <div className="heals">
                    <div className="blank_row">
                      <h1>HP : </h1>
                        <TextField
                            variant="standard" />
                    </div>
                    <div>
                        <Button
                            variant="text"
                            size="small"
                            onClick={ () => chekspas(0) }
                        >
                            Спасы от смерти
                        </Button>

                        <div>
                            Успех
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
                            Провал
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
                    <h3 className="text_tit">
                        Действия/Атаки
                    </h3>
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
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </div>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <div className="items">
                    <h3 className="text_tit">
                        снаряжение
                    </h3>
                    <div className="blank_row">
                        <Money name='mm' coin={mm} setCoin={setMm}/>
                        <Money name='см' coin={sm} setCoin={setSm}/>
                        <Money name='эм' coin={em} setCoin={setEm}/>
                        <Money name='зм' coin={gm} setCoin={setGm}/>
                        <Money name='пм' coin={pm} setCoin={setPm}/>
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