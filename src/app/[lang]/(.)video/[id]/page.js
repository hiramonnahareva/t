import Modal from '@/app/component/Modal';
import React from 'react';
import Image from 'next/image';
import avatar from '../../../assets/avatar.png';
import videos from "@/app/data/videos"; // Assuming this file contains dictionaries for different languages
import { getDictionary } from '../../dictionaries'; 

const page = async ({ params: { id, lang } }) => {
  // Fetch the video data by ID
  const video = videos.find(data => data.id == id);

  // Fetch dictionaries based on the provided `lang` parameter
  const dictionaries = await getDictionary(lang);
  
  // Fallback to English if lang is not found 

  return (
    <Modal>
      <div className="container mx-auto px-4 py-4 my-10 "> 
        <main className="flex flex-col lg:flex-row gap-6"> 
          <div className="lg:w-3/4">
            <div className="relative">
              <iframe 
                src={`https://www.youtube.com/embed/${video.videoId}`} 
                title="YouTube video player" 
                frameBorder="0"
                className="w-full aspect-video h-[500px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex items-center space-x-4">
                  <button className="bg-color-gray hover:bg-opacity-80 rounded-full p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
                      </path>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button> 
                  <div className="bg-color-purple text-white px-2 py-1 rounded text-sm">LIVE</div>
                  <span className="text-sm">46:02</span>
                  <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm">
                    {dictionaries.donate}
                  </button>
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-bold mt-4">
              {video.title}
            </h1>
            <div className="flex items-center space-x-4 mt-2">
              <Image width={300} height={300} src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{video.description}</p>
              </div>
              <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
                {dictionaries.subscribe}
              </button>
            </div>
          </div>
          <div className="lg:w-1/4">
            <h2 className="text-xl font-semibold mb-4">{dictionaries.youMayLike}</h2>
            <div className="space-y-4">
              {videos.slice(0, 3).map((suggestedVideo, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <Image 
                    width={300} 
                    height={300} 
                    src={suggestedVideo.thumbnail} 
                    alt={suggestedVideo.title} 
                    className="w-30 h-20 rounded object-cover" 
                  />
                  <div>
                    <h3 className="font-semibold">{suggestedVideo.title}</h3>
                    <p className="text-sm text-gray-400">{suggestedVideo.channel}</p>
                    <p className="text-sm text-gray-400">{suggestedVideo.views} {dictionaries.views}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main> 
      </div>
    </Modal>
  );
};

export default page;
