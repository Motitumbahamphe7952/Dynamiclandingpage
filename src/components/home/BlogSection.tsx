import HeartBackground from "./Heart";

import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    date: "9 January",
    readTime: "3 min read",
    title:
      "The Future of UI/UX Design in the Age of AI: How Tools Like ChatGPT and DeepSeek Are Reshaping User Interaction.",
    description:
      "As artificial intelligence continues to evolve, tools like ChatGPT and DeepSeek are revolutionizing how designers approach user experience. ChatGPT allows...",
  },
  {
    id: 2,
    date: "10 January",
    readTime: "4 min read",
    title:
      "How Motion Design is Changing the Way We Interact with Applications.",
    description:
      "Animations and micro-interactions are becoming central in creating immersive experiences for users. Learn how motion design enhances usability...",
  },
  {
    id: 3,
    date: "11 January",
    readTime: "5 min read",
    title: "Design Thinking: The Framework Behind Human-Centered Innovation.",
    description:
      "From empathy to prototyping, design thinking is a core part of digital product success. Discover its key phases and tools...",
  },
  {
    id: 4,
    date: "12 January",
    readTime: "3 min read",
    title: "Neumorphism vs. Glassmorphism: UI Design Trends Compared.",
    description:
      "Two modern design trends explained — when to use them, and how they impact user engagement and visual clarity...",
  },
];

const BlogSection = () => {
  return (
    <div className="relative isolate min-h-screen bg-transparent">
      {/* Heart Background */}
      <HeartBackground className="mt-40 overflow-hidden " />

      {/* Foreground Content */}
      <section className="relative z-10 py-16 max-w-[1130px] mx-auto px-4">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row gap-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 md:w-[555px]">
            Insights & Innovation:{" "}
            <span className="text-[#4682B4]">Our Blogs</span>
          </h2>
          <p className="text-gray-600 text-[18px] md:w-[600px]">
            <strong>Stay ahead of the curve</strong> with expert insights,
            industry trends, and tech innovations. From software development
            tips to the future of AI, our blog shares the knowledge that drives
            digital transformation.
          </p>
        </div>

        {/* Button */}
        <button className="mb-6 text-xl font-semibold flex items-center gap-2 hover:cursor-pointer transition whitespace-nowrap">
          View More <MoveRight className="w-5 h-5 inline-block mt-2" />
        </button>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="group p-8 rounded-2xl flex flex-col md:flex-row items-start justify-between 
              shadow-md hover:shadow-2xl transition duration-300 ease-in-out
              bg-transparent backdrop-blur-md border border-white/20 hover:border-[#4682B4]/40 hover:scale-[1.01]"
          >
            {/* Left Section - Time */}
            <div className="mb-4 md:mb-0 md:w-[180px] flex flex-col gap-1 text-sm md:items-start items-center">
              <span className="text-[#4682B4] text-lg font-bold tracking-wide">
                {post.readTime}
              </span>
              <span className="text-[#666666] text-[15px]">{post.date}</span>
            </div>

            {/* Center Section - Title & Description */}
            <div className="md:w-[670px] w-full md:px-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 group-hover:text-[#4682B4] transition">
                {post.title}
              </h3>
              <p className="text-[15px] text-gray-700 leading-relaxed">
                {post.description}
              </p>
            </div>

            {/* Right Section - Learn More Link */}
            <Link
              to="#"
              className="mt-4 md:mt-0 text-[18px] text-[#333] hover:text-[#4682B4] transition font-semibold underline underline-offset-4 decoration-[#4682B4]/30"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>

      </section>
    </div>
  );
};

export default BlogSection;
