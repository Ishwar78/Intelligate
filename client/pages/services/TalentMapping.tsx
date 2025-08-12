import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Map,
  Users,
  Target,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Award,
  Eye,
  Building,
  BarChart3,
  PieChart,
  LineChart,
  Globe,
  UserCheck,
  FileText,
  Lightbulb,
  Zap,
  Search
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import ServiceDropdown from "@/components/ServiceDropdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TalentMapping() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const benefits = [
    {
      title: "Strategic Workforce Planning",
      description: "Make informed decisions about hiring, expansion, and talent development",
      icon: Target,
      color: "blue"
    },
    {
      title: "Competitive Intelligence",
      description: "Understand your position in the talent market relative to competitors",
      icon: Eye,
      color: "purple"
    },
    {
      title: "Cost Optimization",
      description: "Optimize compensation packages based on real market data",
      icon: DollarSign,
      color: "green"
    },
    {
      title: "Risk Mitigation",
      description: "Identify potential talent gaps before they impact your business",
      icon: Award,
      color: "orange"
    }
  ];

  const useCases = [
    {
      title: "Market Expansion",
      description: "Planning to enter a new geography or market segment",
      scenario: "A fintech company expanding from Mumbai to Bangalore",
      insights: [
        "Available tech talent pool size",
        "Salary benchmarks for key roles",
        "Competition intensity analysis",
        "Best sourcing channels identified"
      ],
      outcome: "Successful expansion with 40% faster hiring and 15% lower costs",
      icon: Globe
    },
    {
      title: "Leadership Planning",
      description: "Succession planning and leadership development strategy",
      scenario: "Manufacturing company preparing for C-suite transitions",
      insights: [
        "Executive talent availability",
        "Leadership compensation trends",
        "Skill gap analysis",
        "Retention risk assessment"
      ],
      outcome: "Smooth leadership transition with internal promotions and external hires",
      icon: Users
    },
    {
      title: "Retention Strategy",
      description: "Understanding flight risk and retention opportunities",
      scenario: "IT services company facing high attrition",
      insights: [
        "Market movement patterns",
        "Compensation gap analysis",
        "Competitor hiring trends",
        "Exit interview insights"
      ],
      outcome: "25% reduction in attrition through targeted retention programs",
      icon: UserCheck
    }
  ];

  const reportFeatures = [
    {
      feature: "Talent Availability Heatmap",
      description: "Visual representation of talent density across locations and industries",
      icon: Map
    },
    {
      feature: "Salary Benchmarking",
      description: "Comprehensive compensation analysis for all role levels",
      icon: BarChart3
    },
    {
      feature: "Competitor Analysis",
      description: "Detailed insights into competitor hiring patterns and strategies",
      icon: Building
    },
    {
      feature: "Market Trends",
      description: "Emerging skill demands and future talent requirements",
      icon: TrendingUp
    },
    {
      feature: "Sourcing Strategy",
      description: "Recommended channels and approaches for talent acquisition",
      icon: Search
    },
    {
      feature: "Risk Assessment",
      description: "Identification of potential talent gaps and mitigation strategies",
      icon: Award
    }
  ];

  const metrics = [
    { label: "Markets Analyzed", value: "50+", icon: Globe },
    { label: "Companies Mapped", value: "500+", icon: Building },
    { label: "Roles Benchmarked", value: "1000+", icon: Users },
    { label: "Data Points", value: "10K+", icon: BarChart3 }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">


<Header />



      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
         
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
                <div className="relative p-1.5 sm:p-2 bg-gradient-to-br from-blue-900 to-red-600 rounded-lg sm:rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets%2F006b1d80f49744f8a88951a12aeaff7a%2Fffd6997b070949e7808ca68d4da19889?format=webp&width=800" 
                    alt="Intelligate Solutions Logo" 
                    className="h-6 w-6 sm:h-8 sm:w-8 filter brightness-0 invert"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-blue-900 leading-tight">Intelligate Solutions</span>
                  <span className="text-xs text-red-600 font-medium tracking-wider hidden sm:block">A GATEWAY OF INTELLIGENCE</span>
                </div>
              </Link>
            </div>
            
        
            <nav className="hidden lg:flex space-x-8 items-center">
              <Link to="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">About Us</Link>
              <ServiceDropdown currentPath={location.pathname} />
              <Link to="/industries" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Industries</Link>
              <Link to="/openings" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Current Openings</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Contact</Link>
              <Link to="/get-quote" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Get Quote</Link>
            </nav>
            
            <div className="flex items-center gap-2">
            
              <a 
                href="https://wa.me/919971019767" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-1 sm:gap-2 transition-colors text-sm sm:text-base"
              >
                <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">WA</span>
              </a>
              
           
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!mobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
      
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link to="/" className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link to="/services" className="text-gray-900 bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to="/industries" className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
              <Link to="/openings" className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Current Openings</Link>
              <Link to="/contact" className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link to="/get-quote" className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Get Quote</Link>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section with Slider */}
      <section className="relative text-white">
        <HeroSlider 
          images={[
"/images/img.jpg",
"/images/ind.webp"
          ]}
          height="h-[500px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-on-scroll">
              Visualize the Talent Landscape Before You Hire
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto animate-on-scroll">
              We create strategic talent maps with insights on availability, salary benchmarks, and competitor movements.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="text-center animate-on-scroll">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">{metric.value}</div>
                  <div className="text-gray-700 font-medium">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Talent Mapping Helps You Win */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">How Talent Mapping Helps You Win</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Strategic insights that transform how you approach talent acquisition and workforce planning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="professional-card animate-on-scroll text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full bg-${benefit.color}-100 flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-8 w-8 text-${benefit.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-700 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">Strategic Use Cases</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Real-world applications of talent mapping across different business scenarios
            </p>
          </div>
          
          <div className="space-y-12">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card key={index} className="professional-card animate-on-scroll">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{useCase.title}</h3>
                            <p className="text-gray-600">{useCase.description}</p>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">Scenario:</h4>
                          <p className="text-blue-800 text-sm">{useCase.scenario}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Key Insights Delivered:</h4>
                        <div className="space-y-3">
                          {useCase.insights.map((insight, insightIndex) => (
                            <div key={insightIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{insight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5" />
                          Business Outcome
                        </h4>
                        <p className="text-green-800 font-medium">{useCase.outcome}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sample Report Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">What's Inside Our Talent Maps</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Comprehensive analysis across multiple dimensions to give you complete market visibility
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reportFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="professional-card animate-on-scroll">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.feature}</h3>
                        <p className="text-gray-700 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Sample Report CTA */}
          <div className="mt-16 text-center animate-on-scroll">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">See a Sample Report</h3>
                <p className="text-gray-700 mb-6">
                  Get a glimpse of our detailed talent mapping reports with anonymized data and insights
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Request Sample Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Map Your Talent Landscape?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Get strategic insights that will transform your hiring approach and competitive positioning in the talent market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-quote">
                <Button size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-gray-100">
                  Get Talent Mapping Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Schedule Strategy Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">

            {/* Quick Links */}
            <div className="animate-on-scroll">
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <nav className="space-y-3">
                <Link to="/" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Home</Link>
                <Link to="/about" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Company Profile</Link>
                <Link to="/about" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Life @ Intelligate</Link>
                <Link to="/" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Disclaimer</Link>
                {/* <Link to="#" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Site Map</Link> */}
              </nav>
            </div>

            {/* Enquiry Details */}
            <div className="animate-on-scroll">
              <h4 className="text-xl font-bold mb-6 text-white">Enquiry details</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-orange-400 font-semibold">Corporate enquiry:</span>
                  <a href="mailto:admin@intelligatesolution.com" className="block text-gray-300 hover:text-white transition-colors">
                   admin@intelligatesolution.com
                  </a>
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">Corporate communication:</span>
                  <a href="mailto:akhil.kaushik@intelligatesolution.com" className="block text-gray-300 hover:text-white transition-colors">
                    akhil.kaushik@intelligatesolution.com
                  </a>
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">Join Us:</span>
                  <a href="mailto:admin@intelligatesolution.com" className="block text-gray-300 hover:text-white transition-colors">
                    admin@intelligatesolution.com
                  </a>
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">Opportunity with premium clients:</span>
                  <a href="mailto:akhil.kaushik@intelligatesolution.com" className="block text-gray-300 hover:text-white transition-colors">
                    akhil.kaushik@intelligatesolution.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="animate-on-scroll">
              <h4 className="text-xl font-bold mb-6 text-white">Contact us</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-orange-400 font-semibold block mb-1">Contact no:</span>
                  <a href="tel:+917042923666" className="text-gray-300 hover:text-white transition-colors">+91 9650923366/
+91 9971019767</a>
                </div>
                <div>
                  <span className="text-orange-400 font-semibold block mb-1">Address:</span>
                   <div>
                    <p className="font-medium">Noida Office :</p>
                    <p className="text-sm">   D-80, Sector 2</p>
                  </div>
                  <div>
                    <p className="font-medium">Rohtak Office :</p>
                    <p className="text-sm">155/29 Ram Gopal Colony, Delhi Road</p>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://www.facebook.com/Intelligate.Solution/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* <a
                    href="https://twitter.com/intelligatesolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a> */}
                  <a
                    href="https://www.linkedin.com/in/akhil-kaushik-7928471b?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/919971019767"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                  </a>
                  {/* <a
                    href="https://instagram.com/intelligatesolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">© Intelligate HR 2024 | All Rights Reserved</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919971019767" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50 animate-bounce"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
