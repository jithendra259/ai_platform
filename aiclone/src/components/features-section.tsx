const features = [
  {
    title: "Comprehensive Rankings",
    description: "Our algorithm evaluates universities across multiple dimensions including research output, teaching quality, and international outlook.",
    icon: "📊"
  },
  {
    title: "Scholar Profiles",
    description: "Detailed profiles of millions of researchers with publication metrics, citations, and collaboration networks.",
    icon: "👨‍🎓"
  },
  {
    title: "Research Analytics",
    description: "Advanced tools to analyze research trends, impact factors, and emerging fields across disciplines.",
    icon: "🔍"
  },
  {
    title: "Institutional Comparisons",
    description: "Compare universities side-by-side across various metrics to find your best fit.",
    icon: "⚖"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Why Use ScholarRank?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-gray-700 border border-gray-700"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}