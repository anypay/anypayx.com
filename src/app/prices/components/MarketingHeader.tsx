export default function MarketingHeader() {
  return (
    <div className="bg-[#111] border-b border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text  bg-[#111] text-white">
          Real-Time Cryptocurrency Price Feed API
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-400">
          Get accurate, real-time cryptocurrency prices for your applications.
          Built for developers, trusted by businesses.
        </p>
        {/*
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#developer-section" 
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            View Documentation
          </a>
          <a 
            href="/auth/register" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors"
          >
            Get Started Free
          </a>
        </div>
        */}
      </div>
    </div>
  )
} 