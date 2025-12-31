import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import CameraScene from './CameraScene';
import heroImage from '@assets/generated_images/Hero_background_image_74162f23.png';

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      
      <CameraScene />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p 
            className="text-primary text-sm md:text-base font-medium tracking-widest uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            data-testid="text-hero-welcome"
          >
            Welcome to Utsav Digital Studio
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            data-testid="text-hero-title"
          >
            Capturing Emotions,
            <br />
            <span className="text-primary">Creating Stories</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-urbanist"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            data-testid="text-hero-description"
          >
            Premium photography and videography services that transform your special moments into timeless memories
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link href="/portfolio">
              <Button 
                size="lg" 
                className="group text-base px-8 h-12"
                data-testid="button-view-portfolio"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 h-12 backdrop-blur-sm"
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </div>
  );
}
