import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { CreateIssue } from './components/post.issue';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/create" Component={CreateIssue} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
