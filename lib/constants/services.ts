import { Service } from "@/types/service";
import { 
  Wrench, 
  Car, 
  Shield, 
  PaintBucket,
  Gauge,
  Battery,
  Oil,
  Sparkles
} from "lucide-react";

export const SERVICES: Service[] = [
  {
    id: 1,
    name: "Full Service",
    price: "299",
    image: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: Wrench,
    description: "Complete car maintenance service including oil change, filters, and full inspection"
  },
  {
    id: 2,
    name: "Diagnostics",
    price: "99",
    image: "https://images.unsplash.com/photo-1589923188651-268a4fa437a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: Gauge,
    description: "Comprehensive computer diagnostics to identify any issues"
  },
  {
    id: 3,
    name: "Body Repair",
    price: "499",
    image: "https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: PaintBucket,
    description: "Professional body work and paint services"
  }
];