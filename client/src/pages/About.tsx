import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Heart, Star, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import founderImg from '@assets/generated_images/Founder_portrait_photo_94474dea.png';
import founderImg from '../../public/founder.jpg';
import mihirImg from '@assets/generated_images/Mihir_Patel_developer_portrait_13ce4074.png';

const timeline = [
  { year: '2010', event: 'Studio Founded', description: 'Started with a passion for capturing moments' },
  { year: '2015', event: 'First Award', description: 'Recognized for excellence in wedding photography' },
  { year: '2018', event: 'Team Expansion', description: 'Grew to a team of professional photographers' },
  { year: '2020', event: 'Digital Innovation', description: 'Introduced cinematic videography services' },
  { year: '2024', event: 'Premium Studio', description: 'Launched state-of-the-art photography studio' },
];

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Awards Won' },
  { icon: Star, value: '1000+', label: 'Projects Completed' },
  { icon: Heart, value: '14+', label: 'Years Experience' },
];

export default function About() {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4" data-testid="text-page-label-about">
            Our Story
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-page-title-about">
            About Utsav Digital Studio
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-urbanist leading-relaxed" data-testid="text-page-description-about">
            For over a decade, we've been dedicated to capturing life's most precious moments. What started as a passion has grown into a premium photography and videography studio, serving clients with excellence and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center" data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" data-testid={`icon-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`} />
                    <p className="text-3xl font-bold text-foreground mb-1" data-testid={`text-stat-value-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>{stat.value}</p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-stat-label-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Journey</h2>
          <div className="relative" ref={timelineRef}>
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  data-testid={`timeline-item-${item.year}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                    <Card className="inline-block hover-elevate">
                      <CardContent className="p-6">
                        <p className="text-2xl font-bold text-primary mb-2" data-testid={`text-timeline-year-${item.year}`}>{item.year}</p>
                        <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-timeline-event-${item.year}`}>{item.event}</h3>
                        <p className="text-muted-foreground font-urbanist" data-testid={`text-timeline-description-${item.year}`}>{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:block w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="hover-elevate" data-testid="card-team-founder">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-6">
                    <AvatarImage src={founderImg} />
                    <AvatarFallback>Founder</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Studio Founder</h3>
                  <p className="text-primary mb-4">Master Photographer</p>
                  <p className="text-muted-foreground font-urbanist">
                    With over 14 years of experience, our founder brings a unique artistic vision to every project. His passion for photography has inspired countless beautiful moments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="hover-elevate" data-testid="card-team-mihir">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-6">
                    <AvatarImage src={mihirImg} />
                    <AvatarFallback>MP</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Mihir Patel</h3>
                  <p className="text-primary mb-4">Video Editor & Developer</p>
                  <p className="text-muted-foreground font-urbanist">
                    Mihir brings technical expertise in video editing and digital innovation. His creative editing style and technical skills elevate every project to cinematic excellence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
