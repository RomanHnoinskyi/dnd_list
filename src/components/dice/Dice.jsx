import React, {useState} from 'react';
import {Alert, Button} from "@mui/material";
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
    const [results, setResults] = useState([])


    function inc(count, setCount) {
        setCount(count+1)
    }
    function dec (count, setCount) {
        setCount(count-1)
    }
    function res (setCount) {
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

    function check(count, setCount, n) {
         alert (`Значение кубов: ${XdY(count, n)}`);
         if (count > 1) {
             alert (`Сумма: ${fun(results)}`)
         }
         res(setCount)
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
                {count4}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => inc(count4, setCount4)}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => dec(count4, setCount4)}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={() => res(setCount4)}
                    >res</Button>
                </div>
                <Button variant="outlined"
                        onClick={() => check(count4, setCount4, 4)}
                >
                    Roll
                </Button>
            </div>
            <div className="dice_dice">
                D6
                <img className="icons_dice"
                     src={dic6}
                     alt="dice 6"
                />
                {count6}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => inc(count6, setCount6)}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => dec(count6, setCount6)}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={() => res(setCount6)}
                    >res</Button>
                </div>
                <Button variant="outlined"
                        onClick={() => check(count6, setCount6, 6)}
                >
                    Roll
                </Button>
            </div>
            <div className="dice_dice">
                D8
                <img className="icons_dice"
                     src={dic8}
                     alt="dice 8"
                />
                {count8}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => inc(count8, setCount8)}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => dec(count8, setCount8)}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={() => res(setCount8)}
                    >res</Button>
                </div>
                <Button variant="outlined"
                        onClick={() => check(count8, setCount8, 8)}
                >
                    Roll
                </Button>
            </div>
            <div className="dice_dice">
                D10
                <img className="icons_dice"
                     src={dic10}
                     alt="dice 10"
                />
                {count10}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => inc(count10, setCount10)}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => dec(count10, setCount10)}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={() => res(setCount10)}
                    >res</Button>
                </div>
                <Button variant="outlined"
                        onClick={() => check(count10, setCount10, 10)}
                >
                    Roll
                </Button>
            </div>
            <div className="dice_dice">
                D12
                <img className="icons_dice"
                     src={dic12}
                     alt="dice 12"
                />
                {count12}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => inc(count12, setCount12)}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => dec(count12, setCount12)}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={() => res(setCount12)}
                    >res</Button>
                </div>
                <Button variant="outlined"
                        onClick={()=> check(count12, setCount12, 12)}
                >
                    Roll
                </Button>
            </div>
            <div className="dice_dice">
                D20
                <img className="icons_dice"
                     src={dic20}
                     alt="dice 20"
                />
                {count20}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => inc(count20, setCount20)}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => dec(count20, setCount20)}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={() => res(setCount20)}
                    >res</Button>
                </div>
                <Button variant="outlined"
                        onClick={() => check(count20, setCount20, 20)}
                >
                    Roll
                </Button>
            </div>
            <div className="dice_dice">
                D100
                <img className="icons_dice"
                     src={dic10}
                     alt="dice 100"
                />
                {count100}
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => inc(count100, setCount100)}
                    >+</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => dec(count100, setCount100)}
                    >-</Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={() => res(setCount100)}
                    >res</Button>
                </div>
                <Button variant="outlined"
                        onClick={() => check(count100, setCount100, 100)}
                >
                    Roll
                </Button>
            </div>
        </div>
    );
};

export default Dice;