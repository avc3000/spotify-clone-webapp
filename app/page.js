"use client"

import { useState } from 'react';
import Sidebar from "@/components/Sidebar";
import Header from './../components/Header';
import ListAlbums from '@/components/ListAlbums';

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="bg-spotify-black min-h-screen text-gray-300">
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className='pt-28 md:pl-72 p-8'>
        <ListAlbums title="Spotify Playlist" />
        <ListAlbums title="Dormir" />
        <ListAlbums title="Enfoque" />
        <ListAlbums title="Estado de Ánimo" />
      </div>
    </div>
  )
}
