import React from 'react';

import { EventInterceptorMap } from './eventInterceptorMap';

export type EventInterceptorMapKeys = keyof EventInterceptorMap;

export type EventInterceptorProps<OPT extends {} = {}> = {
  component: EventInterceptorMapKeys;
  event?: string;
  options: {};
};

export type EventInterceptorHandler = (props: EventInterceptorProps) => void;

const EventInterceptorContext = React.createContext<
  { eventHandler: EventInterceptorHandler; map: EventInterceptorMap } | undefined
>(undefined);

const EventInterceptorProvider = ({
  children,
  eventHandler,
  map,
}: {
  children: React.ReactNode;
  eventHandler: EventInterceptorHandler;
  map: EventInterceptorMap;
}) => {
  return (
    <EventInterceptorContext.Provider value={{ eventHandler, map }}>
      {children}
    </EventInterceptorContext.Provider>
  );
};

export { EventInterceptorContext, EventInterceptorProvider };
export * from './eventInterceptorMap';
