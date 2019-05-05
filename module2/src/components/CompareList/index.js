import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';

const CompareList = ({ repositories, onRemoveClick, onRefreshClick }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>
            {repository.starsgazers_count} <small>stars</small>
          </li>
          <li>
            {repository.forks_count} <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count} <small>issues</small>
          </li>
          <li>
            {repository.lastCommit} <small>last commit</small>
          </li>

          <li>
            <button onClick={() => onRemoveClick(repository.id)}>
              <i className="fa fa-trash" />
              Remover
            </button>
            <button onClick={() => onRefreshClick(repository)}>
              <i className="fa fa-refresh" />
              Atualizar
            </button>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: {
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      },
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      lastCommit: PropTypes.string,
    }),
  ),
  onRemoveClick: PropTypes.func,
  onRefreshClick: PropTypes.func,
};

export default CompareList;
