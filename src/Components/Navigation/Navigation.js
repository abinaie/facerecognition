import React from 'react'

//it is a pure funciotn and has no state (it is not a class)
const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn){
        return (
            <nav style= {{display: 'flex', justifyContent: 'flex-end'}} >
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'> Sign Out</p>
            </nav>
    );
    }else{
        return(
            <nav style= {{display: 'flex', justifyContent: 'flex-end'}} >
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'> Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'> Register</p>
            </nav>                 
        );
    }
}

export default Navigation;