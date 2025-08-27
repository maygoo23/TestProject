import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CompiledSchedule } from '@signage/shared';

export default function DisplayPlayer() {
  const { slug } = useParams();
  const [schedule, setSchedule] = useState<CompiledSchedule | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const load = async () => {
      const res = await axios.get(`/api/displays/${slug}/schedule`);
      setSchedule(res.data);
    };
    load();
    const interval = setInterval(load, 60000);
    return () => clearInterval(interval);
  }, [slug]);

  useEffect(() => {
    if (!schedule) return;
    const item = schedule.items[index];
    const t = setTimeout(() => {
      setIndex((index + 1) % schedule.items.length);
    }, item.durationMs);
    return () => clearTimeout(t);
  }, [schedule, index]);

  if (!schedule) return <div className="text-white">Loading...</div>;
  const item = schedule.items[index];
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center text-white">
      {item.type === 'MEDIA' ? (
        <img src={item.src} className="max-h-full max-w-full" />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: item.src }} />
      )}
    </div>
  );
}
