import React from 'react';
import Script from 'next/script';
import { siteConfig } from './metadata';
import { Metadata } from 'next';

interface PersonSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  jobTitle: string;
  description: string;
  sameAs: string[];
}

export const getPersonSchema = (): PersonSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: 'Web Developer',
  description: siteConfig.description,
  sameAs: Object.values(siteConfig.links)
});

interface BlogSchema {
  '@context': string;
  '@type': string;
  headline: string;
  datePublished: string;
  dateModified: string;
  author: {
    '@type': string;
    name: string;
    url: string;
  };
  description: string;
  image?: string;
  publisher: {
    '@type': string;
    name: string;
    url: string;
  };
}

export const getBlogSchema = (post: {
  title: string;
  date: string;
  description: string;
  slug: string;
}): BlogSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  headline: post.title,
  datePublished: new Date(post.date).toISOString(),
  dateModified: new Date(post.date).toISOString(),
  author: {
    '@type': 'Person',
    name: siteConfig.name,
    url: `${siteConfig.url}/blogs`
  },
  description: post.description,
  publisher: {
    '@type': 'Organization',
    name: 'Pollnest',
    url: `${siteConfig.url}/blogs`
  }
});

interface SchemaMarkupProps {
  schema: object;
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schema }) => (
  <Script id="schema" type="application/ld+json">
    {JSON.stringify(schema)}
  </Script>
);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url
  },
  keywords: siteConfig.keywords
};