import React from 'react';
import {Button, Card, CardContent} from "@mui/material";
import paladin from "../../../assets/img/class/paladin.jpg";
import {NavLink, Route, Router, Switch, useRouteMatch} from "react-router-dom";
import bard from "../../../assets/img/class/bard.jpg";
import FullScreenDialog from "../../../utils/Dialog/Dialog";
import scaut from "../../../assets/img/class/scaut.jpg";
import druid from "../../../assets/img/class/druid.jpg";
import Paladin from "./paladin/paladin";

import Bard from "./bard/bard";
import Scaut from "./scaut/scaut";
import Scout from "./scaut/scaut";

const SetClass = () => {
    let { path, url } = useRouteMatch();

    return (

        <div>

                    <Switch>
                        <Route exact  path={`${path}/paladin`}>
                            <Paladin />
                        </Route>
                        <Route exact path={`${path}/scaut`}>
                            <Scout />
                        </Route>
                        <Route exact path={`${path}/bard`}>
                            <Bard />
                        </Route>
                    </Switch>


        <h2 className="tabs_class_title" > классы</h2>

    <div className="class_row">
        <Card  className="game_class">

            <CardContent className="game_class_content"
                         sx={{ fontSize: 14 }}
            >
                <img className="game_class_image" src={paladin}
                     alt="paladin"
                />
                <b> PALADIN</b>
                <p>Вне зависимости от происхождения и миссии,
                    паладинов объединяет их клятва противостоять силам зла.
                    Принесённая ли перед алтарём бога и заверенная священником,
                    или же на священной поляне перед духами природы и феями,
                    или в момент отчаяния и горя смерти, присяга паладина
                    — могущественный договор. Это источник силы, который
                    превращает набожного воина в благослвенного героя.</p>

            </CardContent>
            <Button
                variant="contained"
                color="warning"
            >
                <NavLink
                    to={`${url}/paladin`}
                >
                    Подробнее
                </NavLink>
            </Button>
            {/*//dialog*/}
        </Card>


        <Card  className="game_class">

            <CardContent className="game_class_content" >
                <img className="game_class_image" src={bard}
                     alt="bard"
                />
                <b>  BARD</b>
                <p>Неважно, кем является бард: учёным, скальдом или проходимцем;
                    он плетёт магию из слов и музыки, вдохновляя союзников,
                    деморализуя противников, манипулируя сознанием,
                    создавая иллюзии, и даже исцеляя раны.</p>

            </CardContent>
            <Button
                variant="contained"
                color="warning"
                // onClick={() => FullScreenDialog()}
            >
                <NavLink
                    to={`${url}/bard`}
                    >
                Детально
                </NavLink>
            </Button>
        </Card>


        <Card  className="game_class">

            <CardContent className="game_class_content" >
                <img className="game_class_image" src={scaut}
                     alt="scaut"
                />
                <b> SCAUT</b>
                <p>Вдали от суеты городов и посёлков, за изгородями,
                    которые защищают самые далёкие фермы от ужасов дикой природы,
                    среди плотно стоящих деревьев, беспутья лесов и на просторах
                    необъятных равнин следопыты несут свой бесконечный дозор.</p>

            </CardContent>
            <Button
                variant="contained"
                color="warning"
            >
                <NavLink
                         to={`${url}/scaut`}
                >
                    Подробнее
                </NavLink>
            </Button>
        </Card>

    </div>

    <Card  className="game_class">

        <CardContent className="game_class_content" >
            <img className="game_class_image" src={druid}
                 alt="druid"
            />
            <b>   DRUID</b>
            <p>Призывая стихии или подражая животным,
                друиды воплощают незыблемость, приспособляемость и гнев природы.
                Они ни в коем случае не владыки природы — вместо этого друиды
                ощущают себя частью её неодолимой воли.</p>

        </CardContent>
        <Button
            variant="contained"
        >
            <NavLink
                to={`${url}/paladin`}
                >
                Подробнее
            < /NavLink>
        </Button>
    </Card>

        </div>


);
};

export default SetClass;