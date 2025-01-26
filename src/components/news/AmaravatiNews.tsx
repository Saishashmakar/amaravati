function AmaravatiNews() {
  const news = [
    {
      id: 1,
      title: "New Infrastructure Development in Amaravati",
      date: "2024-01-20",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1590644365607-1c5a8e13ad31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Real Estate Market Growth in Capital Region",
      date: "2024-01-19",
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "New Educational Institutions Coming to Amaravati",
      date: "2024-01-18",
      category: "Education",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Amaravati Updates</h2>
            <p className="text-gray-600 mt-2">Latest news and developments from the capital region</p>
          </div>
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
            View All Updates
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <div className="text-gray-600 text-sm">{new Date(item.date).toLocaleDateString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AmaravatiNews
