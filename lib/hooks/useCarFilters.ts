import { useState } from 'react';
import { Car } from '@/types/car';

export type FilterType = 'all' | 'new' | 'used';

export function useCarFilters(cars: Car[]) {
  const [typeFilter, setTypeFilter] = useState<FilterType>('all');
  const [brandFilter, setBrandFilter] = useState<string | null>(null);

  const filteredCars = cars.filter(car => {
    const matchesType = typeFilter === 'all' || car.type === typeFilter;
    const matchesBrand = !brandFilter || car.brand === brandFilter;
    return matchesType && matchesBrand;
  });

  const clearFilters = () => {
    setTypeFilter('all');
    setBrandFilter(null);
  };

  return {
    typeFilter,
    setTypeFilter,
    brandFilter,
    setBrandFilter,
    filteredCars,
    clearFilters,
  };
}