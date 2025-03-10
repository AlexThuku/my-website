import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, section }) => {
  const siteTitle = 'Alex Thuku | Software Engineer';
  const defaultDescription = 'Experienced Software Engineer specializing in backend systems, microservices, and DevOps solutions.';
  const siteUrl = 'https://alexthuku.com';
  
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const pageDescription = description || defaultDescription;
  const canonicalUrl = section ? `${siteUrl}/#${section}` : siteUrl;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </Helmet>
  );
};

export default SEO;
