import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Calendar, Clock, Send } from 'lucide-react';

export default function WeddingInvitation() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [formData, setFormData] = useState({ name: '', message: '' });
  // const [formData, setFormData] = useState({ name: '', message: '' });
  const [wishes, setWishes] = useState([
    { name: 'Sarah ', message: 'Wishing you both a lifetime of happiness and love! So excited to celebrate with you.' },
    { name: 'Abdallah', message: 'Congratulations, you two! Can\'t wait for the big day. Your journey together is inspiring.' }
  ]);

  useEffect(() => {
    const weddingDate = new Date('2025-12-19T16:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;
      
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    }, 1000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  const handleSubmit = () => {
    if (formData.name && formData.message) {
      setWishes([{ name: formData.name, message: formData.message }, ...wishes]);
      setFormData({ name: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-content {
          animation: fadeInUp 1.2s ease-out;
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }

        .heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .slide-left {
          animation: slideInLeft 1s ease-out;
        }

        .slide-right {
          animation: slideInRight 1s ease-out;
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #be123c;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .journey-img {
          transition: transform 0.5s ease, filter 0.5s ease;
        }

        .journey-img:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        .btn-hover {
          transition: all 0.3s ease;
        }

        .btn-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(190, 18, 60, 0.3);
        }

        .text-shimmer {
          background: linear-gradient(90deg, #fff 0%, #fecdd3 50%, #fff 100%);
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        .rose-glow {
          box-shadow: 0 0 20px rgba(225, 29, 72, 0.3);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-rose-700 font-serif text-xl">
            <Heart className="heartbeat" size={24} />
            <span> A & M</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#home" className="nav-link text-gray-700 hover:text-rose-700">Our Story</a>
            <a href="#location" className="nav-link text-gray-700 hover:text-rose-700">Location</a>
            <a href="#gallery" className="nav-link text-gray-700 hover:text-rose-700">Gallery</a>
            <a href="#wishes" className="nav-link text-gray-700 hover:text-rose-700">Guestbook</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/30 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}></div>
        
        <div className="relative z-10 text-center text-white px-4 hero-content">
          <h1 className="font-serif text-6xl md:text-7xl mb-4">
            Celebrating the Union of<br />
            <span className="text-shimmer">Ahmed & Mariam</span>
          </h1>
          <p className="text-xl mb-8 text-rose-100">Novamber 19, 2025</p>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full text-lg btn-hover rose-glow">
            RSVP
          </button>
        </div>

        {/* Floating hearts decoration */}
        <Heart className="absolute top-20 left-20 text-rose-300/30 floating" size={40} style={{animationDelay: '0s'}} />
        <Heart className="absolute top-40 right-32 text-rose-300/30 floating" size={30} style={{animationDelay: '0.5s'}} />
        <Heart className="absolute bottom-40 left-40 text-rose-300/30 floating" size={35} style={{animationDelay: '1s'}} />
        <Heart className="absolute bottom-32 right-20 text-rose-300/30 floating" size={25} style={{animationDelay: '1.5s'}} />
      </section>

      {/* Countdown Section */}
      <section className="py-20 fade-in-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl text-gray-800 mb-12">Counting Down the Days</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: countdown.days, label: 'Days' },
              { value: countdown.hours, label: 'Hours' },
              { value: countdown.minutes, label: 'Minutes' },
              { value: countdown.seconds, label: 'Seconds' }
            ].map((item, i) => (
              <div key={i} className="bg-rose-100/50 backdrop-blur-sm rounded-2xl p-8 card-hover">
                <div className="text-5xl font-bold text-rose-700 mb-2">{item.value}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white/50 fade-in-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-gray-800 text-center mb-12">Location & Schedule</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-left">
              <h3 className="text-2xl font-serif text-gray-800 mb-4">The Vineyard Estate</h3>
              <p className="text-gray-600 mb-6 flex items-center gap-2">
                <MapPin size={20} className="text-rose-600" />
                123 Vineyard Lane, Napa Valley, CA 94558
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-rose-600" />
                  <div>
                    <div className="font-semibold text-gray-800">shebeen El-Kom</div>
                    <div className="text-gray-600">8:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-rose-600" />
                  <div>
                    <div className="font-semibold text-gray-800">Fair Park wedding</div>
                    <div className="text-gray-600">6:00 PM</div>
                  </div>
                </div>
              </div>
              <button  className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full btn-hover flex items-center gap-2 rose-glow">
                <a href="https://maps.app.goo.gl/CQTEsYba8NGi9PrH9?g_st=aw">Get Directions</a>
                <MapPin size={18} />
              </button>
            </div>
            <div className="slide-right rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" 
                alt="Vineyard" 
                className="w-full h-96 object-cover journey-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="gallery" className="py-20 fade-in-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-gray-800 text-center mb-12">Our Journey</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600',
              'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600',
              'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600',
              'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600',
              'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600',
              'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600'
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={img} 
                  alt={`Memory ${i + 1}`} 
                  className="w-full h-full object-cover journey-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wishes Section */}
      <section id="wishes" className="py-20 bg-white/50 fade-in-section">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-gray-800 text-center mb-12">Share Your Well Wishes</h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:outline-none transition"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:outline-none transition resize-none"
                placeholder="Share your wishes for the couple"
              ></textarea>
            </div>
            <button 
              onClick={handleSubmit}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full btn-hover flex items-center gap-2 mx-auto rose-glow"
            >
              <Send size={18} />
              Submit
            </button>
          </div>

          <div className="space-y-6">
            {wishes.map((wish, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 card-hover border-l-4 border-rose-400">
                <div className="font-semibold text-rose-700 mb-2">{wish.name}</div>
                <p className="text-gray-600 italic">"{wish.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-900 to-rose-800 text-white py-12 text-center">
        <Heart className="heartbeat mx-auto mb-4 text-rose-300" size={40} />
        <p className="text-xl font-serif mb-2">Ahmed & Mariam</p>
        <p className="text-rose-200">Novamber 19, 2025</p>
        <p className="text-rose-300 text-sm mt-4">With love and gratitude</p>
      </footer>
    </div>
  );
}