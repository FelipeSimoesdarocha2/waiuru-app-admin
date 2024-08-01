// Next
import { GetStaticPropsContext } from 'next';

// Components
import { Button } from 'components/button';
import { Layout } from 'components/layout';

const NotFound = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <Layout selectedKey={''}>
      <Button.Link label={`${'back'}`} onClick={handleBack} type="secondary" />
    </Layout>
  );
};

export default NotFound;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../i18n/locales/${locale}.json`)).default,
    },
  };
}
