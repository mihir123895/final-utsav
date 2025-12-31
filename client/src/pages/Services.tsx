import { motion } from 'framer-motion';
import { Camera, Video, Edit, Plane, Users, Image, Film, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Camera,
    title: 'Wedding Photography',
    description: 'Capture every precious moment of your special day with our expert wedding photography services. From candid shots to traditional portraits, we preserve your memories beautifully.',
    features: ['Full day coverage', 'Candid & traditional shots', 'Professional editing', 'High-resolution images'],
  },
  {
    icon: Image,
    title: 'Pre-Wedding Shoots',
    description: 'Create magical pre-wedding memories with our creative photoshoots. We help you tell your love story through stunning visuals in breathtaking locations.',
    features: ['Location scouting', 'Costume consultation', 'Multiple outfit changes', 'Cinematic editing'],
  },
  {
    icon: Users,
    title: 'Event Photography',
    description: 'Professional coverage for corporate events, conferences, and celebrations. We capture the essence and energy of your event with precision and creativity.',
    features: ['Corporate events', 'Conferences', 'Product launches', 'Social gatherings'],
  },
  {
    icon: Sparkles,
    title: 'Studio Portraits',
    description: 'Professional studio photography for individuals, families, and corporate headshots. Our state-of-the-art studio ensures perfect lighting and stunning results.',
    features: ['Professional lighting', 'Multiple backdrops', 'Wardrobe changes', 'Family packages'],
  },
  {
    icon: Video,
    title: 'Cinematic Videography',
    description: 'Transform your events into cinematic masterpieces. Our videography services create compelling visual stories that you\'ll cherish forever.',
    features: ['4K video quality', 'Drone footage', 'Cinematic editing', 'Same-day edits'],
  },
  {
    icon: Film,
    title: 'Documentary Films',
    description: 'Tell your story through powerful documentary-style films. Perfect for weddings, events, and personal milestones.',
    features: ['Story-driven approach', 'Interview coverage', 'Cinematic narrative', 'Professional audio'],
  },
  {
    icon: Edit,
    title: 'Photo & Video Editing',
    description: 'Expert post-production services to enhance your photos and videos. Our skilled editors bring out the best in every frame.',
    features: ['Color correction', 'Retouching', 'Special effects', 'Custom edits'],
  },
  {
    icon: Plane,
    title: 'Aerial Photography',
    description: 'Breathtaking aerial shots that add a unique perspective to your events. Our licensed drone operators capture stunning overhead views.',
    features: ['Licensed operators', '4K drone footage', 'Aerial panoramas', 'Location flexibility'],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4" data-testid="text-page-label-services">
            What We Offer
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-page-title-services">
            Our Services
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-urbanist" data-testid="text-page-description-services">
            Comprehensive photography and videography solutions for all your special moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300 group" data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 font-urbanist">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
