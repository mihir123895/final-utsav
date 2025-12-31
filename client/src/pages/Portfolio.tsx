import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import weddingImg from '@assets/generated_images/Wedding_photography_portfolio_shot_5fa0ae01.png';
// import preweddingImg from '@assets/generated_images/Pre-wedding_photography_portfolio_shot_4af1f514.png';
// import eventImg from '@assets/generated_images/Event_photography_portfolio_shot_a7db2ae9.png';
// import studioImg from '@assets/generated_images/Studio_photography_portfolio_shot_6601fc9d.png';
import wed01 from "../../public/Wedding/01.jpg";
import wed02 from "../../public/Wedding/02.jpg";
import wed03 from "../../public/Wedding/03.jpg";
import wed04 from "../../public/Wedding/04.jpg";
import wed05 from "../../public/Wedding/05.jpg";
import wed06 from "../../public/Wedding/06.jpg";
import wed07 from "../../public/Wedding/07.jpg";
import wed08 from "../../public/Wedding/08.jpg";
import wed09 from "../../public/Wedding/09.jpg";
import wed10 from "../../public/Wedding/10.jpg";
import wed11 from "../../public/Wedding/11.jpg";
import wed12 from "../../public/Wedding/12.jpg";
import wed13 from "../../public/Wedding/13.jpg";
import wed14 from "../../public/Wedding/14.jpg";
import wed15 from "../../public/Wedding/15.jpg";
import wed16 from "../../public/Wedding/16.jpg";
import wed17 from "../../public/Wedding/17.jpg";
import wed18 from "../../public/Wedding/18.jpg";
import wed19 from "../../public/Wedding/19.jpg";

import wed20 from "../../public/02/01.jpg";
import wed21 from "../../public/02/02.jpg";
import wed22 from "../../public/02/03.jpg";
import wed23 from "../../public/02/04.jpg";
import wed24 from "../../public/02/05.jpg";
import wed25 from "../../public/02/06.jpg";
import wed26 from "../../public/02/07.jpg";
import wed27 from "../../public/02/08.jpg";
import wed28 from "../../public/02/09.jpg";
import wed29 from "../../public/02/10.jpg";
import wed30 from "../../public/02/11.jpg";
import wed31 from "../../public/02/12.jpg";
import wed32 from "../../public/02/13.jpg";
import wed33 from "../../public/02/14.jpg";
import wed34 from "../../public/02/15.jpg";
import wed35 from "../../public/02/16.jpg";
import wed36 from "../../public/02/17.jpg";
import wed37 from "../../public/02/18.jpg";
import wed38 from "../../public/02/19.jpg";
import wed39 from "../../public/02/20.jpg"; 
import wed40 from "../../public/02/21.jpg";
import wed41 from "../../public/02/22.jpg";
import wed42 from "../../public/02/23.jpg";
import wed43 from "../../public/02/24.jpg";
import wed44 from "../../public/02/25.jpg";
import wed45 from "../../public/02/26.jpg";
import wed46 from "../../public/02/27.jpg";
import wed47 from "../../public/02/28.jpg";
import wed48 from "../../public/02/29.jpg";


import pre01 from "../../public/PreWedding/01.jpg";
import pre02 from "../../public/PreWedding/02.jpg";
import pre03 from "../../public/PreWedding/03.jpg";
import pre04 from "../../public/PreWedding/04.jpg";
import pre05 from "../../public/PreWedding/05.jpg";
import pre06 from "../../public/PreWedding/06.jpg";
import pre07 from "../../public/PreWedding/07.jpg";
import pre08 from "../../public/PreWedding/08.jpg";
import pre09 from "../../public/PreWedding/09.jpg";
import pre10 from "../../public/PreWedding/10.jpg";
import pre11 from "../../public/PreWedding/11.jpg";
import pre12 from "../../public/PreWedding/12.jpg";
import pre13 from "../../public/PreWedding/13.jpg";
import pre14 from "../../public/PreWedding/14.jpg";
import pre15 from "../../public/PreWedding/15.jpg";
import pre16 from "../../public/PreWedding/16.jpg";
import pre17 from "../../public/PreWedding/17.jpg";
import pre18 from "../../public/PreWedding/18.jpg";
import pre19 from "../../public/PreWedding/19.jpg";

import eve01 from "../../public/Function/01.jpg"
import eve02 from "../../public/Function/02.jpg"
import eve03 from "../../public/Function/03.jpg"
import eve04 from "../../public/Function/04.jpg"
import eve05 from "../../public/Function/05.jpg"
import eve06 from "../../public/Function/06.jpg"
import eve07 from "../../public/Function/07.jpg"
import { i } from 'node_modules/vite/dist/node/types.d-aGj9QkWt';



