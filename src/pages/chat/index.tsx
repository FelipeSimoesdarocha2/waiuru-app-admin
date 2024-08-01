// Next
import { GetStaticPropsContext } from 'next';

// Models
import { ModulesEnum } from 'models';

// Modules
import { ChatScreen } from 'modules/home/screens/chat';

// Components
import { Layout } from 'components/layout';

const Chat = () => {
  return (
    <Layout selectedKey="2">
      <ChatScreen />
    </Layout>
  );
};

Chat.allowedModule = ModulesEnum.CHAT;

export default Chat;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
