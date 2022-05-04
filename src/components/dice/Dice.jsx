import React, {useState} from 'react';
import { Button} from "@mui/material";
import "./dice.css"
import dic4 from "../../assets/img/dice/d4.svg"
import dic6 from "../../assets/img/dice/d6.svg"
import dic8 from "../../assets/img/dice/d8.svg"
import dic10 from "../../assets/img/dice/d10.svg"
import dic12 from "../../assets/img/dice/d12.svg"
import dic20 from "../../assets/img/dice/d20.svg"

const Dice = () => {
    const [count4, setCount4] = useState(1)
    const [count6, setCount6] = useState(1)
    const [count8, setCount8] = useState(1)
    const [count10, setCount10] = useState(1)
    const [count12, setCount12] = useState(1)
    const [count20, setCount20] = useState(1)
    const [count100, setCount100] = useState(1)
    const [count, setCount] = useState(1)
    const [results, setResults] = useState([])
    const [sumall, setSumall] = useState(0)

    function inc() {
            setCount(count+1)
    }
    function dec () {
            setCount(count-1)
    }
    function res () {
        setCount(1)
        setResults([])
    }

    function d(n) {
          return (Math.floor(Math.random()*n)+1)
    }

    function XdY(count, n) {
        do {
           results.push(d(n))
        } while (results.length < count)
        return  results
    }

    function fun (results) {
       let  sumall = results.map(w=> w*1).reduce(function(a,b)  {
            return a + b
        });
       return  sumall
    }

    function check(count, n) {
      alert ( XdY(count, n));
        alert(fun(results))
        res()
    }



    return (
        <div className="dice_container">
            Генератор бросков кубов!
            <div className="dice_dice">
               D4
                <img className="icons_dice"
                     src={dic4}
                     alt="dice 4"
                />
                {count}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => inc()}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => dec()}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={res}
                    >res</Button>
                </div>
                <Button variant="outlined"
                        onClick={() => check(count, 4)}
                >Roll</Button>
            </div>
            <div className="dice_dice">
                D6
                <img className="icons_dice"
                     src={dic6}
                     alt="dice 6"
                />
                {count}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={inc}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={dec}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={res}
                    >res</Button>
                </div>
                <Button variant="outlined"
                        onClick={() => check(count, 6)}
                >
                    Push
                </Button>
            </div>
            <div className="dice_dice">
                D8
                <img className="icons_dice"
                     src={dic8}
                     alt="dice 8"
                />
                {count}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={inc}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={dec}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={res}
                    >res</Button>
                </div>
                <Button variant="outlined"
                        onClick={() => check(count, 8)}
                >Push</Button>
            </div>
            <div className="dice_dice">
                D10
                <img className="icons_dice"
                     src={dic10}
                     alt="dice 10"
                />
                {count}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={inc}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={dec}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={res}
                    >res</Button>
                </div>
                <Button variant="outlined"
                        onClick={() => check(count, 10)}
                >
                    Push
                </Button>
            </div>
            <div className="dice_dice">
                D12
                <img className="icons_dice"
                     src={dic12}
                     alt="dice 12"
                />
                {count}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={inc}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={dec}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={res}
                    >res</Button>
                </div>
                <Button variant="outlined"
                        onClick={()=> check(count, 12)}
                >
                    Push
                </Button>
            </div>
            <div className="dice_dice">
                D20
                <img className="icons_dice"
                     src={dic20}
                     alt="dice 20"
                />
                {count}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={inc}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={dec}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={res}
                    >res</Button>
                </div>
                <Button variant="outlined"
                        onClick={() => check(count, 20)}
                >Push</Button>
            </div>
            <div className="dice_dice">
                D100
                <img className="icons_dice"
                     src={dic10}
                     alt="dice 100"
                />
                {count}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={inc}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={dec}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={res}
                    >res</Button>
                </div>
                <Button variant="outlined"
                        onClick={() => check(count, 100)}
                >Push</Button>
            </div>
            <div className="dice_dice">
                D
                <img className="icons_dice"
                     src={dic10}
                     alt="dice 100"
                />
                {count}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={inc}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={dec}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={res}
                    >res</Button>
                </div>
                <Button
                    variant="outlined"
                    onClick={() => check(count, 20)}
                >
                    Push
                </Button>
            </div>
        </div>
    );
};

export default Dice;