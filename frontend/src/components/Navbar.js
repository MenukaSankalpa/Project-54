import { Link } from 'react-router-dom';


export default function Navbar({ user, onLogout}) {
    return (
    <nav className='bg-brand-red p-4 text-white flex justify-between'>
        <span className='font-bold text-xl'>TaskManager</span>
        {user ? (
            <div className='space-x-4'>
                {user.role === 'admin' && <Link to="/task/create">Add Task</Link>}
                <button onClick={onLogout}>Logout</button>
            </div>
        ) : (
            <Link to="/login">Login</Link>
        )}
    </nav>
  );
}
