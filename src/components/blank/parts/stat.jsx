import React from 'react';
import {Button, TextField} from "@mui/material";
import '../blank.css';



const Stat = ( {mod, stat, name, setStat}) => {
    return (
        <div className="cell">
        <Button
            variant="text"
            // onClick={() => push(mod, `'Проверка '${name}`)}
        >
            {name}
        </Button>
        <h1> {mod}</h1>
        <TextField
            id="strength"
            value={stat}
            onChange={e => setStat(e.target.value)}
            className="stat_text"
            size="small"
            defaultValue="10"
            type="number"
        >
        </TextField>
    </div>
    );
};

export default Stat;