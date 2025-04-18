import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

type Location = {
  name: string;
  address: string;
  hours: {
    day: string;
    time: string;
  }[];
};

const locations: Location[] = [
  {
    name: "Sudipa Netralaya Main Clinic",
    address: "123 Medical Plaza, Kolkata, West Bengal",
    hours: [
      { day: "Monday", time: "9:00 AM - 5:00 PM" },
      { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
      { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
      { day: "Thursday", time: "9:00 AM - 5:00 PM" },
      { day: "Friday", time: "9:00 AM - 5:00 PM" },
      { day: "Saturday", time: "10:00 AM - 2:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  {
    name: "Sudipa Netralaya South Branch",
    address: "456 Health Center, Jadavpur, Kolkata",
    hours: [
      { day: "Monday", time: "Closed" },
      { day: "Tuesday", time: "10:00 AM - 4:00 PM" },
      { day: "Wednesday", time: "Closed" },
      { day: "Thursday", time: "10:00 AM - 4:00 PM" },
      { day: "Friday", time: "Closed" },
      { day: "Saturday", time: "10:00 AM - 4:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  {
    name: "Sudipa Netralaya North Branch",
    address: "789 Wellness Street, Dumdum, Kolkata",
    hours: [
      { day: "Monday", time: "1:00 PM - 6:00 PM" },
      { day: "Tuesday", time: "Closed" },
      { day: "Wednesday", time: "1:00 PM - 6:00 PM" },
      { day: "Thursday", time: "Closed" },
      { day: "Friday", time: "1:00 PM - 6:00 PM" },
      { day: "Saturday", time: "Closed" },
      { day: "Sunday", time: "10:00 AM - 1:00 PM" },
    ],
  },
];

export function LocationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      id="locations" 
      ref={containerRef}
      className="relative min-h-[100vh] bg-[#131519] overflow-hidden py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-white"
          >
            Locations & Hours
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Visit us at any of our convenient locations across Kolkata. Each clinic is equipped with state-of-the-art technology for comprehensive eye care.
          </motion.p>
        </div>

        <div className="relative">
          {locations.map((location, index) => {
            const translateY = useTransform(
              scrollYProgress,
              [index / locations.length, (index + 1) / locations.length],
              ["100vh", "0vh"]
            );

            return (
              <motion.div
                key={index}
                style={{ 
                  position: "sticky",
                  top: `${index * 50}px`,
                  y: translateY,
                }}
                className="w-full mb-6"
              >
                <Card className="bg-[#1a1d23]/50 border-purple-500/20 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-purple-400 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {location.name}
                          </h3>
                          <p className="text-gray-400">{location.address}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="h-4 w-4 text-purple-400" />
                        <span className="font-medium text-white">
                          Operating Hours
                        </span>
                      </div>

                      <ScrollArea className="h-[200px] w-full rounded-md">
                        <Table>
                          <TableBody>
                            {location.hours.map((schedule, idx) => (
                              <TableRow 
                                key={idx} 
                                className={`border-b border-gray-800 ${
                                  schedule.time === "Closed" 
                                    ? "text-gray-500" 
                                    : "text-gray-300"
                                }`}
                              >
                                <TableCell className="py-2 pl-0 font-medium">
                                  {schedule.day}
                                </TableCell>
                                <TableCell className="py-2">
                                  {schedule.time}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </ScrollArea>
                    </div>
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
