import React, { useState, useEffect } from 'react';
// API
import api from '../../services/api.github';
// Icons
import { FiChevronRight } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
// Estilização dos Componentes
import { Repositories, RepositoryInfo, Container } from './styles';

import me from '../../assets/images/me.jpg'

interface IGitProfile {
  avatar_url: string;
  name: string;
  blog: string;
  bio: string;
}

interface IRepository {
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Profile: React.FC<IGitProfile> = () => {
  // Estados
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [myUser, setMyUser] = useState<IGitProfile[]>([]);

  // Carregando dados dos Repositórios
  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get('/users/dannyelgjl/repos?size=40');

      const request = response.data;

      setRepositories(request);
    }

    loadRepositories();
  }, []);

  // Carregando dados do meu Perfil
  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get('/users/dannyelgjl');

      const request = response.data;

      setMyUser(request);
    }

    loadRepositories();
  }, []);

  return (
    <Container>
      <RepositoryInfo>
        <header>
          <img
            src={me} alt="{repository.owner.login}" />
          <div>
            <strong>Daniel Jerônimo</strong>
            <h2>João Pessoa, PB - Brasil<a href="https://github.com/dannyelgjl" target="_blank" ><SiInstagram color="#fff" size={24} /></a> </h2>
            <p>Computer science student, I love to develop 👨🏻‍💻🐱‍💻🐱‍👤</p>
          </div>
        </header>
      </RepositoryInfo>

      <Repositories>
        <h1>Meus Repositórios 🐱‍🏍🐱‍💻🚀🐱‍👤</h1>
        {repositories.map(repository => (
          <a key={repository.full_name} target="_blank" href={repository.html_url}>
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