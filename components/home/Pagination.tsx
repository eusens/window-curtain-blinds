"use client"

import { formUrlQuery } from '@/lib/utils';
import { Button } from '../ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'; // Use state and effect to update page number

interface Props {
  isNext: boolean;
}

const Pagination = ({ isNext }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1); // Initial page number is 1

  // Effect to update the page number from the URL on load and on URL change
  useEffect(() => {
    const currentPage = searchParams.get('page');
    setPageNumber(currentPage ? parseInt(currentPage, 10) : 1);
  }, [searchParams]);

  const handleNavigation = (direction: 'prev' | 'next') => {
    const nextPageNumber = direction === 'prev' ? pageNumber - 1 : pageNumber + 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'page',
      value: nextPageNumber.toString(),
    });

    router.push(newUrl);
  };

  return (
    <div className="flex w-full items-center justify-center gap-2">
      {/* Enable 'Prev' button only if the current page is greater than 1 */}
      <Button
        disabled={pageNumber <= 1} // Ensure 'Prev' button is only disabled on page 1
        onClick={() => handleNavigation('prev')}
        className="light-border-2 btn flex min-h-[36px] items-center justify-center gap-2 border"
      >
        <p className="body-medium text-dark200_light800">Prev</p>
      </Button>

      <div className="flex items-center justify-center rounded-md bg-primary-500 px-3.5 py-2">
        <p className="body-semibold text-light-900">{pageNumber}</p>
      </div>

      <Button
        disabled={!isNext} // Disable the 'Next' button if there is no next page
        onClick={() => handleNavigation('next')}
        className="light-border-2 btn flex min-h-[36px] items-center justify-center gap-2 border"
      >
        <p className="body-medium text-dark200_light800">Next</p>
      </Button>
    </div>
  );
};

export default Pagination;
