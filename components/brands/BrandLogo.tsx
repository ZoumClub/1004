import { Brand } from "@/types/brand";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  brand: Brand;
  isSelected: boolean;
  onClick: () => void;
}

export function BrandLogo({ brand, isSelected, onClick }: BrandLogoProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-16 h-16 p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all",
        "flex items-center justify-center",
        "border border-transparent",
        isSelected && "border-primary"
      )}
      title={brand.name}
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </button>
  );
}