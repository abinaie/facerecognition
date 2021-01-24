import React from 'react'

//it is a pure funciotn and has no state (it is not a class)
const Navigation = ({onRouteChange}) => {
    return (
        <nav style= {{display: 'flex', justifyContent: 'flex-end'}} >
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'> Sign Out</p>
        </nav>
    );
}

export default Navigation;