export default function CtaSection() {
  return (
    <section className="py-16 px-4 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Explore Academic Excellence?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of students, researchers, and institutions using ScholarRank to make informed academic decisions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 font-medium">
            Sign Up Free
          </button>
          <button className="px-8 py-3 border border-white text-white rounded-md hover:bg-blue-700 font-medium">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
