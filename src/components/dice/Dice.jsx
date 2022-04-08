import React, {useState} from 'react';
import {Button} from "@mui/material";
import "./dice.css"
import dic4 from "../../assets/img/dice/d4.svg"
import dic6 from "../../assets/img/dice/d6.svg"
import dic8 from "../../assets/img/dice/d8.svg"
import dic10 from "../../assets/img/dice/d10.svg"
import dic12 from "../../assets/img/dice/d12.svg"
import dic20 from "../../assets/img/dice/d20.svg"

const Dice = () => {
    const [dice4, setDice4] = useState(0)
    const [dice6, setDice6] = useState(0)
    const [dice8, setDice8] = useState(0)
    const [dice10, setDice10] = useState(0)
    const [dice12, setDice12] = useState(0)
    const [dice20, setDice20] = useState(0)
    const [dice100, setDice100] = useState(0)

    function d4 () {
        setDice4 (Math.floor(Math.random()*4)+1)
    }

    function d6 () {
        setDice6 (Math.floor(Math.random()*6)+1)
    }
    function d8 () {
        setDice8 (Math.floor(Math.random()*8)+1)
    }
    function d10 () {
        setDice10 (Math.floor(Math.random()*10)+1)
    }
    function d12 () {
        setDice12 (Math.floor(Math.random()*12)+1)
    }
    function d20 () {
        setDice20 (Math.floor(Math.random()*20)+1)
    }
    function d100 () {
        setDice100 (Math.floor(Math.random()*100)+1)
    }
    return (
        <div className="dice_container">
            Генератор бросков кубов!
            <div className="dice_dice">
               D4
                <img className="icons_dice" src={dic4} />
                {/*<Button variant="contained" color="success"> +</Button>*/}
                {/*<Button variant="contained" color="error">-</Button>*/}
                {dice4}
                <Button variant="outlined" onClick={d4}>Roll</Button>
            </div>
            <div className="dice_dice">
                D6
                <img className="icons_dice" src={dic6} />
                {/*<Button>+</Button>*/}
                {/*<Button>-</Button>*/}
                {dice6}
                <Button variant="outlined" onClick={d6}>Push</Button>
            </div>
            <div className="dice_dice">
                D8
                <img className="icons_dice" src={dic8} />
                {/*<Button>+</Button>*/}
                {/*<Button>-</Button>*/}
                {dice8}
                <Button variant="outlined" onClick={d8}>Push</Button>
            </div>
            <div className="dice_dice">
                D10
                <img className="icons_dice" src={dic10} />
                {/*<Button>+</Button>*/}
                {/*<Button>-</Button>*/}
                {dice10}
                <Button variant="outlined" onClick={d10}>Push</Button>
            </div>
            <div className="dice_dice">
                D12
                <img className="icons_dice" src={dic12} />
                {/*<Button>+</Button>*/}
                {/*<Button>-</Button>*/}
                {dice12}
                <Button variant="outlined" onClick={d12}>Push</Button>
            </div>
            <div className="dice_dice">
                D20
                <img className="icons_dice" src={dic20} />
                {/*<Button>+</Button>*/}
                {/*<Button>-</Button>*/}
                {dice20}
                <Button variant="outlined" onClick={d20}>Push</Button>
            </div>
            <div className="dice_dice">
                D100
                <img className="icons_dice" src={dic10} />
                {/*<Button>+</Button>*/}
                {/*<Button>-</Button>*/}
                {dice100}
                <Button variant="outlined" onClick={d100}>Push</Button>
            </div>
        </div>
    );
};

export default Dice;