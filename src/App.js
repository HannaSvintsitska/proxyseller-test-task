import './App.css';
import Albums from './albums/albums-page';
import Posts from './posts/posts-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './users/users-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/posts/:id" element={<Posts />} />
        <Route exact path="/albums/:id" element={<Albums />} />
      </Routes>
    </Router>
  );
}

export default App;
