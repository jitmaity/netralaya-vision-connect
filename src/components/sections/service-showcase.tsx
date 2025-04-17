
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type ServiceItem = {
  image: string;
  title: string;
  description: string;
};

const serviceItems: ServiceItem[] = [
  {
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    title: "Comprehensive Eye Examination",
    description: "Complete eye health evaluation using state-of-the-art equipment"
  },
  {
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    title: "Cataract Surgery",
    description: "Advanced surgical procedures with minimal recovery time"
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Glaucoma Management",
    description: "Early detection and treatment of glaucoma to preserve vision"
  },
  {
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    title: "Pediatric Eye Care",
    description: "Specialized care for children's vision development"
  }
];

export function ServiceShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "-50%", "-100%"]
  );

  return (
    <section 
      ref={containerRef}
      className="relative h-[100vh] overflow-hidden bg-muted/30"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient"
          >
            Our Services in Action
          </motion.h2>

          <motion.div 
            style={{ x }}
            className="flex gap-6 pl-[10%]"
          >
            {serviceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="min-w-[300px] md:min-w-[400px]"
              >
                <Card className="glass-card overflow-hidden h-full">
                  <div className="aspect-video relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Progress Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-1 bg-muted rounded-full overflow-hidden"
          >
            <motion.div 
              className="h-full bg-primary rounded-full"
              style={{ scaleX: scrollYProgress }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
