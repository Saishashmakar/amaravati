function AboutUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Leading Real Estate Agency in Amaravati Capital Region
            </h2>
            <p className="text-gray-600 mb-6">
              With over 15 years of experience in the real estate market, we've helped thousands of clients find their perfect property. Our deep understanding of the Amaravati Capital Region market makes us your ideal partner in real estate.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-gray-600">Properties Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">10000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">29</div>
                <div className="text-gray-600">Locations</div>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Learn More About Us
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
              alt="Our Office" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-800">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
