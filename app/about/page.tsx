import { Component, FC } from 'react';
import ContactAction from '@/components/contact/ContactAction'
import Image from 'next/image';

const AboutUs: FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold  mb-4">About Us</h1>
        <p className="text-xl text-gray-600">
         We sell new and surplus components for industrial and marine automation with proven 
         experience within the industry. MRO, pneumatic, motion, electronic, hydraulic, HVAC, 
         electrical control equipment for plant floor and facilities maintenance machinery.
        </p>
        <p className="text-lg text-gray-600 leading-8">
          Over 136 brands and 500,000 spare parts in stock, 
          including GE Fanuc, ABB, Siemens, Allen-Bradley, Schneider Electric and many others, 
          with the possibility of providing any new and obsolete parts at the best price. 
          All our spares are always covered by warranty. Our technicians and operators help 
          customers not only in the purchase phase but especially in the after-sales 
          phase because customer satisfaction is our prerogative. 
        </p>
        <div className="flex justify-center gap-4">
        <div className="w-1/3">
          <Image
            src="/assets//images/image-1.svg" // replace with your image path
            alt="Image 1"
            width={400} // adjust width
            height={300} // adjust height
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-1/3">
          <Image
            src="/assets//images/image-2.svg" // replace with your image path
            alt="Image 2"
            width={400} // adjust width
            height={300} // adjust height
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-1/3">
          <Image
            src="/assets//images/image-3.svg" // replace with your image path
            alt="Image 3"
            width={400} // adjust width
            height={300} // adjust height
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold  mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600 leading-8">
          At New Sino Energy Co.,Ltd, OUR PHILOSOPHY 
          Always at the best price, Always in the shortest time
        </p>
        
      </section>

      {/* Values Section */}
      <h2 className="text-3xl font-semibold  mb-6">Product Categories:</h2>
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-medium text-purple-600 mb-4">PLC Systems</h3>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-medium text-purple-600 mb-4">HMIS and Displays</h3>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-medium text-purple-600 mb-4">Servo Drives & Motors</h3>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-medium text-purple-600 mb-4">CNC Systems</h3>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-medium text-purple-600 mb-4">Safety Automation</h3>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-medium text-purple-600 mb-4">Process Control </h3>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold  mb-6">Our Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              className="w-32 mx-auto mb-4 object-contain"
              src="/assets/images/fanuc_logo.webp"
              alt="fanuc logo"
            />
          </div>
          <div className="text-center">
            <img
              className="w-32 mx-auto mb-4 object-contain"
              src="/assets/images/allen_bradley_logo.jpg"
              alt="allen bradley logo"
            />
          </div>
          <div className="text-center">
            <img
              className="w-32 mx-auto mb-4 object-contain"
              src="/assets/images/haas_logos.jpg"
              alt="haas logo"
            />
          </div>
          <div className="text-center">
            <img
              className="w-32 mx-auto mb-4 object-contain"
              src="/assets/images/honeywell_logo.png"
              alt="honeywell logo"
            />
          </div>
          <div className="text-center">
            <img
              className="w-32 mx-auto mb-4 object-contain"
              src="/assets/images/A-b-b.png"
              alt="ABB logo"
            />
          </div>
          <div className="text-center">
            <img
              className="w-32 mx-auto mb-4 object-contain"
              src="/assets/images/beckhoff.png"
              alt="beckhoff logo"
            />
          </div>
          <div className="text-center">
            <img
              className="w-32 mx-auto mb-4 object-contain"
              src="/assets/images/mitsubishi.png"
              alt="mitsubishi logo"
            />
          </div>
          <div className="text-center">
            <img
              className="w-32 mx-auto mb-4 object-contain"
              src="/assets/images/schneider electric.png"
              alt="schneider electric"
            />
          </div>
          <div className="text-center">
            <img
              className="w-32 mx-auto mb-4 object-contain"
              src="/assets/images/sick sensor logo.png"
              alt="SICK logo"
            />
          </div>
          <div className="text-center">
            <img
              className="w-32 mx-auto mb-4 object-contain"
              src="/assets/images/yaskawa.png"
              alt="yaskawa logo"
            />
          </div>
          <div className="text-center">
            <img
              className="w-32 mx-auto mb-4 object-contain"
              src="/assets/images/lenze.png"
              alt="lenze logo"
            />
          </div>
          <div className="text-center">
            <img
              className="w-32 mx-auto mb-4 object-contain"
              src="/assets/images/festo.png"
              alt="FESTO logo"
            />
          </div>
          {/* Add more team members here */}
        </div>
      </section>

      {/* Call to Action Section */}
      <ContactAction  />
    </div>
  );
};

export default AboutUs;
