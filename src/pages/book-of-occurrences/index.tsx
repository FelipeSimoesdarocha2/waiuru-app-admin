// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { BookOccurrencesScreen } from 'modules/home/screens/bookOccurrences';

// Components
import { Layout } from 'components/layout';

const BookOccurrences = () => {
  return (
    <Layout selectedKey="15">
      <BookOccurrencesScreen />
    </Layout>
  );
};

BookOccurrences.allowedModule = ModulesEnum.BOOKOCCURRENCES;

export default BookOccurrences;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
