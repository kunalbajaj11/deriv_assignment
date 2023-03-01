import Main from './pages/Main';
import { DataContext } from './context/DataContext';
import { useMemo, useState } from 'react';
import './App.css';

function App() {  
  const [res, setRes] = useState([]);
  const providerValue = useMemo(() => ({res, setRes}), [res, setRes]);

  return (
    <DataContext.Provider value={providerValue}>
      <Main></Main>
    </DataContext.Provider>
  );
}

export default App;
