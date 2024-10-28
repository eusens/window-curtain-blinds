import LoadingCards from '@/components/card/LoadingCards';
import CategoriesList from '@/components/home/CategoriesList';
// import Pagination from '@/components/home/Pagination';
import PaginationControls from '@/components/home/PaginationControls';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import { Suspense } from 'react';
import { fetchProperties } from '@/utils/actions';


function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string;page?: string; per_page?: string  };
}) {
  const page = parseInt(searchParams.page as string) || 1;
  const perPage = parseInt(searchParams.per_page as string) || 88;
  const totalRecords = 12501;

  return (
    <section>
      <CategoriesList
        category={searchParams.category}
        search={searchParams.search}
      />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={searchParams.category}
          search={searchParams.search}
          page={page} // Add page
          perPage={perPage} // Add perPage

        />
        </Suspense>
        <div className="flex justify-center mt-4"> {/* Centering container */}
        <PaginationControls
          hasNextPage={totalRecords > page * perPage} // Check if there are more properties
          hasPrevPage={page > 1}
        />
      </div>
    </section>
  );
}
export default HomePage;