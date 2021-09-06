import { COMPONENT_NAME as buttonName } from '../Button/Button';
import { COMPONENT_NAME as checkboxName } from '../Checkbox/Checkbox';
import { COMPONENT_NAME as selectName } from '../Select/Select';
import { COMPONENT_NAME as snackBarName } from '../SnackBar/SnackBar';
import { COMPONENT_NAME as textFieldName } from '../TextField/TextField';

import { useButtonEventHandler } from './propsHandlers/useButtonEventHandler';
import { useCheckboxEventsHandler } from './propsHandlers/useCheckboxEventsHandler';
import { useSelectEventsHandler } from './propsHandlers/useSelectEventsHandler';
import { useSnackBarEventsHandler } from './propsHandlers/useSnackBarEventsHandler';
import { useTextFieldEventsHandler } from './propsHandlers/useTextFieldEventsHandler';

export type EventInterceptorMap = {
  [buttonName]?: typeof useButtonEventHandler;
  [textFieldName]?: typeof useTextFieldEventsHandler;
  [checkboxName]?: typeof useCheckboxEventsHandler;
  [snackBarName]?: typeof useSnackBarEventsHandler;
  [selectName]?: typeof useSelectEventsHandler;
};

export const eventInterceptorMap: EventInterceptorMap = {
  [buttonName]: useButtonEventHandler,
  [textFieldName]: useTextFieldEventsHandler,
  [checkboxName]: useCheckboxEventsHandler,
  [snackBarName]: useSnackBarEventsHandler,
  [selectName]: useSelectEventsHandler,
} as const;
