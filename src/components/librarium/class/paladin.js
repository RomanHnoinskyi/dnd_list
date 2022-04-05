import React from 'react';
import paladin from '../../../assets/img/class/paladin.jpg'
const Paladin = () => {
    return (
        <div>
            <img src={paladin}/>
            <div className="paladin_list">
                Паладины были здесь!
            </div>
        </div>
    );
};

export default Paladin;