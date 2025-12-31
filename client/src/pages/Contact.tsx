import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat with us instantly',
      action: 'Start Chat',
      link: 'https://wa.me/+919574781454',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Follow our journey',
      action: 'Follow Us',
      link: 'https://instagram.com/utsav_digital_studio',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak to our team',
      action: 'Call Now',
      link: 'tel:+919574781454',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4" data-testid="text-page-label-contact">
            Get in Touch
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-page-title-contact">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-urbanist mb-8" data-testid="text-page-tagline-contact">
            Let's make your next story unforgettable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="h-full hover-elevate active-elevate-2 group" data-testid={`card-contact-${method.title.toLowerCase()}`}>
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${method.bgColor} mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-8 w-8 ${method.color}`} data-testid={`icon-contact-${method.title.toLowerCase()}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-contact-title-${method.title.toLowerCase()}`}>
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 font-urbanist" data-testid={`text-contact-description-${method.title.toLowerCase()}`}>
                      {method.description}
                    </p>
                    <a href={method.link} target="_blank" rel="noopener noreferrer">
                      <Button 
                        className="w-full"
                        data-testid={`button-${method.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {method.action}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm" data-testid="card-studio-info">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center" data-testid="text-studio-info-title">
                Studio Information
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" data-testid="icon-address" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid="text-address-title">Address</h3>
                    <p className="text-muted-foreground font-urbanist" data-testid="text-address-content">
                      113 Radheshyam Complex<br />
                      Mahudha, Gujarat<br />
                      387335, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" data-testid="icon-email" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid="text-email-title">Email</h3>
                    <p className="text-muted-foreground font-urbanist" data-testid="text-email-content">
                      utsavstudio5111@gmail.com<br />
                      {/* bookings@utsavstudio.com */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground font-urbanist" data-testid="text-business-hours">
                  Business Hours: Monday - Sundayday, 10:00 AM - 7:00 PM<br />
                  {/* Sunday by appointment only */}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
