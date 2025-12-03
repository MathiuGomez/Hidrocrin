import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image = '/assets/images/front-page.png', 
  url = 'https://hidrocrin.cl/' 
}: SEOProps) {
  const siteTitle = "Hidrocrin - Alfombras de Cabello Reciclado para Agricultura Sostenible";
  const defaultDescription = "Hidrocrin transforma cabello de peluquerías en alfombras innovadoras que retienen agua y nutren el suelo. Solución ecológica para combatir la sequía.";
  const defaultKeywords = "hidrocrin, cabello reciclado, agricultura sostenible, economía circular, retención de agua, sequía, peluquerías, alfombras ecológicas, sustentabilidad";

  const finalTitle = title ? `${title} | Hidrocrin` : siteTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}

