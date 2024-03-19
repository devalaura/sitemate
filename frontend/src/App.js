import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { CreateIssue } from './components/post.issue';
import { IssueList } from './components/get.issues';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/create" Component={CreateIssue} />
          <Route path='/' Component={IssueList}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
