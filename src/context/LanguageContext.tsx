// LanguageContext.tsx

import { createContext, ReactNode, useContext, useState } from 'react';

interface LanguageContextType {
  isVietnamese: boolean;
  toggleLanguage: () => void; // Update the property name
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [isVietnamese, setIsVietnamese] = useState<boolean>(false);

  const toggleLanguage = () => {
    setIsVietnamese((prev) => !prev);
  };

  return (
    <LanguageContext.Provider value={{ isVietnamese, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
