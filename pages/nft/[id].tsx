import React from 'react'

const NFTDropPage = () => {
  return (
    <div className="flex h-screen flex-col">
      {/* Left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500">
        <div>
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://links.papareact.com/8sg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">Bored Ape</h1>
            <h2 className="text-xl text-gray-300">
              A Collection of Bored Apes who live & breathe React!
            </h2>
          </div>
        </div>
      </div>

      {/* Right */}
      <div></div>
    </div>
  )
}

export default NFTDropPage
