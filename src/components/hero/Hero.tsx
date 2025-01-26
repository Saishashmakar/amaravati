function Hero() {
  return (
    <div className="relative h-[70vh] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30">
          <div className="container mx-auto h-full flex items-center px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Prime Properties in Amaravati Capital Region
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Your trusted source for real estate market insights and property investments
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Explore Properties
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition duration-300">
                  Market Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
