import { createConfig } from '@consta/stand';

const groups = [
  {
    title: 'Компоненты',
    id: 'components',
  },
  {
    title: 'Миксины',
    id: 'mixs',
  },
] as const;

export const { config, createStand } = createConfig({
  title: 'uikit',
  groups,
});
