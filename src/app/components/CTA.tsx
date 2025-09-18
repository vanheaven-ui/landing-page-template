const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-green-500 text-gray-950 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">Ready to Transform Your Business?</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Let's discuss how our intelligent solutions can help you achieve your goals and stay ahead of the curve.
        </p>
        <button className="mt-8 px-8 py-4 text-lg font-bold bg-gray-950 text-green-400 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-200">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default CTASection