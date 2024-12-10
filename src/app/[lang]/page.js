import Image from "next/image";
import React from "react";

import videos from "@/app/data/videos";

import Link from "next/link";
import { getDictionary } from "./dictionaries";

export default async function page({ params }) {
  const { lang } = params || {};

  const dictionary = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-4">
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {dictionary.HEADER_TEXT}
          </h1>
          <p className="text-gray-400 mb-8">{dictionary.SUB_HEADER_TEXT}</p>
        </div>

        <div className="lg:col-span-2">
          <div className="relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/0VtVPk7Zv9c"
              title="YouTube video player"
              frameBorder="0"
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
              <div className="text-right">
                <span className="bg-color-purple text-white px-2 py-1 rounded text-sm">
                  {dictionary.COMINGSOON}
                </span>
              </div> 
              <div>
                <div>
                  <div className="text-4xl font-bold mb-2">{dictionary.Time}</div>
                  <p className="text-sm">{dictionary.BROADCAST_STARTS_IN}</p>
                </div>
                
              </div>
            </div> 
          </div>
          <p className="mt-2 text-sm text-gray-400">
                  {dictionary.BATTLE_DESCRIPTION}
                </p>
        </div>
      </main>

      <section className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">
            {dictionary.STREAMS_OF_THE_DAY}
          </h2>
          <a
            href="#"
            className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
          >
            {dictionary.View}
          </a>
        </div> 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`video/${video.id}`}
              className="rounded-lg overflow-hidden bg-color-gray"
            >
              <Image
                width={300}
                height={300}
                src={video.thumbnail}
                alt="Stream 1"
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <p className="font-semibold">{video.title}</p>
                <p className="text-sm text-gray-400">{video.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

// import { getDictionary } from './dictionaries';

// export default async function Page({ params }) {
//     const { lang } = params || {}; // Safely extract `lang` from `params`
//     if (!lang) {
//         return <div>Error: Language not specified</div>;
//     }

//     const dictionary = await getDictionary(lang);

//     return (
//         <div className="container mx-auto px-4 py-4">
//             <h1>{dictionary.COMINGSOON || 'Coming Soon'}</h1>
//         </div>
//     );
// }
