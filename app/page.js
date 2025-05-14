"use client"
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Grid from '@/components/Grid';
import Button from '@/components/Button';
import Modal from '@/components/Modal';


function App() {
  const [avatars, setAvatars] = useState([]);
  const [Open, setOpen] = useState(false);

  useEffect(() => {
    fetch('https://reqres.in/api/users?per_page=3', {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_REQRES_API_KEY,
      },
    })
      .then(res => res.json())
      .then(data => setAvatars(data.data))
      .catch(err => console.error('API error:', err));
  }, []);

  return (
    <div className=" bg-gray-50 p-6 h-[100%]">
      <Header username="Shubhranshu" />
      <Grid avatars={avatars} />
      <div className="flex flex-col items-center justify-center pt-[5vh]">
        <Button onClick={() => setOpen(true)} />
      </div>
      
        {Open && <div className='flex flex-col items-center justify-center pt-[5vh] h-[100%]'> 
          {Open && <Modal onClose={() => setOpen(false)} />}
        </div>}
      
    </div>
  );
}

export default App;
