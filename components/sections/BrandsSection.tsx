"use client";

import { BRANDS, ALL_BRANDS } from "@/lib/constants/brands";
import { BrandCard } from "@/components/brands/BrandCard";

interface BrandsSectionProps {
  onBrandSelect: (brandName: string | null) => void;
  selectedBrand: string | null;
}

export default function BrandsSection({ onBrandSelect, selectedBrand }: BrandsSectionProps) {
  const handleBrandSelect = (brandName: string) => {
    if (brandName === ALL_BRANDS.name || selectedBrand === brandName) {
      onBrandSelect(null);
    } else {
      onBrandSelect(brandName);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {BRANDS.map((brand) => (
            <BrandCard
              key={brand.id}
              brand={brand}
              isSelected={brand.name === selectedBrand || (brand.name === ALL_BRANDS.name && !selectedBrand)}
              onClick={() => handleBrandSelect(brand.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}