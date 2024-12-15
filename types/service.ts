import { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  name: string;
  price: string;
  image: string;
  icon: LucideIcon;
  description: string;
}