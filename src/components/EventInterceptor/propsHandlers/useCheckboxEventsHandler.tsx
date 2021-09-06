import React from 'react';

import { Checkbox, COMPONENT_NAME } from '../../Checkbox/Checkbox';
import { EventInterceptorHandler } from '../EventInterceptor';

type CheckboxProps = Parameters<typeof Checkbox>[0];
export const useCheckboxEventsHandler = <P extends CheckboxProps>(
  props: P,
  handler: EventInterceptorHandler,
  ref: React.RefObject<HTMLElement | null>,
): P => {
  const newProps = { ...props };

  newProps.onChange = (...onChangeArgs) => {
    const [{ checked }] = onChangeArgs;
    handler!({
      component: COMPONENT_NAME,
      event: 'change',
      options: {
        label: newProps.label,
        checked,
        pageURL: window.location.href,
        DOMRef: ref.current,
      },
    });

    return props.onChange?.(...onChangeArgs);
  };

  return newProps;
};
