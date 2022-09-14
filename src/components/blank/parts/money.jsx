import React from 'react';
import {TextField} from "@mui/material";
import '../blank.css'

const Money = ({name, coin, setCoin}) => {
    return (
        <div className="col">
            {name}
            <TextField
                className="stat_text"
                size="small"
                onChange={e => setCoin(e.target.value)}
                defaultValue="0"
                value={coin}
                type="number"
            >
            </TextField>
        </div>
    );
};

export default Money;