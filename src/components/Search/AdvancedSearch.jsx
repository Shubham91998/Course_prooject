import React, { useState } from 'react';

const mockData = [
  { id: 1, title: 'React Course', category: 'Web', price: 100 },
  { id: 2, title: 'Node.js Bootcamp', category: 'Backend', price: 120 },
  { id: 3, title: 'Data Science', category: 'AI', price: 150 },
  { id: 4, title: 'UI/UX Design', category: 'Design', price: 90 },
];

const AdvancedSearch = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    let filtered = mockData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) &&
      (category ? item.category === category : true)
    );
    setResults(filtered);
  };

  return (
    <div className="advanced-search" style={{maxWidth: 500, margin: '2rem auto'}}>
      <h2>Advanced Search</h2>
      <form onSubmit={handleSearch} style={{display: 'flex', gap: 8, marginBottom: 16}}>
        <input
          type="text"
          placeholder="Search by title..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Web">Web</option>
          <option value="Backend">Backend</option>
          <option value="AI">AI</option>
          <option value="Design">Design</option>
        </select>
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map(item => (
          <li key={item.id}>{item.title} - {item.category} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdvancedSearch;
