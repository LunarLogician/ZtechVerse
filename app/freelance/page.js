"use client"

import React, { useState } from 'react';
import { ExternalLink, Star, ArrowLeft, Code, Smartphone, Globe, Database } from 'lucide-react';

const FreelancePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const platforms = [
    {
      id: 1,
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/zubairm35",
      icon: "💼",
      description: "Top Rated Plus freelancer specializing in full-stack web development",
      rating: "100%",
      projects: "15+",
      specialties: ["React.js", "Node.js", "MERN Stack", "Web3"],
      color: "from-green-500/20 to-emerald-500/20",
      features: [
        "⭐ Top Rated Plus Badge",
        "⭐ 100% Job Success Score", 
        "⭐ Free Initial Consultation",
        "⭐ Long-term Client Relationships"
      ]
    },
    {
      id: 2,
      name: "Fiverr", 
      url: "https://www.fiverr.com/s/GzrYaEa",
      icon: "🎯",
      description: "Level 2 seller offering premium web development gigs",
      rating: "5.0",
      projects: "25+",
      specialties: ["Frontend", "Backend", "Full Stack", "API Development"],
      color: "from-blue-500/20 to-cyan-500/20",
      features: [
        "⭐ Level 1 Seller",
        "⭐ 5-Star Average Rating",
        "⭐ Free Project Assessment",
        "⭐ Flexible Meeting Times"
      ]
    }
  ];

  const services = [
  {
    icon: "🌐",
    title: "Full Stack Web Development",
    description: "End-to-end web solutions using MERN Stack, Next.js, and modern tools. Includes UI design, backend, and deployment.",
    price: "Starting at $150"
  },
  {
    icon: "📱",
    title: "Responsive Frontend Development",
    description: "Pixel-perfect, mobile-friendly interfaces using React.js, Tailwind CSS, and Next.js for lightning-fast performance.",
    price: "Starting at $100"
  },
  {
    icon: "🗄️",
    title: "Secure Backend & API Development",
    description: "Robust RESTful APIs with JWT authentication, MongoDB integration, and scalable Node.js backend architecture.",
    price: "Starting at $80"
  },
  {
    icon: "☁️",
    title: "Cloud Deployment & Integration",
    description: "Deploy your apps using Vercel, Render, or AWS with custom domain and secure HTTPS setup.",
    price: "Starting at $70"
  },
  {
    icon: "🧾",
    title: "Authentication System Integration",
    description: "Email/password login systems with JWT, bcrypt, MongoDB, and protected routes setup.",
    price: "Starting at $60"
  }
];


  const testimonials = [
    {
      name: "Adam",
      platform: "Fiverr",
      rating: 5,
      comment: "Muhammad delivered an exceptional e-commerce platform. His attention to detail and communication throughout the project was outstanding."
    },
   
  ];

  return (
    <div className="min-h-screen text-[var(--text)] py-12 md:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-primary rounded-full animate-ping opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-50"></div>

      {/* Back Button */}
      <div className="max-w-6xl mx-auto relative z-10 mb-8">
        <button
          onClick={() => window.history.back()}
          className="   -ml-5 inline-flex items-center  hover:scale-105 transition-all duration-200 mt-10 "
        >
          <ArrowLeft size={18} />
          <span>Back to Portfolio</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto relative z-10 mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-6 glow-text">
            Book a Free Consultation
          </h1>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-primary">
            Ready to discuss your next project? Book a free consultation to explore how we can 
            bring your ideas to life with cutting-edge web technologies. No commitment required!
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="bg-[var(--secondary)] rounded-2xl p-6 md:p-8 border border-primary/20 backdrop-blur-md hover:border-primary/40 transition-all duration-300 group cursor-pointer"
              onMouseEnter={() => setHoveredCard(platform.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{platform.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary group-hover:glow-text transition-all duration-300">
                        {platform.name}
                      </h3>
                      <p className="text-gray-300 text-primary">{platform.description}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                  </div>
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary mb-3 text-primary">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.specialties.map((specialty) => (
                      <span key={specialty} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary mb-3 text-primary">Why Book With Me:</h4>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm text-primary">{feature}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass w-full text-center py-3 px-6 inline-block"
                >
                  <span className="flex items-center justify-center gap-2">
                    <ExternalLink size={18} />
                    Book Consultation on {platform.name}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto relative z-10 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 glow-text">
            Services I Offer
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[var(--secondary)] rounded-2xl p-6 border border-primary/20 backdrop-blur-md hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 text-3xl text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:glow-text transition-all duration-300 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-primary">
                {service.description}
              </p>
              <div className="text-primary font-semibold text-primary">
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto relative z-10 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 glow-text mt-20">
            Client Testimonials
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[var(--secondary)] rounded-2xl p-6 border border-primary/20 backdrop-blur-md hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic leading-relaxed text-primary">
                "{testimonial.comment}"
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">via {testimonial.platform}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto relative z-10 text-center mt-20 pt-20">
        <div className="bg-[var(--secondary)] rounded-2xl p-8 md:p-12 border border-primary/20 backdrop-blur-md">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 glow-text">
            Ready to Book Your Free Consultation?
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed text-primary">
            Let's schedule a meeting to discuss your project requirements and explore solutions. 
            Get expert advice and a project roadmap absolutely free - no strings attached!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.upwork.com/freelancers/zubairm35"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass px-8 py-3"
            >
              <span className="flex items-center justify-center gap-2">
                💼 Book Meeting on Upwork
              </span>
            </a>
            <a
              href="https://www.fiverr.com/s/GzrYaEa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass px-8 py-3"
            >
              <span className="flex items-center justify-center gap-2">
                🎯 Schedule Call on Fiverr
              </span>
            </a>
            <a
              href="mailto:zzubairahmed402@gmail.com"
              className="btn-glass px-8 py-3"
            >
              <span className="flex items-center justify-center gap-2">
                📧 Get Free Consultation
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancePage;
