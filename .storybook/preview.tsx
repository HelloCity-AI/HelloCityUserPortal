import type { Preview } from '@storybook/nextjs-vite';
import { ThemeProvider, CssBaseline } from '@mui/material';
import websiteTheme from '../src/theme/theme';

import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import './storybook-fonts.css';
import '../src/app/globals.css';

import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { messages as enMessages } from '@/locales/en/messages.mjs';
import { messages as zhMessages } from '@/locales/zh/messages.mjs';

i18n.load({
  en: enMessages,
  zh: zhMessages,
});
i18n.activate('en');

export const decorators = [
  (Story: any) => {
    return (
      <I18nProvider i18n={i18n}>
        <Story />
      </I18nProvider>
    );
  },
  withThemeFromJSXProvider({
    themes: {
      light: websiteTheme,
    },
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      disable: false,
    },
  },
};

export default preview;
