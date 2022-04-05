import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './tabs.css'
import {Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid} from "@mui/material";
import warior from '../../assets/img/class/warior.jpg'
import bard from '../../assets/img/class/bard.jpg'
import druid from '../../assets/img/class/druid.jpg'
import paladin from '../../assets/img/class/paladin.jpg'
import scaut from '../../assets/img/class/scaut.jpg'
import Paladin from "../../components/librarium/class/paladin.js";
import {NavLink} from "react-router-dom";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'window' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{  borderColor: 'divider' }}
            >
                <Tab label="Рассы" {...a11yProps( 0)} />
                <Tab label="Классы" {...a11yProps(1)} />
                <Tab label="Заклинания" {...a11yProps(2)} />
                <Tab label="Инвентарь" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <h2> Рассы</h2>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <h2 className="tabs_class_title" > классы</h2>

    <div className="class_row">
        <Card  className="game_class">

            <CardContent className="game_class_content"
                         sx={{ fontSize: 14 }}
            >
                <img className="game_class_image" src={paladin}
                     alt="paladin"
                />
                <b>   PALADIN</b>
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
                <NavLink to='/librium/paladin'>
                    Подробнее
                </NavLink>
            </Button>
        </Card>


        <Card  className="game_class">

            <CardContent className="game_class_content" >
                <img className="game_class_image" src={bard}
                     alt="paladin"
                />
                <b>   BARD</b>
                <p>Неважно, кем является бард: учёным, скальдом или проходимцем;
                    он плетёт магию из слов и музыки, вдохновляя союзников,
                    деморализуя противников, манипулируя сознанием,
                    создавая иллюзии, и даже исцеляя раны.</p>

            </CardContent>
            <Button
                variant="contained"
                color="warning"
            >
                <NavLink to={Paladin}>Подробнее</NavLink>
            </Button>
        </Card>


        <Card  className="game_class">

            <CardContent className="game_class_content" >
                <img className="game_class_image" src={scaut}
                     alt="scaut"
                />
                <b>   SCAUT</b>
                <p>Вдали от суеты городов и посёлков, за изгородями,
                    которые защищают самые далёкие фермы от ужасов дикой природы,
                    среди плотно стоящих деревьев, беспутья лесов и на просторах
                    необъятных равнин следопыты несут свой бесконечный дозор.</p>

            </CardContent>
            <Button
                variant="contained"
                color="warning"
            >
                <a href={Paladin}>Подробнее</a>
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
                                <NavLink to={Paladin}>Подробнее</NavLink>
                            </Button>
                        </Card>





            </TabPanel>
            <TabPanel value={value} index={2}>
                <h2> Заклинания</h2>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <h2> Инвентарь</h2>
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
        </Box>
    );
}
