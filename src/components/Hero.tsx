import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import banyuLogo from '@/assets/banyu-logo.png';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('images/homePage.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <img 
          src={banyuLogo}
          alt="Half King Surf"
          className="h-24 w-24 md:h-32 md:w-32 mx-auto mb-6 drop-shadow-lg"
        />
        <a
          href="https://www.google.com/maps/search/?api=1&query=Half%20King%2C%20Perumahan%20Canggu%20Asri%20B1%20No.44%2C%20Tibubeneng%2C%20Kuta%20Utara%2C%20Kabupaten%20Badung%2C%20Bali%2080361"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center mb-6 hover:underline"
        >
          <MapPin className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium tracking-wide uppercase">
            Half King, Canggu
          </span>
        </a>
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 leading-tight">Half King</h1>
        <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">Custom surfboards and fins handcrafted in Canggu, Bali.</p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-foreground hover:bg-sand-light font-semibold px-8 py-3 rounded-full surf-shadow"
          >
            <Link to="/fins" className="flex items-center">
              Custom Fins
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-foreground font-semibold px-8 py-3 rounded-full"
          >
            <Link to="/custom" className="flex items-center">Order Your Custom Board
            <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;