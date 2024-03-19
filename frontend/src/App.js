import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { CreateIssue } from './components/post.issue';
import { IssueList } from './components/get.issues';
import { UpdateIssue } from './components/put.issue';
import { DeleteIssue } from './components/delete.issue';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/create" Component={CreateIssue} />
          <Route path='/' Component={IssueList}/>
          <Route path='/update/:id' Component={UpdateIssue} />
          <Route path='/delete/:id' Component={DeleteIssue} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
