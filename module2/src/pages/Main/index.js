import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryErro: false,
    repositoryInput: 'angular/angular',
    repositories: [],
  };

  componentDidMount() {
    const localReposString = window.localStorage.getItem('repositories');
    if (localReposString) {
      this.setState({
        repositories: JSON.parse(localReposString),
      });
    }
  }

  handleAddRepository = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      let localRepos = [];
      let localReposString = window.localStorage.getItem('repositories');

      localReposString += '';
      if (localReposString) {
        try {
          localRepos = JSON.parse(localReposString);
        } catch (err) {
          console.log(`Erro:${err}`);
        }
        const repositoriesLeft = this.state.repositories.filter(item => item.id != repository.id);
        repositoriesLeft.push(repository);
        localRepos = repositoriesLeft;
        localReposString = JSON.stringify(localRepos);
      } else {
        localRepos.push(repository);
        localReposString = JSON.stringify(localRepos);
      }

      window.localStorage.setItem('repositories', localReposString);

      this.setState({
        repositoryInput: '',
        repositories: localRepos,
        repositoryErro: false,
      });
    } catch (err) {
      this.setState({
        repositoryErro: true,
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  removeRepository = async (idRepository) => {
    console.log(idRepository);
    const repositoriesLeft = this.state.repositories.filter(item => item.id != idRepository);
    const localReposString = JSON.stringify(repositoriesLeft);
    window.localStorage.setItem('repositories', localReposString);

    // const repositoriesLeft = this.state.repositories.filter(
    //  item => item.id != idRepository,
    // );
    this.setState({
      repositories: repositoriesLeft,
    });
  };

  updateRepository = async (repositoryParam) => {
    console.log(repositoryParam.full_name);
    const { data: repository } = await api.get(`/repos/${repositoryParam.full_name}`);
    repository.lastCommit = moment(repository.pushed_at).fromNow();
    console.log(`IdParam:${repositoryParam.id}`);
    const repositoriesLeft = this.state.repositories.filter(item => item.id != repositoryParam.id);

    console.log('repositoriesLeft');
    console.log(repositoriesLeft);
    repositoriesLeft.push(repository);

    const localReposString = JSON.stringify(repositoriesLeft);
    window.localStorage.setItem('repositories', localReposString);

    this.setState({
      repositories: repositoriesLeft,
    });
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={this.state.repositoryErro} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="Usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'Ok'}
          </button>
        </Form>

        <CompareList
          repositories={this.state.repositories}
          onRemoveClick={this.removeRepository}
          onRefreshClick={this.updateRepository}
        />
      </Container>
    );
  }
}
