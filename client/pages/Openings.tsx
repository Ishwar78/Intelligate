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
  Users,
  Target,
  Briefcase,
  GraduationCap,
  Users2,
  Search,
  Building,
  Car,
  Cpu,
  Zap,
  Pill,
  Home,
  Truck,
  Clock,
  IndianRupee,
  Filter,
  Upload,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ApplicationModal from "@/components/ApplicationModal";
import ResumeSubmitModal from "@/components/ResumeSubmitModal";
import HeroSlider from "@/components/HeroSlider";
import Header from "@/components/Header";

interface Job {
  _id: string;
  title: string;
  location: string;
  experience: string;
  industry: string;
  salary: string;
  type: string;
  description: string;
  skills: string[];
  postedDate: Date;
  status: string;
}

export default function Openings() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [jobOpenings, setJobOpenings] = useState<Job[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const filteredJobs =
    selectedFilter === "All"
      ? jobOpenings
      : jobOpenings.filter(
          (job) =>
            job.industry?.trim().toLowerCase() ===
            selectedFilter.trim().toLowerCase(),
        );

  // Fetch jobs and categories from MongoDB
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch jobs
        const jobsResponse = await fetch("/api/jobs");
        if (jobsResponse.ok) {
          const jobs = await jobsResponse.json();
          setJobOpenings(jobs);
        } else {
          setError("Failed to load job openings");
        }

        // Fetch categories
        const categoriesResponse = await fetch("/api/categories");
        if (categoriesResponse.ok) {
          const categoriesData = await categoriesResponse.json();
          setCategories(categoriesData);
        }
      } catch (err) {
        setError("Network error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleApplyNow = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const formatDate = (date: Date | string) => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return "Unknown"; // 👈 Handle invalid dates
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - parsedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return "1 week ago";
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

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
  console.log("🎯 Total jobs:", jobOpenings);
  console.log("🎯 Filtered jobs:", filteredJobs);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Slider */}
      <section className="relative text-white">
        <HeroSlider
          images={[

"images/current1.avif",
"images/current.jpg"

          ]}
          height="h-[500px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-on-scroll">
              Explore Open Positions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-on-scroll">
              We're hiring across India for multiple industries
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">
                Filter by Industry:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedFilter === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("All")}
                className={`${
                  selectedFilter === "All"
                    ? "bg-blue-900 text-white"
                    : "text-gray-600 hover:text-blue-900"
                }`}
              >
                All
              </Button>
              {categories
                .filter((cat) => cat.isActive)
                .map((category) => (
                  <Button
                    key={category._id}
                    variant={
                      selectedFilter === category.name ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedFilter(category.name)}
                    className={`${
                      selectedFilter === category.name
                        ? "bg-blue-900 text-white"
                        : "text-gray-600 hover:text-blue-900"
                    }`}
                  >
                    {category.name}
                  </Button>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {loading
                  ? "Loading..."
                  : `${filteredJobs.length} Open Position${filteredJobs.length !== 1 ? "s" : ""} Available`}
              </h2>
              <p className="text-gray-600">
                Find your next career opportunity with leading companies across
                India
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button
                onClick={() => setIsResumeModalOpen(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold text-lg"
                size="lg"
              >
                <Upload className="h-5 w-5" />
                Submit Your Resume
              </Button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-8">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="animate-pulse">
                  <CardHeader className="pb-4">
                    <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-16 bg-gray-200 rounded mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => {
                console.log("🔍 Rendering job card:", job.title);
                return (
                  <Card
                    key={job._id.toString()}
                    className="border border-gray-800 bg-white text-black rounded-lg p-4 shadow-md"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {job.industry}
                        </Badge>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {formatDate(job.postedDate)}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Briefcase className="h-4 w-4" />
                          <span className="text-sm">{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <IndianRupee className="h-4 w-4" />
                          <span className="text-sm">{job.salary}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="text-gray-700 mb-4">
                        {job.description}
                      </CardDescription>
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-900 mb-2">
                          Key Skills:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {Array.isArray(job.skills) &&
                          job.skills.length > 0 ? (
                            job.skills.map((skill, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))
                          ) : (
                            <span className="text-xs text-gray-400 italic">
                              No skills listed
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          className="flex-1 bg-blue-900 hover:bg-blue-800 text-white"
                          onClick={() => handleApplyNow(job)}
                        >
                          Apply Now
                        </Button>
                        <Button variant="outline" size="sm" className="px-3">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {!loading && filteredJobs.length === 0 && !error && (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No positions found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filter or check back later for new
                opportunities.
              </p>
              <Button
                onClick={() => setSelectedFilter("All")}
                variant="outline"
              >
                View All Positions
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Send us your resume and we'll keep you informed about new
              opportunities that match your profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3"
                >
                  Submit Your Resume
                </Button>
              </Link>
              <a
                href="https://wa.me/919971019767"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with Recruiter
                </Button>
              </a>
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
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      >
        <MessageCircle size={24} />
      </a>

      {/* Application Modal */}
      {selectedJob && (
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedJob(null);
          }}
          jobTitle={selectedJob.title}
          jobId={selectedJob._id}
        />
      )}

      {/* Resume Submit Modal */}
      <ResumeSubmitModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
