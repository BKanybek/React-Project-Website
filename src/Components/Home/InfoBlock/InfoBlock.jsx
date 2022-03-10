import React from 'react';
import { Link } from 'react-router-dom';

const InfoBlock = () => {
    return (
        <div style={{display: 'inherit', textAlign: 'center', justifyContent: 'space-around'}}>
            <Link to={'/cosmograph'} style={{textDecoration: 'none'}}>
            <img style={{ width:'80%', height: '80%', }} src="https://content.rolex.com/dam/homepage/grid/rolex-org/environment/anita-studer/language-popin/homepage-rolex-org-anita-studer-popin-rae90_studer_21db_003.jpg?imwidth=1920" alt="rolexBird" />
            <h1 style={{ color: 'black', padding: 30}}>
            Часы  COSMOGRAPH
            </h1>
            </Link>
            </div>
        
    );
};

export default InfoBlock;   