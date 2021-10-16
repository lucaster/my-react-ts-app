import React, { useState } from 'react';

const SERVICES = {
  translateService: (message: string) => {
    console.log('translateService', message);
    return message;
  },
};

const ServicesContextProviderComponent: React.FC = (props) => {
  const [services] = useState(SERVICES);
  return (
    <ServicesContext.Provider value={services}>
      {props.children}
    </ServicesContext.Provider>
  );
};

export const ServicesContext = React.createContext(SERVICES);

export default ServicesContextProviderComponent;
