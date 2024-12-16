import React from "react";
import { Home, Users, ShoppingCart, BookOpen } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Dentadeel</span>
          </div>
          <div className="space-x-4">
            <a href="/home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="/features" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
            <a href="join" className="text-gray-700 hover:text-blue-600">
              Join
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-grow container mx-auto px-4 py-16 grid md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Empowering Egyptian Dental Professionals
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            All-in-one digital platform with free tools, trusted connections,
            and marketplace solutions
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Join Now
            </button>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-center"></div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Home className="w-12 h-12 text-blue-600" />,
                title: "Professional Profiles",
                description:
                  "Create and manage your professional dental profile",
              },
              {
                icon: <Users className="w-12 h-12 text-blue-600" />,
                title: "Networking",
                description: "Connect with dental professionals across Egypt",
              },
              {
                icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
                title: "Marketplace",
                description: "Buy and sell dental equipment and services",
              },
              {
                icon: <BookOpen className="w-12 h-12 text-blue-600" />,
                title: "Education",
                description: "Access continuous learning resources",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Dentadeel. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
