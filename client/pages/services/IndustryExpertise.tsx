import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Car,
  Cpu,
  Zap,
  Pill,
  Home,
  Truck,
  Factory,
  Building,
  Award,
  Users,
  Target,
  CheckCircle,
  Search,
  GraduationCap,
  Users2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function IndustryExpertise() {
  const companies = [
    { name: "Wipro", color: "blue" },
    { name: "Teleperformance", color: "green" },
    { name: "Telus", color: "orange" },
    { name: "Concentrix", color: "purple" },
    { name: "Cognizant Technology Solutions", color: "red" },
    { name: "Aisin Automotive", color: "yellow" },
    { name: "Toyota Group", color: "gray" },
    { name: "FCC Clutch", color: "indigo" },
    { name: "Satyam Auto Components", color: "blue" },
    { name: "Agratas Energy Storage Solutions", color: "green" },
    { name: "Tata Enterprises", color: "orange" },
    { name: "Krishna Group (Krishna Maruti Limited & SKH)", color: "purple" },
  ];

  const successStories = [
    {
      industry: "Automotive",
      role: "VP - Manufacturing Operations",
      challenge: "Electric Vehicle transition expertise needed",
      solution:
        "Placed seasoned leader with 15+ years EV experience from Tesla supplier ecosystem",
      impact: "40% faster production ramp-up, reduced quality issues by 60%",
    },
    {
      industry: "Pharmaceuticals",
      role: "Head of Regulatory Affairs",
      challenge: "Complex USFDA compliance requirements",
      solution:
        "Recruited expert with direct USFDA inspection experience across 3 countries",
      impact: "Zero compliance violations, 25% faster drug approval timeline",
    },
    {
      industry: "ITES",
      role: "Chief Technology Officer",
      challenge: "Digital transformation in legacy systems",
      solution:
        "Identified CTO with proven track record in cloud migration at scale",
      impact: "50% infrastructure cost reduction, 3x faster deployment cycles",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

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
              Domain-Focused Hiring, Delivered with Precision
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto animate-on-scroll">
              We understand the nuances of each industry, enabling us to deliver
              talent that drives impact. From Automotive to Pharmaceuticals, our
              specialists recruit with domain precision.
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Cover */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Our Trusted Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              We are proud to serve leading companies across multiple industries,
              delivering exceptional talent solutions that drive business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => {
              return (
                <Card
                  key={index}
                  className="professional-card animate-on-scroll hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full bg-${company.color}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Building className={`h-8 w-8 text-${company.color}-600`} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {company.name}
                    </h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">Core Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <Search className="h-12 w-12 text-blue-900 mb-4 float-animation" />
                <CardTitle className="text-xl">Executive Search</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Premium talent acquisition for C-suite and senior leadership positions across industries. We identify and attract top-tier executives who drive organizational success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <Target className="h-12 w-12 text-red-600 mb-4 float-animation" />
                <CardTitle className="text-xl">Strategic Leadership Hiring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Specialized recruitment for strategic roles that shape business direction. We find leaders who align with your vision and drive transformational change.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4 float-animation" />
                <CardTitle className="text-xl">Lateral Hiring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Strategic mid-level recruitment for experienced professionals looking to advance their careers while filling critical skill gaps in your organization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <Building className="h-12 w-12 text-purple-600 mb-4 float-animation" />
                <CardTitle className="text-xl">Bulk Hiring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Large-scale recruitment solutions for rapid expansion or project-based requirements. Efficient processes ensuring quality at scale.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-orange-600 mb-4 float-animation" />
                <CardTitle className="text-xl">Campus Placement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Fresh talent sourcing from premier institutions. We help you build strong relationships with top colleges and identify promising graduates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <Users2 className="h-12 w-12 text-teal-600 mb-4 float-animation" />
                <CardTitle className="text-xl">Diversity Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Building inclusive teams through targeted diversity recruitment. We help create balanced workforces that drive innovation and growth.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research & Training Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F006b1d80f49744f8a88951a12aeaff7a%2F0e6778a20c8e4b48b262fa9e73efbb9f?format=webp&width=800"
                alt="Training and Development"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Research & Training Excellence</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We work closely with stakeholders to analyze job descriptions and find perfect fits. Our comprehensive approach ensures we understand both technical requirements and cultural alignment.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We also run specialized training sessions across premier colleges in Dehradun, Rohtak, Kanpur, and Lucknow, developing talent that meets industry standards and expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-800 font-medium">Detailed JD analysis and stakeholder consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-800 font-medium">Customized training programs across multiple cities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-800 font-medium">Industry-aligned skill development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Industry-specific placement cases that demonstrate our expertise
              and impact
            </p>
          </div>

          <div className="space-y-8">
            {successStories.map((story, index) => (
              <Card key={index} className="professional-card animate-on-scroll">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Badge variant="secondary" className="mb-3">
                        {story.industry}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {story.role}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Successful Placement</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Challenge:
                      </h4>
                      <p className="text-gray-700 text-sm mb-4">
                        {story.challenge}
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Solution:
                      </h4>
                      <p className="text-gray-700 text-sm">{story.solution}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">
                        Impact:
                      </h4>
                      <p className="text-green-800 text-sm font-medium">
                        {story.impact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Experts For Your Sector?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let our industry specialists help you identify and attract the
              right talent for your specific domain needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-900 hover:bg-gray-100"
                >
                  Get Industry-Specific Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Discuss Your Requirements
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
                <Link
                  to="/"
                  className="block text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  Company Profile
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  Life @ Intelligate
                </Link>
                <Link
                  to="/"
                  className="block text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  Disclaimer
                </Link>
                {/* <Link to="#" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Site Map</Link> */}
              </nav>
            </div>

            {/* Enquiry Details */}
            <div className="animate-on-scroll">
              <h4 className="text-xl font-bold mb-6 text-white">
                Enquiry details
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-orange-400 font-semibold">
                    Corporate enquiry:
                  </span>
                  <a
                    href="mailto:admin@intelligatesolution.com"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    admin@intelligatesolution.com
                  </a>
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">
                    Corporate communication:
                  </span>
                  <a
                    href="mailto:akhil.kaushik@intelligatesolution.com"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    akhil.kaushik@intelligatesolution.com
                  </a>
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">
                    Join Us:
                  </span>
                  <a
                    href="mailto:admin@intelligatesolution.com"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    admin@intelligatesolution.com
                  </a>
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">
                    Opportunity with premium clients:
                  </span>
                  <a
                    href="mailto:akhil.kaushik@intelligatesolution.com"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
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
                  <span className="text-orange-400 font-semibold block mb-1">
                    Contact no:
                  </span>
                  <a
                    href="tel:+917042923666"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 9650923366/ +91 9971019767
                  </a>
                </div>
                <div>
                  <span className="text-orange-400 font-semibold block mb-1">
                    Address:
                  </span>
                  <div>
                    <p className="font-medium">Noida Office :</p>
                    <p className="text-sm"> D-80, Sector 2</p>
                  </div>
                  <div>
                    <p className="font-medium">Rohtak Office :</p>
                    <p className="text-sm">
                      155/29 Ram Gopal Colony, Delhi Road
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://www.facebook.com/Intelligate.Solution/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
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
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
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
                <p className="text-gray-400">
                  © Intelligate HR 2024 | All Rights Reserved
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
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
