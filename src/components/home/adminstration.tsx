import { useState } from "react";

const Adminstration = () => {
  const [activeTab, setActiveTab] = useState("admin");

  const HeroSection = () => (
    <div className="flex flex-col items-center justify-center mb-5 px-4">
      <div className="text-center max-w-[600px] w-full font-poppins">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Engineers of Innovation, <br className="hidden sm:block" />
          Architects of <span className="text-[#4682B4]">Balance</span>.
        </h1>
      </div>
      <div className="text-center max-w-[575px] w-full font-poppins">
        <p className="text-base md:text-lg text-gray-600 mx-auto mb-8 leading-relaxed">
          Our services are designed to{" "}
          <span className="font-semibold text-gray-900">
            grow your business
          </span>{" "}
          while respecting the people behind the code.
        </p>
      </div>
    </div>
  );

  const ServiceTabs = () => {
    const tabs = [
      { id: "admin", label: "Administrative and Management" },
      { id: "development", label: "Development & Design" },
      { id: "marketing", label: "Marketing & SEO" },
    ];

    return (
      <div className="flex justify-center mb-12 px-4">
        <div className="inline-flex flex-wrap justify-center gap-4 border border-gray-300 rounded-full px-4 py-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#4682B4] text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const TeamGallery = () => {
    const getImages = () => {
      const businessImages = [
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop",
      ];
      const developmentImages = [
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      ];
      const marketingImages = [
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      ];

      switch (activeTab) {
        case "development":
          return developmentImages;
        case "marketing":
          return marketingImages;
        default:
          return businessImages;
      }
    };

    const images = getImages();

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* First small image */}
        <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-lg group">
          <img
            src={images[0]}
            alt="Team member"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Second small image */}
        <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-lg group">
          <img
            src={images[1]}
            alt="Team member"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Third tall image */}
        <div className="lg:row-span-2">
          <div className="relative h-64 sm:h-[544px] w-full rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={images[2]}
              alt="Team collaboration"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Bottom wide image */}
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={images[3]}
              alt="Team workspace"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <HeroSection />
        <ServiceTabs />
        <TeamGallery />
      </div>
    </div>
  );
};

export default Adminstration;
