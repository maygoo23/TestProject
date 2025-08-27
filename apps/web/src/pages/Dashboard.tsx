import { useEffect, useState } from 'react';
import axios from 'axios';

interface Display { id: number; name: string; slug: string; }

export default function Dashboard() {
  const [displays, setDisplays] = useState<Display[]>([]);
  useEffect(() => {
    axios.get('/api/displays').then(res => setDisplays(res.data));
  }, []);
  return (
    <div className="p-4 space-y-2">
      <h1 className="text-xl font-bold">Displays</h1>
      <ul>
        {displays.map(d => (
          <li key={d.id}>
            <a className="text-blue-600" href={`/display/${d.slug}`} target="_blank" rel="noreferrer">{d.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
