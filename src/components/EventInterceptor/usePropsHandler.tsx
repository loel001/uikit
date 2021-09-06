import React from 'react';

import { EventInterceptorContext, EventInterceptorMapKeys } from './EventInterceptor';

export const usePropsHandler = <CN extends EventInterceptorMapKeys, P>(
  componentName: CN,
  props: P,
  ref: React.Ref<unknown>,
) => {
  const context = React.useContext(EventInterceptorContext);

  if (!context) {
    return props;
  }

  const { eventHandler, map } = context;
  const propsHandler = map[componentName] as any;

  if (!propsHandler) {
    return props;
  }

  return propsHandler(props, eventHandler, ref) as P;
};
