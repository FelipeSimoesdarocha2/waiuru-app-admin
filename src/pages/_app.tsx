// Next
import { NextIntlClientProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NextNprogress from 'nextjs-progressbar';

// React
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Redux
import { PersistGate } from 'redux-persist/integration/react';

// Store
import { store, persistor } from 'store';

// React-query
import { QueryClientProvider } from '@tanstack/react-query';

// Styles
import GlobalStyle from '../styles/globals';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { themeMui } from 'styles/themeMaterial';

// Models
import { RolesEnum, ModulesEnum } from 'models';

// Translate
import '../i18n';

// Utils
import { QuicksandFont } from 'utils/fonts';
import { queryClient } from 'utils/querryClient';

// Components
import { ComponentWrapper } from 'components/ComponentWrapper';

export interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: AppProps['Component'] & { allowedRoles?: RolesEnum[]; allowedModule?: ModulesEnum };
  dehydratedState: unknown;
}

function App(props: CustomAppProps) {
  const router = useRouter();
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Waiuru</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{` html {font-family: ${QuicksandFont.style.fontFamily};}`}</style>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer />
          <QueryClientProvider client={queryClient}>
            <MuiThemeProvider theme={themeMui}>
              <ThemeProvider theme={theme}>
                <GlobalStyle />
                <NextIntlClientProvider
                  locale={router.locale}
                  timeZone="America/Chicago"
                  messages={props.pageProps.messages}
                >
                  <ComponentWrapper {...props} />
                  {asPath !== '/' && (
                    <NextNprogress
                      color={theme.primaryColor}
                      startPosition={0.4}
                      stopDelayMs={200}
                      height={4}
                      showOnShallow={true}
                    />
                  )}
                </NextIntlClientProvider>
              </ThemeProvider>
            </MuiThemeProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
