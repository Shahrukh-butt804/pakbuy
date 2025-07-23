import React from 'react';
// import { Diamond } from 'lucide-react';
import MainLogo from '../../../public/images/logo.png';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img src={MainLogo} alt="Not found" className="web-logo" />
    </div>
  );
};

export default Logo;