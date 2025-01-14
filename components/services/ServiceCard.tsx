import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Icon className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">{service.name}</h3>
          </div>
          <p className="text-muted-foreground mb-4">{service.description}</p>
          <p className="text-2xl font-bold text-primary">${service.price}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Book Service</Button>
      </CardFooter>
    </Card>
  );
}