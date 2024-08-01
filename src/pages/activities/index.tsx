// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { ActivitiesScreen } from 'modules/home/screens/activities';

// Components
import { Layout } from 'components/layout';

const Activities = () => {
    return (
        <Layout selectedKey="24">
            <ActivitiesScreen />
        </Layout>
    );
};

Activities.allowedModule = ModulesEnum.ACTIVITIES;

export default Activities;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../../i18n/locales/${locale}.json`)).default,
        },
    };
}
