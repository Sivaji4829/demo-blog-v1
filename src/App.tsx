import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { TypewriterText } from './components/TypewriterText';
import { ScrollAnimation } from './components/ScrollAnimation';
import { AnimatedGradientText } from './components/AnimatedGradientText';

import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  Users, 
  Building, 
  Calculator, 
  Briefcase, 
  ShoppingCart, 
  Shield, 
  CreditCard,
  Instagram,
  Linkedin,
  MessageCircle,
  Youtube,
  SendHorizontal,
  Sparkles,
  TrendingUp,
  Target,
  Award
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const typewriterPhrases = [
    "GST Compliance Excellence",
    "Corporate Tax Solutions",
    "Digital Financial Advisory", 
    "Business Growth Partners",
    "Regulatory Compliance Experts",
    "Strategic Tax Planning"
  ];

  const services = [
    {
      icon: <Calculator className="w-10 h-10" />,
      title: "GST Services",
      description: "Comprehensive GST registration, return filing, refunds, and notice handling with expert precision",
      category: "Tax Compliance",
      features: ["Registration", "Returns", "Refunds", "Notices"]
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Income Tax",
      description: "Professional income tax return filing and advisory services for individuals and businesses",
      category: "Tax Advisory",
      features: ["Return Filing", "Tax Planning", "Notice Handling", "Advisory"]
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "Corporate Services",
      description: "Complete company incorporation, compliance management, and corporate legal solutions",
      category: "Corporate Solutions",
      features: ["Incorporation", "Compliance", "Legal Support", "Governance"]
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "TDS & TCS",
      description: "Expert TDS/TCS registration, return filing, and compliance management services",
      category: "Tax Compliance",
      features: ["Registration", "Returns", "Compliance", "Advisory"]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Partnership & LLP",
      description: "Professional partnership firm and LLP formation, documentation, and registration services",
      category: "Business Formation",
      features: ["Formation", "Documentation", "Registration", "Compliance"]
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "Licensing Services",
      description: "Complete food license solutions - basic, state, and central level licensing support",
      category: "Licensing",
      features: ["FSSAI Basic", "State License", "Central License", "Renewals"]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Digital Signatures",
      description: "Secure digital signature certificate services for modern business authentication needs",
      category: "Digital Services",
      features: ["DSC Issuance", "Renewal", "Support", "Integration"]
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "PAN Services",
      description: "Authorized NSDL TIN-PAN center providing comprehensive PAN card services and support",
      category: "Government Services",
      features: ["New PAN", "Corrections", "Duplicate", "Updates"]
    }
  ];

  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBhY2NvdW50aW5nJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc1NjQ4MDk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "New GST Filing Deadlines for 2025",
      excerpt: "Stay ahead of compliance with the latest GST deadlines and regulatory changes that impact your business operations.",
      category: "GST Updates",
      readTime: "5 min read",
      trending: true
    },
    {
      image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2NDQzNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Tax Optimization Strategies 2025",
      excerpt: "Discover advanced tax planning strategies and deductions that can significantly reduce your tax liability.",
      category: "Tax Planning",
      readTime: "8 min read",
      trending: false
    },
    {
      image: "https://images.unsplash.com/photo-1604952703578-8ae924053711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBpbGx1c3RyYXRpb24lMjBtb2Rlcm58ZW58MXx8fHwxNzU2NDgzNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Digital Transformation in Finance",
      excerpt: "How digital tools and automated compliance systems are revolutionizing financial management practices.",
      category: "Technology",
      readTime: "6 min read",
      trending: true
    }
  ];

  const teamMembers = [
    {
      name: "Garlapati Ravi Kiran",
      designation: "Founder & Senior Partner",
      image: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzbWFufGVufDF8fHx8MTc1NjQ1NTIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      phone: "+91 98765 43210",
      position: "left",
      delay: 1
    },
    {
      name: "Garlapati Manasa Keerthi",
      designation: "Partner & Tax Specialist",
      image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NDYzNDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      phone: "+91 87654 32109",
      position: "right",
      delay: 2
    }
  ];

  const headerBlur = Math.min(scrollY / 100, 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-x-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
     {/* Enhanced Header */}
<header 
  className="fixed top-0 w-full z-50 transition-all duration-500"
  style={{
    backgroundColor: `rgba(255, 255, 255, ${0.75 + headerBlur * 0.2})`,
    backdropFilter: `blur(${15 + headerBlur * 15}px)`,
    borderBottom: `1px solid rgba(203, 213, 225, ${0.3 + headerBlur * 0.4})`,
    boxShadow: `0 4px 20px rgba(0, 0, 0, ${0.05 + headerBlur * 0.1})`
  }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      
      {/* Enhanced Logo */}
      <div className="flex-shrink-0 group">
        <div className="flex items-center space-x-3">
          {/* Icon Container */}
          <div 
            className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, #0A2540, #C9A227)',
              boxShadow: '0 6px 18px rgba(201, 162, 39, 0.4)'
            }}
          >
            {/* Replace Sparkles with stylized letters K&A */}
            <span className="text-white font-extrabold text-lg tracking-wide">
              K&A
            </span>
          </div>

          {/* Brand Text */}
          <h1 
            className="text-2xl font-extrabold tracking-tight text-[#0A2540] group-hover:text-[#C9A227] transition-colors duration-300"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            KIRAN & ASSOCIATES
          </h1>
        </div>
      </div>

      {/* Enhanced Desktop Navigation */}
      <nav className="hidden md:flex space-x-1">
        {['Home', 'About', 'Services', 'Projects', 'Clients', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative py-3 px-4 text-gray-700 hover:text-[#0A2540] transition-all duration-300 rounded-xl group"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="relative z-10 font-medium">{item}</span>
            <div 
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}
            ></div>
          </a>
        ))}
      </nav>



            {/* Enhanced Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 rounded-xl text-gray-700 hover:text-[#0A2540] transition-all duration-300 hover:bg-white/50 hover:backdrop-blur-sm"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div 
              className="px-4 pt-4 pb-6 space-y-2 border-t"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                borderColor: 'rgba(203, 213, 225, 0.4)'
              }}
            >
              {['Home', 'About', 'Services', 'Projects', 'Clients', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-gray-700 hover:text-[#0A2540] transition-colors rounded-lg hover:bg-white/60 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

     {/* Futuristic Hero Section */}
