import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ACCESSORIES = [
  {
    name: "Car Audio System",
    price: "299",
    image: "https://images.unsplash.com/photo-1615578843118-c4d0b90c935e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "LED Lights Kit",
    price: "149",
    image: "https://images.unsplash.com/photo-1615578843118-c4d0b90c935e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Car Floor Mats",
    price: "79",
    image: "https://images.unsplash.com/photo-1615578843118-c4d0b90c935e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default function AccessoriesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Car Accessories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACCESSORIES.map((accessory) => (
            <Card key={accessory.name} className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={accessory.image} 
                  alt={accessory.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{accessory.name}</h3>
                  <p className="text-2xl font-bold text-primary">${accessory.price}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}