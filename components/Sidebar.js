import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline'

import {
  HeartIcon,
  RssIcon,

} from '@heroicons/react/solid'
import { signOut, useSession } from 'next-auth/react'
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import useSpotify from '../hooks/useSpotify';

function Sidebar() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      })
    }
  }, [session, spotifyApi]);

  console.log(session);

  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide'>
      <div className='space-y-4'>
      <button className='flex items-center space-x-2 hover:text-white' onClick={() => signOut()}>
          <HomeIcon className='h-5 w-5'/>
          <p>Logout</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HomeIcon className='h-5 w-5'/>
          <p>Home</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <SearchIcon className='h-5 w-5'/>
          <p>Search</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <LibraryIcon className='h-5 w-5'/>
          <p>Your library</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900'></hr>

        <button className='flex items-center space-x-2 hover:text-white'>
          <PlusCircleIcon className='h-5 w-5'/>
          <p>Create Playlist</p>
        </button>
        
        <button className='flex items-center space-x-2 hover:text-white'>
          <HeartIcon className='h-5 w-5'/>
          <p>Liked Songs</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <RssIcon className='h-5 w-5'/>
          <p>Your episodes</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900'></hr>
        {playlists.map((playlist) => (
          <p key={playlist.id} className='cursor-pointer hover:text-white'>{playlist.name}</p>

        ))}
        
      </div>
    </div>

    
    
  )
}

export default Sidebar
