import { fetchProperties } from '@/utils/actions';
import PropertiesList from './PropertiesList';
import EmptyList from './EmptyList';
import Pagination from './Pagination'; // Assuming this is your pagination component
import type { PropertyCardProps } from '@/utils/types';

async function PropertiesContainer({
  category,
  search,
  page = 1,
}: {
  category?: string;
  search?: string;
  page?: number;
}) {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
    page, // Pass the page number for pagination
  });

  if (properties.length === 0) {
    return (
      <EmptyList
        heading="No results."
        message="Try changing or removing some of your filters."
        btnText="Clear Filters"
      />
    );
  }

  const isNext = properties.length === 12; // Check if there is a next page (based on page size)

  return (
    <>
      {/* Only pass the properties array to PropertiesList */}
      <PropertiesList properties={properties} />
      
      {/* Pass isNext separately to Pagination */}
      {/* <Pagination pageNumber={page} isNext={isNext} /> */}
      <Pagination isNext={isNext} />
    </>
  );
}

export default PropertiesContainer;
