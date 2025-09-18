import { ChevronRight } from "lucide-react";

const BlogSection: React.FC = () => {
  const posts = [
    {
      title: "The Future of AI in Healthcare",
      date: "August 15, 2024",
      excerpt:
        "Explore how AI is revolutionizing diagnostics, personalized medicine, and patient care to create a smarter healthcare system.",
      image: "https://placehold.co/400x250/303030/white?text=AI+in+Healthcare",
    },
    {
      title: "Building Scalable AI Infrastructure",
      date: "July 28, 2024",
      excerpt:
        "A deep dive into the best practices for developing and deploying robust and scalable AI models in a cloud-native environment.",
      image: "https://placehold.co/400x250/303030/white?text=AI+Infrastructure",
    },
    {
      title: "Ethical AI: A Framework for Responsible Development",
      date: "July 10, 2024",
      excerpt:
        "Learn about the critical principles and frameworks for building AI systems that are fair, transparent, and accountable.",
      image: "https://placehold.co/400x250/303030/white?text=Ethical+AI",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Latest Insights & News
          </h2>
          <p className="text-gray-400 mt-2">
            Stay up-to-date with our latest research, articles, and case
            studies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-green-500/20 transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-400 text-sm">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="flex items-center justify-center text-green-400 font-semibold hover:text-green-500 transition-colors duration-200"
          >
            View All Insights
            <ChevronRight size={18} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
