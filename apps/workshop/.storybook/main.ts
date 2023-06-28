import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-styling'
  ],
  // docs: {
  //   autodocs: 'tag',
  // },
  staticDirs: ['../public'],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: '@diaryco/design-system',
            replacement: path.resolve(
              __dirname,
              '../../../packages/diary-design-system/dist'
            ),
          },
        ],
      },
    })
  },
}

export default config
