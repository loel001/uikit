import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Text } from '../../../Text';

export const TextExampleDecoration = () => {
  return (
    <div className={cnDocsDecorator('Section')}>
      <Text size="s" view="ghost" className={wp.decorator({ 'indent-b': 'xs' })}>
        text_decoration_underline
      </Text>
      <Text decoration="underline">Просто текст</Text>
    </div>
  );
};
