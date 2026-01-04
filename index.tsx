import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { GoogleGenAI } from "@google/genai";

// --- Components ---

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="https://drive.google.com/thumbnail?id=1sMjTZehCLNK6ZScZAkGGBi3BjRWWPtPd&sz=w200" alt="3NITYP EDUTECH Logo" className="h-12 w-auto object-contain" />
          <span className="text-xl font-bold text-slate-900 tracking-tight">3NITYP EDUTECH</span>
        </div>
        <div className="hidden md:flex space-x-8 font-medium text-slate-600 items-center">
          <button onClick={() => scrollTo("home")} className="hover:text-brand-600 transition">Home</button>
          <button onClick={() => scrollTo("services")} className="hover:text-brand-600 transition">Services</button>
          <button onClick={() => scrollTo("about")} className="hover:text-brand-600 transition">About</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-brand-600 transition">Contact</button>
        </div>
        <button onClick={() => scrollTo("contact")} className="hidden md:block bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full font-semibold transition shadow-lg shadow-brand-500/30">
          Get Started
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-[800px] w-[800px] fill-brand-600">
          <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,87.7,-6.6C85.3,7.2,77.8,20.5,68.6,32.3C59.4,44.1,48.5,54.4,36.4,62.3C24.3,70.2,11,75.7,-1.2,77.8C-13.4,79.9,-25.8,78.6,-36.8,72.6C-47.8,66.6,-57.4,55.9,-65.4,43.9C-73.4,31.9,-79.8,18.6,-80.6,5C-81.4,-8.6,-76.6,-22.5,-68.2,-34.2C-59.8,-45.9,-47.8,-55.4,-35.3,-63.3C-22.8,-71.2,-9.8,-77.5,4.2,-84.7L18.2,-91.9Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 text-center md:text-left md:flex items-center">
        <div className="md:w-1/2 fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Unlock Your Potential in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500">Computer Science</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
            Schools tech classes and coding clubs.<br />
            Personalized, one-on-one tutoring for primary, jnr/snr secondary students. Master block-based programming, Python, Web Development, and Theory with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => document.getElementById("contact")?.scrollIntoView()} className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-full font-semibold transition shadow-xl shadow-brand-500/20">
              Book a Free Consultation
            </button>
            <button onClick={() => document.getElementById("services")?.scrollIntoView()} className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3 rounded-full font-semibold transition">
              Explore Courses
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-check text-emerald-500"></i> Expert Tutors
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-check text-emerald-500"></i> Flexible Schedule
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-check text-emerald-500"></i> Online & Remote
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center fade-in">
          <div className="relative z-10 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 transform rotate-2 hover:rotate-0 transition duration-500">
             <img 
               src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
               alt="Programming Code" 
               className="rounded-xl w-full max-w-md object-cover h-64 md:h-80"
             />
             <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-50 flex items-center gap-3">
               <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                 <i className="fa-solid fa-graduation-cap text-xl"></i>
               </div>
               <div>
                 <p className="text-xs text-slate-500">Success Rate</p>
                 <p className="font-bold text-slate-800">98% Pass A-Levels</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: "fa-brands fa-code",
      color: "text-blue-500",
      title: "Programming Fundamentals",
      desc: "Master the basics of block-based, Python, . Variables, loops, functions, and object-oriented programming explained simply."
    },
    {
      icon: "fa-solid fa-globe",
      color: "text-purple-500",
      title: "Web Development",
      desc: "Build modern websites using HTML, CSS, JavaScript. Learn frontend design."
    },
    {
      icon: "fa-solid fa-school",
      color: "text-emerald-500",
      title: "ICT for schools and Coding",
      desc: "Deep understand in ICT curriculum, Coding Curriculum, Digital Skill, and Trending Tech Skills for success."
    },
    {
      icon: "fa-solid fa-book-open",
      color: "text-amber-500",
      title: "Exam Preparation",
      desc: "Targeted revision for GCSE and A-Level Computer Science (AQA, OCR, Edexcel). Past paper walkthroughs and technique."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Tutoring Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Whether you're a complete beginner or an advanced student, we have a curriculum tailored to your goals.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition duration-300 border border-slate-100 group">
              <div className={`text-4xl mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-brand-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Your Head Tutor</h2>
          <p className="text-brand-100 mb-6 text-lg leading-relaxed">
            "Hi, I'm Gospel. With over 7 years of tech tutoring experience, I bridge the gap between complex theory and practical application."
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-800 rounded-lg flex items-center justify-center text-brand-400">
                <i className="fa-solid fa-certificate text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold">Certified</h4>
                <p className="text-sm text-brand-200">CS50 Computer Science</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-800 rounded-lg flex items-center justify-center text-brand-400">
                <i className="fa-solid fa-briefcase text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold">Experience</h4>
                <p className="text-sm text-brand-200">EdTech Facilitator at Coding clubs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
            <div className="relative">
                <div className="absolute inset-0 bg-brand-500 rounded-full blur-3xl opacity-20"></div>
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Tutor" className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-brand-700 shadow-2xl" />
            </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your interest! We will contact you shortly.");
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-slate-900 text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <p className="text-slate-300 mb-8">Ready to boost your grades or school learners? Send us a message to schedule your first session.</p>
              <div className="space-y-4 text-sm text-slate-300">
                <p><i className="fa-solid fa-envelope mr-3 text-brand-400"></i> info.3et@gmail.com</p>
                <p><i className="fa-solid fa-phone mr-3 text-brand-400"></i> +234 803 4552 731</p>
                <p><i className="fa-solid fa-location-dot mr-3 text-brand-400"></i> Lagos, NIG (Online class, physical class Available)(School Onsite Available)</p>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition"><i className="fa-brands fa-facebook-f"></i></a>
               <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition"><i className="fa-brands fa-youtube"></i></a>
               <a href="https://www.tiktok.com/@idaisingospel" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition"><i className="fa-brands fa-tiktok"></i></a>
            </div>
          </div>
          <div className="md:w-2/3 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-500 transition" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-500 transition" placeholder="john@example.com" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-500 transition">
                   <option>General Inquiry</option>
                   <option>GCSE Tutoring</option>
                   <option>A-Level Tutoring</option>
                   <option>University / Career Advice</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand-500 transition" placeholder="Tell us about your goals..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition shadow-lg shadow-brand-500/30">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
    <div className="container mx-auto px-6 text-center">
       <p className="mb-4 text-2xl font-bold text-white tracking-tight">3-ET<span className="text-brand-500"> TECH</span></p>
       <p className="text-sm">© 2024 3-ET Tech Tutors. All rights reserved.</p>
    </div>
  </footer>
);

// --- AI Chat Widget ---

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm the 3ET AI Assistant. Ask me about our tutoring services, pricing, or even a quick coding question!" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setInputValue("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: userMsg }]}
        ],
        config: {
          systemInstruction: `You are a helpful, professional, and friendly virtual assistant for '3-ET ICT Tutors'. 
          Your goal is to assist potential clients (students or parents).
          
          Key Information:
          - Services: GCSE/A-Level CS, Python, Java, Web Dev (React, HTML/CSS), Networking.
          - Tutors: Experienced industry professionals and certified teachers.
          - Pricing: Competitive rates starting at £40/hr. Free initial consultation.
          - Tone: Encouraging, knowledgeable, polite.
          
          If the user asks a technical question (e.g., "What is a loop?"), give a brief, clear explanation and suggest booking a session for in-depth learning.
          If you don't know the answer, politely ask them to use the contact form on the website.`
        }
      });

      const text = response.text;
      if (text) {
        setMessages(prev => [...prev, { role: 'model', text }]);
      }
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again later or use the contact form." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white w-80 md:w-96 rounded-2xl shadow-2xl mb-4 border border-slate-200 overflow-hidden flex flex-col fade-in h-[500px]">
          <div className="bg-brand-600 p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <i className="fa-solid fa-robot"></i>
              </div>
              <div>
                <h3 className="font-bold text-sm">3-ET Assistant</h3>
                <p className="text-xs text-brand-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition">
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-brand-600 text-white rounded-tr-none' : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex gap-1 items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask a question..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-500 transition"
            />
            <button onClick={handleSend} disabled={isLoading} className="w-10 h-10 bg-brand-600 hover:bg-brand-700 text-white rounded-full flex items-center justify-center transition disabled:opacity-50 shadow-md">
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-slate-700' : 'bg-brand-600 hover:bg-brand-500'} text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-comment-dots'} text-2xl`}></i>
      </button>
    </div>
  );
};

// --- App Component ---

const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);