"use client"

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Code, Shield, Zap, Database, Globe, Cpu, X } from 'lucide-react';

const Blog = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPost(null), 300); // Delay to allow animation
  };

  const blogPosts = [
    {
      id: 1,
      title: "Why Your Website Speed Matters (And How I Make It Lightning Fast)",
      excerpt: "When your website loads slowly, potential customers leave. I help businesses increase their website speed by up to 300%, which means more visitors stay, explore your services, and ultimately become paying customers.",
      fullContent: "Picture this: a potential client finds your website through Google, but it takes 8 seconds to load. By the time your homepage appears, they've already clicked away to your competitor. This scenario costs businesses thousands of dollars in lost revenue every day. Website speed isn't just a technical detail – it's a crucial business asset that directly impacts your bottom line. When I optimize a website's performance, I'm essentially opening the floodgates for more customer engagement and conversions. Through strategic improvements like image optimization, streamlined code, and smart loading techniques, I can reduce your website's loading time from several seconds to under 2 seconds. This improvement typically results in 25-30% higher conversion rates and significantly better search engine rankings. For my clients, this translates to more leads, more sales, and a competitive edge in their market. Fast websites build trust, improve user experience, and signal professionalism to potential customers.",
      category: "Website Performance",
      readTime: "3 min read",
      date: "Dec 15, 2024",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500/20 to-orange-500/20",
      tags: ["Speed", "Performance", "Conversions", "Business Growth"]
    },
    {
      id: 2,
      title: "Keeping Your Business Data Safe: My Approach to Website Security",
      excerpt: "Data breaches can destroy a business overnight. I implement bank-level security measures to protect your website and customer information, giving you and your clients complete peace of mind.",
      fullContent: "In today's digital landscape, a single security breach can cost a small business everything – their reputation, customer trust, and sometimes their entire operation. That's why I treat every website security project as if I'm protecting my own family's business. When I secure a website, I'm not just adding technical safeguards; I'm building a fortress around your business assets. I implement multiple layers of protection: secure user authentication (think of it as a sophisticated digital lock), real-time monitoring systems that alert us to any suspicious activity, and encrypted data transmission that makes your information unreadable to hackers. For e-commerce sites, I ensure payment processing meets the strictest industry standards, so your customers feel completely safe sharing their payment information. I also set up automated backups and recovery systems, meaning even in the worst-case scenario, your business can be back online quickly. My security approach has helped dozens of businesses maintain 100% uptime and zero security incidents, allowing them to focus on growing their business instead of worrying about digital threats.",
      category: "Security",
      readTime: "4 min read",
      date: "Dec 10, 2024",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500/20 to-teal-500/20",
      tags: ["Security", "Data Protection", "Trust", "Peace of Mind"]
    },
    {
      id: 3,
      title: "Making Your Website Handle More Customers Without Breaking",
      excerpt: "As your business grows, your website needs to grow with it. I build scalable solutions that handle traffic spikes effortlessly, ensuring you never lose a sale due to technical limitations.",
      fullContent: "Imagine your business gets featured in a major publication or goes viral on social media. Suddenly, thousands of potential customers are trying to visit your website at once. Will it handle the surge, or will it crash just when you need it most? This scenario keeps many business owners awake at night, but it doesn't have to. I specialize in building websites that gracefully handle growth – from 100 visitors to 10,000 visitors without missing a beat. Think of it like designing a restaurant that can quickly add more tables when there's a sudden rush of customers. I optimize databases (your website's filing system) to find information quickly, even when there's a lot of it. I also implement smart caching systems that remember frequently requested information, reducing the workload on your server. For growing businesses, I set up monitoring systems that track your website's performance and automatically scale resources when needed. This means during your busiest sales periods, product launches, or marketing campaigns, your website will perform flawlessly, capturing every potential sale and ensuring every visitor has a smooth experience.",
      category: "Scalability",
      readTime: "3 min read",
      date: "Dec 5, 2024",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500/20 to-purple-500/20",
      tags: ["Growth", "Scalability", "Reliability", "Business Success"]
    },
    {
      id: 4,
      title: "Future-Proofing Your Website: Staying Ahead of Digital Trends",
      excerpt: "Technology changes rapidly, but your website doesn't have to become outdated. I use cutting-edge tools and techniques to ensure your site remains modern, competitive, and effective for years to come.",
      fullContent: "In the fast-paced digital world, yesterday's cutting-edge website can become tomorrow's outdated liability. That's why I don't just build websites for today – I build them for the future. When I develop a website, I use the latest, most reliable technologies that major companies like Netflix and Airbnb trust for their platforms. This isn't about using fancy technology for its own sake; it's about ensuring your website remains fast, secure, and competitive as the digital landscape evolves. I implement modern development practices that make your website easier to update, more reliable, and better positioned to integrate with new tools and services as your business grows. For example, I build websites that easily connect with new marketing tools, payment processors, or customer management systems you might want to add later. I also ensure your website works perfectly on all devices – from smartphones to tablets to desktop computers – and stays compatible with new devices as they emerge. My forward-thinking approach means you won't need expensive rebuilds every few years. Instead, your website grows and adapts with your business and the changing digital world.",
      category: "Innovation",
      readTime: "3 min read",
      date: "Nov 28, 2024",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500/20 to-pink-500/20",
      tags: ["Future-Proof", "Modern Tech", "Innovation", "Competitive Edge"]
    },
    {
      id: 5,
      title: "Choosing the Right Foundation: How I Architect Websites for Long-Term Success",
      excerpt: "Every successful building needs a solid foundation. I help businesses choose the right technical architecture that supports growth, reduces costs, and adapts to changing needs.",
      fullContent: "Building a website is like constructing a house – the foundation determines everything that comes after. Choose wrong, and you'll face expensive renovations down the road. Choose right, and you have a solid base for unlimited growth. When clients come to me, they often ask whether they need a simple website or a complex system with multiple components. My job is to understand their business goals and recommend the architecture that best serves both their current needs and future ambitions. For a local restaurant, a streamlined, single-system approach might be perfect – everything in one place, easy to manage, cost-effective to maintain. But for a growing e-commerce business that plans to expand internationally, I might recommend a more flexible, modular approach that can easily add new features, handle multiple currencies, and integrate with various shipping providers. I evaluate factors like your team size, technical expertise, growth projections, and budget to recommend the perfect fit. My architectural decisions have helped startups save thousands in development costs while positioning them for rapid scaling, and helped established businesses reduce operational complexity while improving performance. The right foundation today prevents expensive rebuilds tomorrow.",
      category: "Strategy",
      readTime: "4 min read",
      date: "Nov 20, 2024",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-indigo-500/20 to-blue-500/20",
      tags: ["Strategy", "Planning", "Architecture", "Long-term Success"]
    },
    {
      id: 6,
      title: "Exploring Blockchain: How New Technology Can Benefit Your Business",
      excerpt: "Blockchain isn't just cryptocurrency – it's a revolutionary technology that can improve transparency, security, and efficiency in various business operations. I help forward-thinking companies explore these opportunities.",
      fullContent: "When most people hear 'blockchain,' they think cryptocurrency and complex technical jargon. But blockchain technology offers practical business benefits that go far beyond digital currencies. Think of blockchain as an unchangeable digital ledger that multiple parties can trust without needing a middleman. This technology can revolutionize how businesses handle contracts, verify authenticity, and build customer trust. For example, I've helped companies create systems where customers can verify the authenticity and origin of products by simply scanning a QR code. This is particularly valuable for luxury goods, organic foods, or handmade items where authenticity matters. In supply chain management, blockchain can track products from creation to delivery, providing complete transparency that customers increasingly demand. For service-based businesses, smart contracts can automate payment releases when specific conditions are met, reducing disputes and administrative overhead. I also develop decentralized applications that give businesses new ways to engage with customers and create value. While not every business needs blockchain technology today, understanding its potential helps forward-thinking entrepreneurs identify opportunities to gain competitive advantages, reduce costs, and build stronger customer relationships through increased transparency and trust.",
      category: "Emerging Tech",
      readTime: "4 min read",
      date: "Nov 15, 2024",
      icon: <Globe className="w-6 h-6" />,
      color: "from-cyan-500/20 to-blue-500/20",
      tags: ["Blockchain", "Innovation", "Trust", "Competitive Advantage"]
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 relative" id="blog">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Business Insights & Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-primary">
            Discover how smart technology decisions can transform your business. 
            Learn practical strategies to boost performance, increase security, and drive growth.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-[var(--secondary)] rounded-2xl p-6 border border-primary/20 backdrop-blur-md hover:border-primary/40 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${post.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="text-primary">{post.icon}</div>
                    <span className="text-sm text-primary font-semibold">{post.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-white transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed text-primary">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <button 
                    onClick={() => openModal(post)}
                    className="flex items-center gap-1 text-primary hover:text-white transition-all duration-300 text-sm font-semibold group-hover:translate-x-1 bg-transparent border-none cursor-pointer"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center">
          <button className="bg-primary/10 hover:bg-primary hover:text-black text-primary px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 border border-primary/30 hover:border-primary font-semibold">
            View All Blog Posts
            <ArrowRight className="w-5 h-5 inline-block ml-2" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-[var(--secondary)] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-primary/20 shadow-2xl modal-content">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[var(--secondary)]/95 backdrop-blur-md border-b border-primary/20 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {selectedPost && (
                  <>
                    <div className="text-primary">{selectedPost.icon}</div>
                    <span className="text-primary font-semibold">{selectedPost.category}</span>
                  </>
                )}
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-primary/20 rounded-full"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
              {selectedPost && (
                <>
                  {/* Post Meta */}
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>

                  {/* Post Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    {selectedPost.title}
                  </h2>

                  {/* Post Content */}
                  <div className="prose prose-lg max-w-none mb-8 text-primary">
                    <p className="text-gray-300 leading-relaxed text-lg text-primary">
                      {selectedPost.fullContent}
                    </p>
                  </div>

                  {/* Post Tags */}
                  <div className="flex flex-wrap gap-3">
                    {selectedPost.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
