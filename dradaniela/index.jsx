import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X, ChevronRight } from 'lucide-react';

export default function MedicalHero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll for dynamic navbar (Glassmorphism effect)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer Motion Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8] font-sans selection:bg-[#c9a84c] selection:text-black">
      
      {/* NAVIGATION */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md py-4 border-[#c9a84c]/20' 
            : 'bg-transparent py-6 border-transparent'
        } px-6 md:px-16`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-[#c9a84c] flex items-center justify-center rounded-sm group-hover:bg-[#c9a84c]/10 transition-colors">
              <span className="font-serif text-[#c9a84c] text-xl">D</span>
            </div>
            <div>
              <h1 className="font-serif text-lg tracking-widest uppercase">Dra. Daniela Garcia</h1>
              <p className="text-[#c9a84c] text-[0.65rem] tracking-[0.2em] uppercase">Otorrinolaringologista</p>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-10 items-center text-[0.75rem] tracking-[0.15em] uppercase text-[#9a9080]">
            {['Sobre', 'Especialidades', 'Clínica', 'Contato'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-white relative overflow-hidden group">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9a84c] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <a href="https://wa.me/5511948884848" className="hidden md:flex items-center gap-2 border border-[#c9a84c] text-[#c9a84c] px-6 py-2.5 text-[0.7rem] tracking-widest uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-400">
            Agendar Consulta
          </a>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 pt-24 md:pt-0">
        
        {/* Left Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center px-6 md:px-16 lg:px-24 z-10 py-12 md:py-0"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 text-[#c9a84c] text-[0.7rem] tracking-[0.25em] uppercase mb-6">
            <span className="w-8 h-[1px] bg-[#c9a84c]"></span>
            Instituto Inspirare · São Paulo
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 text-white">
            Cuidado especializado <br/>
            em <em className="text-[#c9a84c] italic">Otorrinolaringologia</em>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-[#9a9080] text-sm md:text-base leading-relaxed max-w-md mb-12">
            Da rinoplastia funcional ao tratamento de apneia. A Dra. Daniela Garcia une técnica cirúrgica refinada e atendimento humanizado para transformar sua qualidade de vida.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-wrap gap-6 items-center">
            <a href="https://wa.me/5511948884848" className="flex items-center gap-3 bg-[#c9a84c] text-black px-8 py-4 text-[0.75rem] tracking-[0.15em] uppercase font-medium hover:bg-[#e2c87a] transition-colors shadow-[0_0_20px_rgba(201,168,76,0.2)] hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]">
              <MessageCircle size={16} />
              Agendar via WhatsApp
            </a>
            <a href="#especialidades" className="flex items-center gap-2 text-[#9a9080] text-[0.75rem] tracking-[0.15em] uppercase hover:text-white transition-colors group">
              Ver Tratamentos
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-16 text-[0.65rem] text-[#444] tracking-[0.15em] uppercase">
            CRM-SP 170913 · RQE 89966
          </motion.div>
        </motion.div>

        {/* Right Image Container */}
        <div className="relative h-[60vh] md:h-full w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10 hidden md:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 md:hidden"></div>
          
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1200&q=80" 
            alt="Dra. Daniela Garcia em atendimento"
            className="w-full h-full object-cover object-center"
          />

          {/* Floating Glassmorphism Stats Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 right-8 z-20 bg-black/40 backdrop-blur-xl border border-[#c9a84c]/30 p-6 hidden md:block"
          >
            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="block font-serif text-4xl text-[#c9a84c] mb-1">+1.000</span>
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#9a9080]">Cirurgias<br/>Realizadas</span>
              </div>
              <div className="w-[1px] h-12 bg-[#c9a84c]/20"></div>
              <div className="text-center">
                <span className="block font-serif text-4xl text-[#c9a84c] mb-1">10+</span>
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#9a9080]">Anos de<br/>Experiência</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}