import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya & Raj',
    role: 'Wedding Clients',
    content: 'Utsav Digital Studio captured our wedding day perfectly. Every emotion, every moment was beautifully preserved. We couldn\'t be happier!',
    initials: 'PR',
  },
  {
    id: 2,
    name: 'Ananya Sharma',
    role: 'Pre-Wedding Shoot',
    content: 'The pre-wedding shoot was an amazing experience. The team made us feel comfortable and the results were absolutely stunning!',
    initials: 'AS',
  },
  {
    id: 3,
    name: 'Tech Corp Inc.',
    role: 'Corporate Event',
    content: 'Professional, punctual, and exceptional quality. They covered our annual conference and delivered beyond expectations.',
    initials: 'TC',
  },
];

export default function Testimonials() {
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
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4" data-testid="text-section-label-testimonials">
            Client Stories
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-section-title-testimonials">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full" data-testid={`card-testimonial-${index + 1}`}>
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary mb-6" data-testid={`icon-quote-${index + 1}`} />
                  <p className="text-muted-foreground mb-8 font-urbanist leading-relaxed" data-testid={`text-testimonial-content-${index + 1}`}>
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar data-testid={`avatar-testimonial-${index + 1}`}>
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground" data-testid={`text-testimonial-name-${index + 1}`}>{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index + 1}`}>{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
