import React from 'react';

import { COMPONENT_NAME, SnackBar } from '../../SnackBar/SnackBar';
import { EventInterceptorHandler } from '../EventInterceptor';

type SnackBarProps = Parameters<typeof SnackBar>[0];

export const useSnackBarEventsHandler = <P extends SnackBarProps>(
  props: P,
  handler: EventInterceptorHandler,
  ref: React.RefObject<HTMLElement | null>,
): P => {
  const newProps = { ...props };

  React.useEffect(() => {
    if (newProps.items.length) {
      handler!({
        component: COMPONENT_NAME,
        event: 'change',
        options: {
          pageURL: window.location.href,
          DOMRef: ref,
          items: newProps.items,
        },
      });
    }
  }, [newProps.items.length]);

  return newProps;
};
