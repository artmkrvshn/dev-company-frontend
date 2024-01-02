import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-yellow-500 px-4 py-3 gap-14 border-b border-stone-300 flex  uppercase tracking-widest">
    <Link to={'/'}>Home</Link>
    <Link to={'/departments'}>Departments</Link>
    <Link to={'/employees'}>Employees</Link>
    <Link to={'/projects'}>Projects</Link>
    <Link to={'/positions'}>Positions</Link>
    <Link to={'/statuses'}>Statuses</Link>
  </header>
);

export default Header;