const portfolioItems = [
  { id: 1, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed01 },
{ id: 2, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed02 },
{ id: 3, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed03 },
{ id: 4, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed04 },
{ id: 5, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed05 },
{ id: 6, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed06 },
{ id: 7, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed07 },
{ id: 8, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed08 },
{ id: 9, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed09 },
{ id: 10, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed10 },
{ id: 11, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed11 },
{ id: 12, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed12 },
{ id: 13, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed13 },
{ id: 14, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed14 },
{ id: 15, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed15 },
{ id: 16, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed16 },
{ id: 17, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed17 },
{ id: 18, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed18 },
{ id: 19, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed19 },
// { id: 20, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed20 },

{ id: 20, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre01 },
{ id: 21, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre02 },
{ id: 22, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre03 },
{ id: 23, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre04 },
{ id: 24, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre05 },
{ id: 25, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre06 },
{ id: 26, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre07 },
{ id: 27, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre08 },
{ id: 28, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre09 },
{ id: 29, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre10 },
{ id: 30, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre11 },
{ id: 31, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre12 },
{ id: 32, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre13 },
{ id: 33, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre14 },
{ id: 34, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre15 },
{ id: 35, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre16 },
{ id: 36, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre17 },
{ id: 37, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre18 },
{ id: 38, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: pre19 },

{ id:39, title: "Merrige Function", category: "Events", image: eve01 },
{ id:40, title: "Merrige Function", category: "Events", image: eve02 },
{ id:41, title: "Merrige Function", category: "Events", image: eve03 },
{ id:42, title: "Merrige Function", category: "Events", image: eve04 },
{ id:43, title: "Merrige Function", category: "Events", image: eve05 },
{ id:44, title: "Merrige Function", category: "Events", image: eve06 },
{ id:45, title: "Merrige Function", category: "Events", image: eve07 },

{ id: 46, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed20 },
{ id: 47, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed21 },
{ id: 48, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed22 },
{ id: 49, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed23 },
{ id: 50, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed24 },
{ id: 51, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed25 },
{ id: 52, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed26 },
{ id: 53, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed27 },
{ id: 54, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed28 },
{ id: 55, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed29 },
{ id: 56, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed30 },
{ id: 57, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed31 },
{ id: 58, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed32 },
{ id: 59, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed33 },
{ id: 60, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed34 },
{ id: 61, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed35 },
{ id: 62, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed36 },
{ id: 63, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed37 },
{ id: 64, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed38 },
{ id: 65, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed39 }, 
{ id: 66, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed40 },
{ id: 67, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed41 },
{ id: 68, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed42 },
{ id: 69, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed43 },
{ id: 70, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed44 },
{ id: 71, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed45 },
{ id: 72, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed46 },
{ id: 73, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed47 },
{ id: 74, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed48 },

 

  // { id: 1, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: wed01 },
  // { id: 1, title: 'Elegant Wedding Ceremony', category: 'Wedding', image: weddingImg },
  // { id: 2, title: 'Romantic Pre-Wedding', category: 'Pre-wedding', image: preweddingImg },
  // { id: 3, title: 'Corporate Event Coverage', category: 'Events', image: eventImg },
  // { id: 4, title: 'Professional Studio Portrait', category: 'Studio', image: studioImg },
  // { id: 5, title: 'Destination Wedding', category: 'Wedding', image: weddingImg },
  // { id: 6, title: 'Outdoor Pre-Wedding Shoot', category: 'Pre-wedding', image: preweddingImg },
  // { id: 7, title: 'Business Conference', category: 'Events', image: eventImg },
  // { id: 8, title: 'Fashion Studio Session', category: 'Studio', image: studioImg },
  // { id: 9, title: 'Traditional Wedding', category: 'Wedding', image: weddingImg },
];

const categories = ['All', 'Wedding', 'Pre-wedding', 'Events', 'Studio'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4" data-testid="text-page-label-portfolio">
            Our Work
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-page-title-portfolio">
            Portfolio
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-urbanist" data-testid="text-page-description-portfolio">
            Explore our collection of captured moments and crafted stories
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="min-w-24"
              data-testid={`button-filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card 
                  className="overflow-hidden group cursor-pointer hover-elevate active-elevate-2"
                  onClick={() => setSelectedImage(item)}
                  data-testid={`card-portfolio-${item.id}`}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="backdrop-blur-sm" data-testid={`badge-category-${item.category.toLowerCase()}-${item.id}`}>
                        {item.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {/* <h3 className="text-foreground font-semibold text-lg" data-testid={`text-portfolio-title-${item.id}`}>
                        {item.title}
                      </h3> */}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-foreground"
                onClick={() => setSelectedImage(null)}
                data-testid="button-close-lightbox"
              >
                <X className="h-6 w-6" />
              </Button>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-md"
              />
              <div className="mt-6 text-center">
                <Badge variant="secondary" className="mb-3" data-testid="badge-lightbox-category">
                  {selectedImage.category}
                </Badge>
                <h3 className="text-2xl font-semibold text-foreground" data-testid="text-lightbox-title">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
