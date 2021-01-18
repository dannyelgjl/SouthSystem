import React from 'react';
// Icons
import { FiLogOut } from 'react-icons/fi';
// Logo
import southSystem from '../../assets/logo/SouthSystemLogo.jpg';
// Componentes estilizados
import { Container, Content, Profile, SignOut } from './styles';
// Image
import me from '../../assets/images/me.jpg';


const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <nav>
          <a href="https://southsystem.com.br/" target="_blank"> <span className="logo"><img src={southSystem} alt="South System" /></span></a>
          <a href="#">Home</a>
        </nav>

        <aside>


          <Profile>
            <div>
              <strong>Daniel Jerônimo<img src={me} /></strong>
              <a href="/#">Meu perfil</a>
            </div>
          </Profile>

          <SignOut>
            <button type="button" onClick={() => { }}>
              <p>
                Sair
            </p>
              <FiLogOut size={16} />
            </button>
          </SignOut>
        </aside>
      </Content>
    </Container>
  );
}

export default Header