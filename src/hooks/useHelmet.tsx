import { useEffect } from 'react';
import { PAGES } from '../constants/seo';

// TODO: improve to create function to change meta dynamically
function useHelmet(page: SEOPagesKey) {
  useEffect(() => {
    const config = PAGES[page];
    const metaDescription = document.querySelector('meta[name="description"]');

    document.title = `Circle | ${config.title}`;

    metaDescription?.setAttribute('content', config.description);

    return () => {
      document.title = `Circle | Homepage`;
      metaDescription?.setAttribute('content', '');
    };
  }, [page]);
}

export default useHelmet;
