import { buildGhCredentials } from './db';
import { useEffect, useState, useCallback } from 'react';

import githubQuery from './Query';
import RepoInfo from './components/RepoInfo';
import SearchBox from './components/SearchBox';
import NavButtons from './components/NavButtons';
import CredentialsBox from './components/CredentialsBox';

function App() {
  const [ghCredentials, setGhCredentials] = useState(null);
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState('');
  const [ghUser, setGhUser] = useState('');
  const [repoList, setRepoList] = useState(null);
  const [pageCount, setPageCount] = useState(10);
  const [queryString, setQueryString] = useState('');
  const [orderBy, setOrderBy] = useState('updated-desc');
  const [totalCount, setTotalCount] = useState(null);

  const [startCursor, setStartCursor] = useState(null);
  const [endCursor, setEndCursor] = useState(null);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [paginationKeyword, setPaginationKeyword] = useState('first');
  const [paginationString, setPaginationString] = useState('');

  const getCredentials = useCallback(() => {
    const credentials = localStorage.getItem('credentials');

    if (credentials) {
      const [username, token] = credentials.split('&');
      setCredentials(username, token);
    }
  }, []);

  const setCredentials = (user, token) => {
    const credentials = buildGhCredentials(user, token);
    localStorage.setItem('credentials', `${user}&${token}`);
    setError(false);
    setGhCredentials(credentials);
    setGhUser(user);
  };

  const fetchData = useCallback(() => {
    const queryText = JSON.stringify(
      githubQuery(pageCount, queryString, paginationKeyword, paginationString, ghUser, orderBy)
    );

    fetch(ghCredentials?.baseURL, {
      method: 'POST',
      headers: ghCredentials?.headers,
      body: queryText,
    })
      .then((response) => response.json())
      .then((data) => {
        const { search, viewer } = data.data;
        setUserName(viewer.name);
        setRepoList(search.edges);
        setTotalCount(search.repositoryCount);
        setStartCursor(search.pageInfo?.startCursor);
        setEndCursor(search.pageInfo?.endCursor);
        setHasNextPage(search.pageInfo?.hasNextPage);
        setHasPreviousPage(search.pageInfo?.hasPreviousPage);
      })
      .catch((error) => {
        setError(true);
        localStorage.removeItem('credentials');
        console.log(`Error => ${error.message}`);
      });
  }, [ghCredentials, pageCount, queryString, paginationKeyword, paginationString, ghUser, orderBy]);

  useEffect(() => {
    getCredentials();
  }, [getCredentials]);

  useEffect(() => {
    if (ghCredentials && !error) {
      fetchData();
    }
  }, [fetchData, ghCredentials, error]);

  useEffect(() => {
    setPaginationString('');
  }, [queryString, orderBy]);

  if (!ghCredentials || error) {
    return (
      <div className='App container mt-5'>
        {error && (
          <div className='alert alert-danger'>
            <strong>Error!</strong> Invalid Credentials!!
          </div>
        )}
        <CredentialsBox onSetCredentials={setCredentials}/>
      </div>
    )
  }

  return (
    <div className='App container-mt-5'>
      <h1 className='text-primary'>
        <i className='bi bi-diagram-2-fill'></i> Repos
      </h1>
      <p>Welcome <b>{userName}</b></p>
      <SearchBox
        totalCount={totalCount}
        pageCount={pageCount}
        queryString={queryString}
        onTotalChange={(myNumber) => setPageCount(myNumber)}
        onQueryChange={(myString) => setQueryString(myString)}
        onOrderBy={(orderByString) => setOrderBy(orderByString)}
      />
      <NavButtons
        start={startCursor}
        end={endCursor}
        next={hasNextPage}
        previous={hasPreviousPage}
        onPage={(myKeyword, myString) => {
          setPaginationKeyword(myKeyword);
          setPaginationString(myString);
        }}
      />
      {repoList && (
        <ul className='list-group list-group-flush'>
          {repoList.map(({ node }) => (
            <RepoInfo repo={node} key={node.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
