"use client";

import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/cars/CarCard";
import { BrandLogo } from "@/components/brands/BrandLogo";
import { DUMMY_CARS } from "@/lib/constants/cars";
import { BRANDS } from "@/lib/constants/brands";
import { useCarFilters, FilterType } from "@/lib/hooks/useCarFilters";

const FILTER_OPTIONS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All Cars' },
  { value: 'new', label: 'New Cars' },
  { value: 'used', label: 'Used Cars' },
];

interface BrowseSectionProps {
  selectedBrand: string | null;
  onBrandSelect: (brand: string | null) => void;
}

export default function BrowseSection({ selectedBrand, onBrandSelect }: BrowseSectionProps) {
  const { 
    typeFilter, 
    setTypeFilter, 
    filteredCars 
  } = useCarFilters(DUMMY_CARS.map(car => ({
    ...car,
    brand: car.name.split(' ')[0]
  })));

  const displayedCars = selectedBrand
    ? filteredCars.filter(car => car.brand === selectedBrand)
    : filteredCars;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Browse Our Collection</h2>
        
        {/* Brands Row */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-6 px-4">
            {BRANDS.map((brand) => (
              <BrandLogo
                key={brand.id}
                brand={brand}
                isSelected={brand.name === selectedBrand}
                onClick={() => onBrandSelect(brand.name === selectedBrand ? null : brand.name)}
              />
            ))}
          </div>
        </div>

        {/* Type Filters */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {selectedBrand && (
            <p className="text-lg text-muted-foreground">
              Showing {selectedBrand} vehicles
            </p>
          )}

          <div className="flex justify-center gap-4">
            {FILTER_OPTIONS.map(option => (
              <Button 
                key={option.value}
                variant={typeFilter === option.value ? "default" : "outline"}
                onClick={() => setTypeFilter(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {displayedCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No cars found matching your criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
}