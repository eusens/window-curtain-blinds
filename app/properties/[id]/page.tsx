import FavoriteToggleButton from '@/components/card/FavoriteToggleButton';
import PropertyRating from '@/components/card/PropertyRating';
import BreadCrumbs from '@/components/properties/BreadCrumbs';
import ShareButton from '@/components/properties/ShareButton';
import ImageContainer from '@/components/properties/ImageContainer';
import { fetchPropertyDetails } from '@/utils/actions';
import { redirect } from 'next/navigation';
import BookingCalendar from '@/components/properties/BookingCalendar';
import PropertyDetails from '@/components/properties/PropertyDetails';
import UserInfo from '@/components/properties/UserInfo';
import Description from '@/components/properties/Description';
import { Separator } from '@/components/ui/separator';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import ContactAction from '@/components/contact/ContactAction';
import { formatCurrency } from '@/utils/format';
import { Metadata } from 'next';

const DynamicMap = dynamic(
  () => import('@/components/properties/PropertyMap'),
  {
    ssr: false,
    loading: () => <Skeleton className='h-[400px] w-full' />,
  }
);

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const property = await fetchPropertyDetails(params.id);
  if (!property) return { title: 'Property Not Found' };

  return {
    title: `${property.name} - Industrial Automation Components`,
    description: `${property.category} - ${property.name}`,
    openGraph: {
      title: property.name,
      description: `${property.category} - ${property.name}`,
      images: [property.image],
      type: 'website',  // Changed from 'product' to 'website'
    },
    alternates: {
      canonical: `/properties/${params.id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: [property.category, property.name, 'industrial automation', 'components'],
  };
}

async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect('/');
  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };
  const firstName = property.profile.firstName;
  const profileImage = property.profile.profileImage;

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className='flex justify-between items-center mt-4'>
        <h1 className='text-4xl font-bold '>{property.tagline}</h1>
        <div className='flex items-center gap-x-4'>
          <ShareButton name={property.name} propertyId={property.id} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
      <ImageContainer mainImage={property.image} name={property.name} />
      <section className='lg:grid lg:grid-cols-12 gap-x-12 mt-12'>
        <div className='lg:col-span-8'>
          <div className='flex gap-x-4 items-center'>
            <h1 className='text-xl font-bold'>{property.name}</h1>
            <PropertyRating inPage propertyId={property.id} />
          </div>
          <p className='text-lg font-semibold mt-4'>
            {formatCurrency(property.price)} per piece
          </p>
          <Separator className='mt-4' />
          <Description description={property.description} />
          <ContactAction />
        </div>
        <div className='lg:col-span-4 flex flex-col items-center'>
          <BookingCalendar />
        </div>
      </section>
    </section>
  );
}

export default PropertyDetailsPage;