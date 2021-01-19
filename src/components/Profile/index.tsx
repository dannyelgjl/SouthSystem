import React from 'react';
// Router-dom
import { Link } from 'react-router-dom';
// Estilos
import { ProfileStyling } from './styles';

const Profile: React.FC = () => {
  return (
    <ProfileStyling>
      <Link to="/profile"><img src="https://avatars1.githubusercontent.com/u/54491980?s=460&u=5457192f7674845b14a107f7791033cfcbabb036&v=4" alt="" /><span>Perfil</span></Link>
    </ProfileStyling>
  )
}

export default Profile;