import React from 'react';
import {Button, Checkbox} from "@mui/material";
import '../blank.css'
import {push} from "./function";

const Parametr = ({name, value, cheks, change}) => {
    return (
        <div>
            <Checkbox defaultChecked size="small"
                      checked={cheks}
                       onChange={change}
            />
                <span>{value}</span>
            <Button
                variant="text"
                onClick={() => push(value, "Спасбросок ловкости")}
            >
                {name}
            </Button>
        </div>
    );
};

export default Parametr;