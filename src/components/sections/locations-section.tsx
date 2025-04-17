
import { MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
  return (
    <section id="locations" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Locations & Hours</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit us at one of our convenient locations across Kolkata. Each clinic is equipped with state-of-the-art technology for comprehensive eye care
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card key={index} className="border border-border/50 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-eyepurple" />
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                </div>
                <CardDescription className="text-base">{location.address}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-eyepurple" />
                  <span className="font-medium">Operating Hours</span>
                </div>
                <Table>
                  <TableBody>
                    {location.hours.map((schedule, idx) => (
                      <TableRow key={idx} className={schedule.time === "Closed" ? "text-muted-foreground" : ""}>
                        <TableCell className="font-medium">{schedule.day}</TableCell>
                        <TableCell>{schedule.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
