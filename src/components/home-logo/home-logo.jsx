import React from 'react';
import {Link} from 'react-router';

const HomeLogo = props => {
  return (
    <div className="klatsch-home-logo">
      <Link to="/"><span className="home-logo"/></Link>
    </div>
  );
};

HomeLogo.propTypes = {};

export default HomeLogo;