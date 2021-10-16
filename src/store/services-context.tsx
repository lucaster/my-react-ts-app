import React, { useState } from 'react';

const SERVICES: Services = {
  translateService: (message) => {
    console.log('translateService', message);
    return message;
  },
};

export const ServicesContext = React.createContext(SERVICES);

const ServicesContextProviderComponent: React.FC = (props) => {

  const [services] = useState(SERVICES);

  return (
    <ServicesContext.Provider value={services}>
      {props.children}
    </ServicesContext.Provider>
  );
};

interface Services {
  translateService(message: string): string;
}

export default ServicesContextProviderComponent;
