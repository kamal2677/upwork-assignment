import { useState } from 'react';

export const useLoader = () => {
  const [isLoading, setLoading] = useState(false);

  return {
    isLoading,
    showLoader: () => setLoading(true),
    hideLoader: () => setLoading(false),
  };
};
