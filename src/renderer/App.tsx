import './App.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import JobCard from './components/JobCard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobCard />} />
      </Routes>
    </Router>
  );
}
