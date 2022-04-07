import React, {useState} from 'react';
import {Button} from "@mui/material";



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
        <div>
            Генератор бросков кубов!
            <div>
                D4
                <Button>
                    +
                </Button>
                <Button>
                    -
                </Button>
                <div>
                    {dice4}
                </div>
                <Button onClick={d4}>
                    Push
                </Button>

            </div>
            <div>
                D6
                <Button>
                    +
                </Button>
                <Button>
                    -
                </Button>
                {dice6}
                <Button onClick={d6}>
                    Push
                </Button>
            </div>
            <div>
                D8
                <Button>
                    +
                </Button>
                <Button>
                    -
                </Button>
                {dice8}
                <Button onClick={d8}>
                    Push
                </Button>
            </div>
            <div>
                D10
                <Button>
                    +
                </Button>
                <Button>
                    -
                </Button>
                {dice10}
                <Button onClick={d10}>
                    Push
                </Button>
            </div>
            <div>
                D12
                <Button>
                    +
                </Button>
                <Button>
                    -
                </Button>
                {dice12}
                <Button onClick={d12}>
                    Push
                </Button>
            </div>
            <div>
                D20
                <Button>
                    +
                </Button>
                <Button>
                    -
                </Button>
                {dice20}
                <Button onClick={d20}>
                    Push
                </Button>
            </div>
            <div>
                D100
                <Button>
                    +
                </Button>
                <Button>
                    -
                </Button>
                {dice100}
                <Button onClick={d100}>
                    Push
                </Button>
            </div>
        </div>
    );
};

export default Dice;