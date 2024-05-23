'use client';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute top-0 left-0 h-full w-full pattern-wavy pattern-gray-500 pattern-bg-white 
                   pattern-size-32 pattern-opacity-20 z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
        <GameBoard />
      </div>
    </div>
  );
}

// gameboard component 🎮
function GameBoard() {
  const positionArray = [
    { x: 30, y: -150 },
    { x: 30, y: -330 },
    { x: 30, y: -510 },
    { x: 220, y: -510 },
    { x: 220, y: -330 },
    { x: 220, y: -150 },
    { x: 415, y: -150 },
    { x: 415, y: -330 },
    { x: 415, y: -150 },
  ];

  const [position, setPosition] = useState(positionArray[0]);

  function changePosition() {
    let length = positionArray.length;
    setPosition(positionArray[Math.floor(Math.random() * length)]);
  }

  function mathRandom() {
    return Math.floor(Math.random() * length);
  }

  setInterval(changePosition, 1500);

  const row = [
    <div key={0} className="flex flex-row">
      <div
        key={0}
        className="w-48 h-44 border-solid border-2 border-black"
      ></div>
      <div
        key={0}
        className="w-48 h-44 border-solid border-2 border-black"
      ></div>
      <div
        key={0}
        className="w-48 h-44 border-solid border-2 border-black"
      ></div>
    </div>,
  ];

  const rows = Array(3)
    .fill()
    .map((_, index) => <div key={index}>{row}</div>);

  return (
    <div>
      {rows}
      <CovidSprite position={position} />
    </div>
  );
}

// Covid sprite 🤦‍♀️
function CovidSprite({ position }: any) {
  return (
    <div
      className="absolute"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <img src="/Pufferfish-c.svg" alt="pufferfish" />
    </div>
  );
}
