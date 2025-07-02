import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListComponent from './components/ListComponent';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Using JSONPlaceholder (e.g., posts) — can be swapped easily
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setData(response.data.slice(0, 10)); // limit for clarity
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch data.');
        setLoading(false);
      });
  }, []);

  const renderPost = (post) => (
    <div>
      <strong>{post.title}</strong>
      <p>{post.body}</p>
    </div>
);

  return (
    <div style={styles.container}>
      <h1>📃 Post List</h1>

      {loading && <p>Loading data...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {!loading && !error && (
        <ListComponent items={data} renderItem={renderPost} />
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  error: {
    color: 'red',
  },
};

export default App;
