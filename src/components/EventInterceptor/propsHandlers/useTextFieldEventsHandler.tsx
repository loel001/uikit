import React from 'react';

import { COMPONENT_NAME, TextField } from '../../TextField/TextField';
import { EventInterceptorHandler } from '../EventInterceptor';

type TextFieldProps = Parameters<typeof TextField>[0];

export const useTextFieldEventsHandler = <P extends TextFieldProps>(
  props: P,
  handler: EventInterceptorHandler,
  ref: React.RefObject<HTMLElement | null>,
): P => {
  const [inputChanged, setInputChanged] = React.useState<boolean>(false);
  const newProps = { ...props };

  React.useEffect(() => {
    setInputChanged(true);
  }, [newProps.value]);

  newProps.onFocus = (...onfocusArgs) => {
    setInputChanged(false);

    return props.onFocus?.(...onfocusArgs);
  };

  newProps.onBlur = (...onBlurArgs) => {
    if (inputChanged) {
      handler!({
        component: COMPONENT_NAME,
        event: 'change',
        options: {
          placeholder: newProps.placeholder,
          pageURL: window.location.href,
          DOMRef: ref.current,
          value: newProps.value,
        },
      });
    }

    return props.onBlur?.(...onBlurArgs);
  };

  return newProps;
};
