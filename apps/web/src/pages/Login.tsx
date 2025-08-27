import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('/api/auth/login', { email, password });
    nav('/');
  };
  return (
    <div className="p-4 max-w-sm mx-auto">
      <form className="space-y-2" onSubmit={submit}>
        <input className="border p-2 w-full" value={email} onChange={e => setEmail(e.target.value)} placeholder="email"/>
        <input className="border p-2 w-full" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password"/>
        <button className="bg-blue-500 text-white px-4 py-2" type="submit">Login</button>
      </form>
    </div>
  );
}
