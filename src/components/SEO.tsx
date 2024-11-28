import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  name?: string;
  image?: string;
  schema?: object;
}

const SEO = ({ 
  title, 
  description, 
  canonical = 'https://almfors.se', 
  type = 'website',
  name = 'Almfors',
  image = 'https://almfors.se/og-image.jpg',
  schema
}: SEOProps) => {
  const fullTitle = `${title} | ${name}`;
  
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": canonical,
    "logo": image,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Solna",
      "addressRegion": "Stockholm",
      "postalCode": "169 79",
      "streetAddress": "Stjärntorget 2",
      "addressCountry": "SE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+46-70-221-8022",
      "contactType": "customer service",
      "email": "info@almfors.se"
    },
    "sameAs": [
      "https://instagram.com/almfors.se"
    ]
  };

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>

      {/* Additional meta tags for SEO */}
      <meta name="author" content={name} />
      <meta name="keywords" content="webbdesign, webbyrå, hemsida, webbplats, sociala medier, digital marknadsföring, SEO, webbutveckling, Stockholm, Sverige" />
      <meta name="geo.region" content="SE-AB" />
      <meta name="geo.placename" content="Stockholm" />
      <meta name="geo.position" content="59.3293;18.0686" />
      <meta name="ICBM" content="59.3293, 18.0686" />
    </Helmet>
  );
};

export default SEO;