import { NextResponse } from 'next/server';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { fetchProperties } from '@/utils/actions';

export const GET = async () => {
  // Define static URLs (e.g., homepage, about, contact)
  const staticUrls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    // Add more static pages as needed
  ];

  // Fetch dynamic URLs
  const dynamicUrls = await getDynamicUrls();

  // Combine static and dynamic URLs
  const allUrls = [...staticUrls, ...dynamicUrls];

  // Create a readable stream for the sitemap
  const stream = new SitemapStream({ hostname: `https://www.newsinoenergy.com` });

  // Pipe URLs to the sitemap stream
  allUrls.forEach((url) => stream.write(url));
  stream.end();

  // Generate the XML as a buffer
  const xmlData = await streamToPromise(stream);

  // Return the XML response
  return new NextResponse(xmlData.toString('utf-8'), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
};

// Fetch dynamic URLs
const getDynamicUrls = async () => {
  const properties = await fetchProperties({}); // Fetch dynamic properties
  return properties.map((property) => ({
    url: `/properties/${property.id}`,
    changefreq: 'weekly',
    priority: 0.8,
  }));
};