<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/currencies.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-slate-100/90 to-cyan-50/80"></div>

  {/* Floating Geometric Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full opacity-20"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${20 + Math.random() * 40}px`,
          height: `${20 + Math.random() * 40}px`,
          background: i % 2 === 0 
            ? 'linear-gradient(135deg, rgba(201, 162, 39, 0.3), rgba(59, 130, 246, 0.3))' 
            : 'linear-gradient(135deg, rgba(10, 37, 64, 0.3), rgba(139, 92, 246, 0.3))',
          animation: `float ${6 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
        }}
      ></div>
    ))}
  </div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
    <div className="text-center">
      <ScrollAnimation animation="slideUp" delay={300}>
        <div 
          className="relative p-12 md:p-16 rounded-[2rem] backdrop-blur-2xl border-2 shadow-2xl transform hover:scale-[1.02] transition-all duration-1000 group max-w-5xl mx-auto"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderColor: 'rgba(255, 255, 255, 0.6)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
          }}
        >
          {/* Hover Highlight Effect */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          {/* Hero Heading */}
          <AnimatedGradientText 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight" 
            colors={['#0A2540', '#C9A227', '#059669', '#0A2540']}
          >
            We Simplify Taxes
          </AnimatedGradientText>
          
          {/* Typewriter Subtext */}
          <div 
            className="text-2xl md:text-4xl mb-12 text-gray-700 min-h-[3em] font-medium" 
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <TypewriterText 
              phrases={typewriterPhrases}
              className="text-[#C9A227] font-bold"
              typeSpeed={80}
              deleteSpeed={40}
            />
          </div>
          
          {/* Description */}
          <p 
            className="text-xl md:text-2xl mb-12 text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium" 
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Premier Tax Consultancy & Financial Advisory Services in Guntur
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Book Consultation */}
            <Button
              size="lg"
              className="relative overflow-hidden backdrop-blur-xl border-2 border-[#C9A227] text-white font-bold transition-all duration-700 hover:scale-110 active:scale-95 hover:shadow-2xl transform hover:-translate-y-3 text-lg px-10 py-6 rounded-2xl group"
              style={{
                background: 'linear-gradient(135deg, #C9A227, #D4A853)',
                backdropFilter: 'blur(20px)',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 10px 30px rgba(201, 162, 39, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #D4A853, #E5B766)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(201, 162, 39, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #C9A227, #D4A853)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(201, 162, 39, 0.4)';
              }}
            >
              <span className="relative z-10 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Book Consultation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </Button>
            
            {/* Get Started */}
            <Button
              variant="outline"
              size="lg"
              className="relative backdrop-blur-xl border-2 border-white/70 text-[#0A2540] font-bold transition-all duration-700 hover:scale-110 active:scale-95 hover:shadow-2xl transform hover:-translate-y-3 text-lg px-10 py-6 rounded-2xl group"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(20px)',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.3)';
              }}
            >
              <span className="relative z-10 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Started
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A227]/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </Button>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  </div>
</section>

      {/* Premium Divider */}
      <div className="relative h-2 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-80">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </div>

      {/* Enhanced About Section */}
      <section id="about" className="py-32 relative">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95), rgba(241, 245, 249, 0.98), rgba(255, 255, 255, 0.95))'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeIn" delay={100}>
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-black text-[#0A2540] mb-6 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                About Our Expertise
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-[#C9A227] via-[#0A2540] to-[#C9A227] mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Pioneers in tax consultancy with a proven track record of excellence in financial advisory and compliance management
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Enhanced Profile Cards */}
            {[
              {
                name: "Garlapati Ravi Kiran",
                qualifications: "B.Com, MBA, CA, CMA, CS",
                bio: "Distinguished chartered accountant with over 15 years of expertise in tax advisory, corporate compliance, and strategic financial consulting. Specializes in complex tax planning and comprehensive regulatory compliance solutions for diverse business sectors.",
                phone: "+91 98765 43210",
                image: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzbWFufGVufDF8fHx8MTc1NjQ1NTIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                specialties: ["Tax Strategy", "Corporate Law", "Financial Planning", "Compliance"]
              },
              {
                name: "Garlapati Manasa Keerthi",
                qualifications: "B.Com, CA",
                bio: "Dynamic chartered accountant specializing in GST compliance, digital taxation frameworks, and contemporary accounting practices. Expert in guiding businesses through digital transformation and modern tax environments.",
                phone: "+91 87654 32109",
                image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2NDYzNDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                specialties: ["GST Compliance", "Digital Tax", "Modern Accounting", "Business Advisory"]
              }
            ].map((person, index) => (
              <ScrollAnimation key={index} animation="slideUp" delay={200 + index * 200}>
                <div 
                  className="relative p-10 rounded-3xl backdrop-blur-2xl border transition-all duration-1000 hover:scale-105 group cursor-pointer"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderColor: 'rgba(255, 255, 255, 0.7)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.5)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 35px 70px -12px rgba(201, 162, 39, 0.3), 0 0 0 2px rgba(201, 162, 39, 0.5)';
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-15px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div className="text-center">
                    <div className="relative w-48 h-48 rounded-full mx-auto mb-8 overflow-hidden shadow-2xl transform group-hover:scale-110 transition-transform duration-700">
                      <div 
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.3), rgba(10, 37, 64, 0.3))',
                          backdropFilter: 'blur(15px)'
                        }}
                      ></div>
                      <ImageWithFallback
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 rounded-full border-4 border-white/40 group-hover:border-[#C9A227]/70 transition-all duration-700"></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#0A2540] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {person.name}
                    </h3>
                    <p className="text-[#C9A227] font-bold mb-6 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {person.qualifications}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {person.specialties.map((specialty, i) => (
                        <Badge 
                          key={i}
                          className="bg-[#C9A227]/20 text-[#0A2540] border-[#C9A227]/40 text-xs px-3 py-1 font-medium"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {person.bio}
                    </p>
                    
                    <div className="flex items-center justify-center text-[#0A2540] bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 group-hover:bg-[#C9A227]/30 transition-all duration-500">
                      <Phone className="w-5 h-5 mr-3" />
                      <span className="font-bold">{person.phone}</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Divider */}
      <div className="relative h-2 bg-gradient-to-r from-transparent via-[#0A2540] to-transparent opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>

      

      {/* Enhanced Services Section */}
      <section id="services" className="py-32 relative">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.98), rgba(241, 245, 249, 0.95))'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeIn" delay={100}>
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-black text-[#0A2540] mb-6 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our Services
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-[#0A2540] via-[#C9A227] to-[#0A2540] mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Comprehensive financial and legal solutions tailored for modern businesses
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={index} animation="slideUp" delay={index * 100 + 200}>
                <div 
                  className="relative p-8 rounded-3xl backdrop-blur-2xl border transition-all duration-700 cursor-pointer group perspective-1000"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    borderColor: 'rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08) translateY(-20px) rotateY(8deg)';
                    e.currentTarget.style.boxShadow = '0 30px 80px -12px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(201, 162, 39, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0) rotateY(0deg)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.4)';
                  }}
                >
                  <div className="text-center">
                    <div 
                      className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center text-[#0A2540] backdrop-blur-sm border-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700"
                      style={{
                        backgroundColor: 'rgba(201, 162, 39, 0.2)',
                        borderColor: 'rgba(201, 162, 39, 0.5)',
                        boxShadow: '0 10px 25px rgba(201, 162, 39, 0.3)'
                      }}
                    >
                      {service.icon}
                    </div>
                    
                    <Badge 
                      className="mb-4 bg-[#C9A227]/30 text-[#0A2540] border-[#C9A227]/50 text-xs px-3 py-1 font-bold"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {service.category}
                    </Badge>
                    
                    <h3 className="text-xl font-bold text-[#0A2540] mb-4 group-hover:text-[#C9A227] transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-1">
                      {service.features.map((feature, i) => (
                        <Badge 
                          key={i}
                          variant="outline"
                          className="text-xs py-1 border-gray-300 text-gray-600"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Divider */}
      <div className="relative h-2 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-80">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </div>

      {/* Enhanced Insights Section */}
      <section id="projects" className="py-32 relative">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(241, 245, 249, 0.95), rgba(248, 250, 252, 0.98), rgba(255, 255, 255, 0.95))'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeIn" delay={100}>
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-black text-[#0A2540] mb-6 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                Latest Insights
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-[#C9A227] via-[#0A2540] to-[#C9A227] mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Stay ahead with our expert analysis and industry updates
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, index) => (
              <ScrollAnimation key={index} animation="slideUp" delay={index * 150 + 200}>
                <div 
                  className="relative rounded-3xl backdrop-blur-2xl border overflow-hidden transition-all duration-1000 hover:scale-105 group cursor-pointer"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderColor: 'rgba(255, 255, 255, 0.7)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.5)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 35px 80px -12px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(201, 162, 39, 0.5)';
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-15px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  }}
                >
                  <div className="relative">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)'
                      }}
                    ></div>
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                      <Badge 
                        className="bg-[#C9A227] text-white border-none text-sm px-4 py-2 font-bold"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {post.category}
                      </Badge>
                      {post.trending && (
                        <Badge 
                          className="bg-red-500 text-white border-none text-sm px-3 py-2 font-bold"
                        >
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <div className="absolute bottom-6 right-6">
                      <Badge 
                        className="bg-white/90 text-[#0A2540] border-none text-xs px-3 py-2 font-medium"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {post.readTime}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-4 leading-tight group-hover:text-[#C9A227] transition-colors duration-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {post.excerpt}
                    </p>
                    <Button 
                      variant="outline" 
                      className="backdrop-blur-sm border-[#C9A227]/60 text-[#C9A227] hover:scale-105 hover:bg-[#C9A227] hover:text-white transition-all duration-500 font-bold rounded-xl"
                      style={{
                        backgroundColor: 'rgba(201, 162, 39, 0.1)',
                        backdropFilter: 'blur(10px)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    >
                      <Award className="w-4 h-4 mr-2" />
                      Read More
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Divider */}
      <div className="relative h-2 bg-gradient-to-r from-transparent via-[#0A2540] to-transparent opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>
{/* Clients Section */}
<section id="clients" className="relative py-20 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-6xl mx-auto px-6 lg:px-12">
    {/* Section Heading */}
    <div className="text-center mb-12">
      <AnimatedGradientText>
        <h2 className="text-3xl md:text-5xl font-bold">Our Clients</h2>
      </AnimatedGradientText>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        We are proud to work with visionaries who are shaping the future.
      </p>
    </div>

    {/* Client Card */}
    <ScrollAnimation>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 w-full max-w-sm">
          <div className="flex flex-col items-center text-center">
            <ImageWithFallback
              src="/images/fayaz.jpg" // put your client’s image here
              fallback="/images/placeholder.jpg"
              alt="MR. FAYAZ AHMAD"
              className="w-28 h-28 rounded-full object-cover mb-6 shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              MR. FAYAZ AHMAD
            </h3>
            <Badge className="mt-2">Founder</Badge>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Founder of <span className="font-medium">BOdega Tech Solutions</span>.  
              Driving innovation and excellence in technology.
            </p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </div>
</section>

      {/* Social Contact Section */}
      <section id="contact" className="py-32 relative">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.98), rgba(241, 245, 249, 0.95))'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeIn" delay={100}>
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-black text-[#0A2540] mb-6 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                Connect With Us
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-[#C9A227] via-[#0A2540] to-[#C9A227] mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Reach out through your preferred channel for expert financial guidance
              </p>
            </div>
          </ScrollAnimation>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Visit Our Office",
                content: "123 Business Complex, Lakshmipuram, Guntur, Andhra Pradesh 522007",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Call Us Today",
                content: "+91 98765 43210\n+91 87654 32109",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Support",
                content: "info@kiranassociates.com\nconsult@kiranassociates.com",
                color: "from-purple-500 to-pink-500"
              }
            ].map((contact, index) => (
              <ScrollAnimation key={index} animation="slideUp" delay={200 + index * 100}>
                <div 
                  className="relative p-8 rounded-3xl backdrop-blur-2xl border transition-all duration-700 hover:scale-105 group cursor-pointer text-center"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderColor: 'rgba(255, 255, 255, 0.7)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.5)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 35px 70px -12px rgba(201, 162, 39, 0.3), 0 0 0 2px rgba(201, 162, 39, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.5)';
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${contact.color.split(' ')[0].replace('from-', '')}, ${contact.color.split(' ')[1].replace('to-', '')})`,
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {contact.content}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Enhanced Social Media Icons */}
          <ScrollAnimation animation="fadeIn" delay={600}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
                Follow Our Journey
              </h3>
              <div className="flex justify-center space-x-8">
                {[
                  { 
                    icon: <Instagram className="w-8 h-8" />, 
                    bg: 'linear-gradient(135deg, #E4405F, #C13584)', 
                    name: 'Instagram',
                    handle: '@kiranassociates'
                  },
                  { 
                    icon: <Linkedin className="w-8 h-8" />, 
                    bg: 'linear-gradient(135deg, #0077B5, #00A0DC)', 
                    name: 'LinkedIn',
                    handle: 'Kiran & Associates'
                  },
                  { 
                    icon: <MessageCircle className="w-8 h-8" />, 
                    bg: 'linear-gradient(135deg, #25D366, #128C7E)', 
                    name: 'WhatsApp',
                    handle: '+91 98765 43210'
                  },
                  { 
                    icon: <Youtube className="w-8 h-8" />, 
                    bg: 'linear-gradient(135deg, #FF0000, #CC0000)', 
                    name: 'YouTube',
                    handle: 'Tax Tips & Updates'
                  },
                  { 
                    icon: <SendHorizontal className="w-8 h-8" />, 
                    bg: 'linear-gradient(135deg, #C9A227, #D4A853)', 
                    name: 'Email',
                    handle: 'Quick Contact'
                  }
                ].map((social, index) => (
                  <div key={index} className="group relative">
                    <a 
                      href="#" 
                      className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-white backdrop-blur-xl border-2 border-white/40 transition-all duration-700 hover:scale-125 hover:rotate-12 active:scale-95 block"
                      style={{
                        background: social.bg,
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3)';
                        e.currentTarget.style.transform = 'scale(1.25) rotate(12deg) translateY(-10px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                        e.currentTarget.style.transform = 'scale(1) rotate(0deg) translateY(0)';
                      }}
                    >
                      {social.icon}
                      <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </a>
                    
                    {/* Tooltip */}
                    <div 
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                    >
                      <div 
                        className="bg-gray-900 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <div className="font-bold">{social.name}</div>
                        <div className="text-xs opacity-80">{social.handle}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Premium Footer with Video Background */}
      <footer 
        className="relative py-24 backdrop-blur-2xl border-t overflow-hidden"
        style={{
          backgroundColor: 'rgba(10, 37, 64, 0.95)',
          borderColor: 'rgba(201, 162, 39, 0.5)',
          backdropFilter: 'blur(30px)'
        }}
      >
        {/* Video Background Placeholder */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              linear-gradient(135deg, rgba(10, 37, 64, 0.8), rgba(201, 162, 39, 0.4)),
              url('https://images.unsplash.com/photo-1658677414428-d0ae187034cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwdGVjaG5vbG9neSUyMGJhY2tncm91bmQlMjB2aWRlb3xlbnwxfHx8fDE3NTY0ODM0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'gradientShift 15s ease-in-out infinite alternate'
          }}
        ></div>
        
        <div 
          className="absolute top-0 left-0 right-0 h-4"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(201, 162, 39, 1), rgba(10, 37, 64, 0.8), rgba(201, 162, 39, 1), transparent)'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #C9A227, #D4A853)',
                    boxShadow: '0 4px 15px rgba(201, 162, 39, 0.4)'
                  }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                  K&A Associates
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Your trusted partner for comprehensive tax solutions and financial advisory services in Guntur and beyond.
              </p>
              <div className="space-y-3 text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p>📍 123 Business Complex, Lakshmipuram</p>
                <p>📍 Guntur, Andhra Pradesh 522007</p>
                <p>📞 +91 98765 43210 | +91 87654 32109</p>
                <p>📧 info@kiranassociates.com</p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-8 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                Quick Navigation
              </h4>
              <div className="space-y-4">
                {['Home', 'About', 'Services', 'Projects', 'Clients', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-gray-300 hover:text-[#C9A227] transition-colors py-2 px-4 rounded-lg hover:bg-white/10 backdrop-blur-sm font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-8 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                Core Services
              </h4>
              <div className="space-y-4 text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                {['GST Services', 'Income Tax', 'Corporate Solutions', 'TDS & TCS', 'Digital Signatures', 'Business Licensing'].map((service) => (
                  <div key={service} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#C9A227] mr-3"></div>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className="pt-8 border-t text-center"
            style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            <p className="text-gray-400 text-lg mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2025 KIRAN & ASSOCIATES. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Pioneering Excellence in Tax Consultancy & Financial Advisory
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(120deg); }
          66% { transform: translateY(-5px) rotate(240deg); }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .duration-600 {
          transition-duration: 600ms;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}