import React from 'react';

//it is a pure funciotn and has no state (it is not a class)
const Rank = () => {
    return (
        <div >
            <div className='white f3'>
                {'Amir, your current rank is...'}
            </div>

            <div className='white f1'>
                {'#5'}
            </div>
        </div>
    );
}

export default Rank;