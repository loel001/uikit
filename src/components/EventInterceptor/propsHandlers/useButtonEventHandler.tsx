import React from 'react';

import { Button, COMPONENT_NAME } from '../../Button/Button';
import { EventInterceptorHandler } from '../EventInterceptor';

export type ButtonProps = Parameters<typeof Button>[0];

export const useButtonEventHandler = <P extends ButtonProps>(
  props: P,
  handler: EventInterceptorHandler,
  ref: React.RefObject<HTMLElement | null>,
): P => {
  const newProps = { ...props };

  newProps.onClick = (...onClickArgs) => {
    const [e] = onClickArgs;
    handler!({
      component: COMPONENT_NAME,
      event: e.type,
      options: {
        text: (e.currentTarget as HTMLButtonElement).innerText,
        pageURL: e.currentTarget.baseURI,
        DOMRef: ref,
      },
    });

    return props.onClick?.(...onClickArgs);
  };

  return newProps;
};
