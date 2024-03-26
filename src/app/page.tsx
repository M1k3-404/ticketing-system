"use client"

import { NextUIProvider, Tabs, Tab } from "@nextui-org/react";
import Carousel from "./ui/homepage/carousel";
import EventCard from "./ui/event-card";
import { useState } from "react";
import Paginations from "./ui/homepage/pagination";

const images = [
  {
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Movie 01",
    type: "movie",
    description: "01 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },

  {
    src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Movie 02",
    type: "movie",
    description: "02 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },

  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Event 01",
    type: "event",
    description: "03 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },

  {
    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Event 02",
    type: "event",
    description: "04 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },

  {
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Movie 01",
    type: "movie",
    description: "01 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },

  {
    src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Movie 02",
    type: "movie",
    description: "02 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },

  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Event 01",
    type: "event",
    description: "03 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },

  {
    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Event 02",
    type: "event",
    description: "04 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
]

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(images.length / itemsPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <NextUIProvider>
      <main className="flex min-h-screen bg-cstm-ghost-white flex-col justify-between">
        <div className="z-10 w-full justify-between text-sm">
          <p className="text-cstm-onyx text-5xl font-semibold mt-6 mx-10">Good Morning!</p>

          {/* Carousel */}
          <Carousel images={images} />

          {/* Banner */}
          <div className="bg-black/90 w-full mx-auto h-64 mt-16 shadow-xl">
            <p className="text-cstm-ghost-white text-7xl font-bold text-left mx-80 pt-16">Discover exciting events near You!</p>
            <p className="text-cstm-ghost-white text-xl text-left px-80 pt-5">Book tickets for Movies and Concerts online!</p>
          </div>

          {/* Event Card */}
          <div className="bg-transparent mx-auto mb-20 mt-16 w-2/3"> 
            <p className="text-cstm-onyx text-4xl font-semibold">Events</p>
            <Tabs variant="solid" size="lg" radius="md" className="w-full mx-auto mt-10">
              <Tab key="1" title="All Events" className="text-lg p-5 m-1">
                <div className="grid grid-cols-3 gap-10 mt-5 mx-auto w-full">
                  {currentItems.map((image, index) => (
                    <EventCard event={image} key={index} />
                  ))}
                </div>
                <div className="mt-5 flex justify-end">
                  <Paginations totalPages={totalPages} paginate={paginate} />
                </div>
              </Tab>

              <Tab key="2" title="Events" className="text-lg p-5 m-1">
                <div className="grid grid-cols-3 gap-10 mt-5 mx-auto w-full">
                  {images.map((image, index) => {
                    if (image.type === "movie") return null;
                    return <EventCard event={image} key={index} />;
                  })}
                </div>
              </Tab>

              <Tab key="3" title="Movies" className="text-lg p-5 m-1">
                <div className="grid grid-cols-3 gap-10 mt-5 mx-auto w-full">
                  {images.map((image, index) => {
                    if (image.type === "event") return null;
                    return <EventCard event={image} key={index} />;
                  })}
                </div>
              </Tab> 
            </Tabs>
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
