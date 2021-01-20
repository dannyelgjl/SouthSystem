import React, { useState, useEffect } from 'react';
// Router-dom
import { Link } from 'react-router-dom';
// API
import api from '../../services/api.github';
// Icons
import { FiChevronRight } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
// Estilização dos Componentes
import { Repositories, RepositoryInfo, Container } from './styles';
// imagem
import me from '../../assets/images/me.jpg';
// Interfaces
import { IRepository } from '../../interfaces/interface';


const Profile: React.FC<IRepository> = () => {

  const [repositories, setRepositories] = useState<IRepository[]>([]);

  // Carregando dados dos Repositórios
  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get('/users/dannyelgjl/repos?size=40');

      const request = response.data;

      setRepositories(request);
    }

    loadRepositories();
  }, [repositories]);

  return (
    <Container>
      <RepositoryInfo>
        <header>
          <img
            src={me} alt="{repository.owner.login}" />
          <div>
            <strong>Daniel Jerônimo</strong>
            <h2>João Pessoa, PB - Brasil<a href="https://www.instagram.com/danieljeronimo_/" rel="noreferrer" target="_blank" >
              <SiInstagram color="#fff" size={24} /></a> </h2>
            <p>Computer science student, I love to develop 👨🏻‍💻🐱‍💻🐱‍👤</p>
          </div>

          <Link to="/"><h3>Voltar</h3></Link>
        </header>
      </RepositoryInfo>

      <Repositories>
        <h1>Meus Repositórios 🐱‍🏍🐱‍💻🚀🐱‍👤</h1>
        {repositories.map(repository => (
          <a key={repository.full_name} target="_blank" rel="noreferrer" href={repository.html_url}>
            <img src={repository.owner.avatar_url} alt="" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </Container>
  )
}

export default Profile;