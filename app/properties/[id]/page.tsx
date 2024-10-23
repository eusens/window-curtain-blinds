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
// import Amenities from '@/components/properties/Amenities';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import ContactAction from '@/components/contact/ContactAction';
import { formatCurrency } from '@/utils/format';
import Head from 'next/head';
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
    },
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
          {/* share button */}
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
      {/* <PropertyDetails details={details} /> */}
      <p className='text-lg font-semibold mt-4'>
         {formatCurrency(property.price)} per piece
      </p>
      {/* <UserInfo profile={{ firstName, profileImage }} /> */}
      <Separator className='mt-4' />
      <Description description={property.description} />
      <ContactAction  />
      {/* <Amenities amenities={property.amenities} /> */}
      <DynamicMap countryCode={property.country} />
    </div>
    <div className='lg:col-span-4 flex flex-col items-center'>
      {/* calendar */}
       <BookingCalendar />
    </div>
  </section>
    </section>      
  );
}
export default PropertyDetailsPage;