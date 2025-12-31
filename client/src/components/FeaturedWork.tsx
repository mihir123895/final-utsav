import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import weddingImg from '@assets/generated_images/Wedding_photography_portfolio_shot_5fa0ae01.png';
// import preweddingImg from '@assets/generated_images/Pre-wedding_photography_portfolio_shot_4af1f514.png';
// import eventImg from '@assets/generated_images/Event_photography_portfolio_shot_a7db2ae9.png';
// import studioImg from '@assets/generated_images/Studio_photography_portfolio_shot_6601fc9d.png';

import wed01 from "../../public/Wedding/02.jpg"
import pre01 from "../../public/PreWedding/19.jpg"
import eve01 from "../../public/Function/02.jpg"



const featuredProjects = [
  {
    id: 1,
    title: 'Elegant Wedding',
    category: 'Wedding',
    image: wed01,
  },
  {
    id: 2,
    title: 'Romantic Pre-Wedding',
    category: 'Pre-Wedding',
    image: pre01,
  },
  {
    id: 3,
    title: 'Merrige Event',
    category: 'Event',
    image: eve01,
  },
  // {
  //   id: 4,
  //   title: 'Studio Portrait',
  //   category: 'Studio',
  //   image: studioImg,
  // },
];

export default function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4" data-testid="text-section-label-featured">
            Portfolio Highlights
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-section-title-featured">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-urbanist" data-testid="text-section-description-featured">
            A glimpse into our most cherished projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer hover-elevate active-elevate-2" data-testid={`card-featured-${project.category.toLowerCase()}`}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="backdrop-blur-sm" data-testid={`badge-category-${project.category.toLowerCase()}-${project.id}`}>
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-foreground font-semibold text-lg" data-testid={`text-title-${project.id}`}>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
