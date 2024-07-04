import React from 'react';
import { Octokit } from '@octokit/core';

const GitHubProjects = () => { 
  const [repositories, setRepositories] = React.useState([]); 
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchRepositories = async () => {
    try {
      const octokit = new Octokit();
      setIsLoading(true);
      const response = await octokit.repos.listForRepo({
        owner: 'RodrigoZuniga42', 
        repo: 'React-portafolio ', 
      });
      setRepositories(response.data);
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      setRepositories([]); 
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <section>
    <div className="github-repositories">  
      <h4>Mis Proyectos</h4>  
      {isLoading ? (
        <p>Cargando repositorios...</p> 
      ) : (
        repositories.length > 0 && ( 
          <>
            {}
            {repositories.map((repository) => (
              <div key={repository.id} className="repository"> 
                <h3>
                  <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
                    {repository.name}
                  </a>
                </h3>
                <p>{repository.description}</p>
                <ul>
                  <li>Lenguaje: {repository.language}</li>
                  <li>Stars: {repository.stargazers_count}</li>
                  <li>Forks: {repository.forks_count}</li>
                </ul>
              </div>
            ))}
          </>
        )
      )}
    </div>
    </section>
  );
};

export default GitHubProjects;

