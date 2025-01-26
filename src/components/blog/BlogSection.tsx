function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Investment Opportunities in Amaravati",
      excerpt: "Discover the best areas for real estate investment in the capital region",
      author: "John Doe",
      date: "2024-01-20",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Real Estate Market Trends 2024",
      excerpt: "Analysis of current market trends and future predictions",
      author: "Jane Smith",
      date: "2024-01-19",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Guide to Property Registration",
      excerpt: "Step-by-step guide to property registration in Amaravati",
      author: "Mike Johnson",
      date: "2024-01-18",
      image: "https://images.unsplash.com/photo-1560449752-09a6fabf5a8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
            <p className="text-gray-600 mt-2">Expert insights and guides about real estate</p>
          </div>
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
            View All Posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{blog.author}</span>
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
