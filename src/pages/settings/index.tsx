// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { SettingsScreen } from 'modules/home/screens/settings';

// Components
import { Layout } from 'components/layout';

const Settings = () => {
  return (
    <Layout selectedKey="25">
      <SettingsScreen />
    </Layout>
  );
};

Settings.allowedModule = ModulesEnum.SETTINGS;

export default Settings;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
