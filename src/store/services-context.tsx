import React, { useState } from 'react';

const NULL_SERVICES_STATE: Services = {
  translateService: (message) => '',
};

export const ServicesContext = React.createContext(NULL_SERVICES_STATE);

const ServicesContextProviderComponent: React.FC = (props) => {

  const initialState: Services = {
    translateService: (message) => {
      console.log('translateService', message);
      return message;
    },
  };

  const [services] = useState(initialState);

  const contextValue: Services = {
    ...services,
  };

  return (
    <ServicesContext.Provider value={contextValue}>
      {props.children}
    </ServicesContext.Provider>
  );
};

interface Services {
  translateService(message: string): string;
}

export default ServicesContextProviderComponent;
