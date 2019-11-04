import React, { useState } from 'react';



function App() {
  const [userQuery, setUserQuery] = useState('');

  const updateUserQuery = event => {
    console.log('userQuery', userQuery);
    setUserQuery(event.target.value);
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }
  
  return (
    <div className="App">
      <h1>Hello Tasha</h1>
      <div className='form'>
        <input alue={userQuery} onChange={updateUserQuery} />
        <button onClick={searchQuery}>Search</button>
      </div>
    </div>
  );
}

export default App;
