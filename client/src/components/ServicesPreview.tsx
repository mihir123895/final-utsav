import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Video, Edit, Plane } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography for all occasions',
  },
  {
    icon: Video,
    title: 'Videography',
    description: 'Cinematic video production and coverage',
  },
  {
    icon: Edit,
    title: 'Editing',
    description: 'Expert photo and video post-production',
  },
  {
    icon: Plane,
    title: 'Drone Shots',
    description: 'Stunning aerial photography and videography',
  },
];

export default function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-32 bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4" data-testid="text-section-label-services">
            What We Offer
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-section-title-services">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover-elevate active-elevate-2 transition-all duration-300 group" data-testid={`card-service-${service.title.toLowerCase()}`}>
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground" data-testid={`text-service-title-${service.title.toLowerCase()}`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-urbanist" data-testid={`text-service-description-${service.title.toLowerCase()}`}>
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
