import React from 'react';

import expert1 from '../../../imges/expert1.jpg'
import expert2 from '../../../imges/expert2.jpg'
import expert3 from '../../../imges/expert3.jpg'
import expert4 from '../../../imges/expert4.jpg'
import expert5 from '../../../imges/expert5.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {id:1, name:"anabil", img: expert1},
    {id:2, name:"bnabil", img: expert2},
    {id:3, name:"cnabil", img: expert3},
    {id:4, name:"dnabil", img: expert4},
    {id:5, name:"enabil", img: expert5},
]


const Experts = () => {
    return (
        <div>
            <h2>experts</h2>
          <div className="row">
          {experts.map(expert=><Expert key={expert.id} expert={expert}></Expert>)}
          </div>

        </div>
    );
};

export default Experts;