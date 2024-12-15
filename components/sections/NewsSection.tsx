import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NEWS = [
  {
    title: "The Future of Electric Vehicles",
    excerpt: "Discover the latest trends in electric vehicle technology and what to expect in the coming years.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "May 15, 2024",
  },
  {
    title: "Top 10 Car Maintenance Tips",
    excerpt: "Essential maintenance tips to keep your car running smoothly and extend its lifespan.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "May 12, 2024",
  },
  {
    title: "New Car Models for 2024",
    excerpt: "A comprehensive look at the most anticipated car models releasing this year.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "May 10, 2024",
  },
];

export default function NewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Car News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.map((article) => (
            <Card key={article.title} className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button variant="link" className="px-0">Read More →</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}