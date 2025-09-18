const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Working with this team has been a game-changer for our business. Their AI solutions are top-notch and have significantly improved our workflow.",
      name: "Jane Doe",
      title: "CEO, Tech Corp",
      avatar: "https://placehold.co/100x100/A0E6B0/000000?text=JD",
    },
    {
      quote:
        "The team's expertise in machine learning is unparalleled. They delivered a custom model that exceeded our expectations and drove real results.",
      name: "John Smith",
      title: "CTO, Innovate Inc.",
      avatar: "https://placehold.co/100x100/F0B0A0/000000?text=JS",
    },
    {
      quote:
        "Their clean code and seamless integration process made our project a breeze. The final product is robust, scalable, and beautifully designed.",
      name: "Emily White",
      title: "Product Manager, Apex Solutions",
      avatar: "https://placehold.co/100x100/A0B0F0/000000?text=EW",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 mt-2">
            Hear from those who have already transformed their business with our
            solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-950 rounded-xl shadow-lg border border-gray-800"
            >
              <p className="text-lg italic text-gray-300 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-green-500"
                />
                <div>
                  <h4 className="font-semibold text-green-400">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
