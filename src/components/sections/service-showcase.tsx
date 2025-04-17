
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

type ServiceItem = {
  image: string;
  title: string;
  description: string;
};

const serviceItems: ServiceItem[] = [
  {
    image: "/placeholder.svg",
    title: "Comprehensive Eye Examination",
    description: "Complete eye health evaluation using state-of-the-art equipment"
  },
  {
    image: "/placeholder.svg",
    title: "Cataract Surgery",
    description: "Advanced surgical procedures with minimal recovery time"
  },
  {
    image: "/placeholder.svg",
    title: "Glaucoma Management",
    description: "Early detection and treatment of glaucoma to preserve vision"
  },
  {
    image: "/placeholder.svg",
    title: "Pediatric Eye Care",
    description: "Specialized care for children's vision development"
  }
];

export function ServiceShowcase() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 heading-gradient">
          Our Services in Action
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {serviceItems.map((item, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="glass-card overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
}
