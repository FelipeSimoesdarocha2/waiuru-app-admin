// Next
import { Url } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';

// Store
import { selectUser, logout } from 'store/features/user';
import { saveUser } from 'store/features/user';
import { useAppSelector, useAppDispatch } from 'store/hooks';

// Assets
import AccessControl from './icons/accessControl.svg';
import Activities from './icons/activities.svg';
import Advertisements from './icons/advertisements.svg';
import BookOfOccurrences from './icons/bookOfOccurrences.svg';
import Chat from './icons/chat.svg';
import Settings from './icons/config.svg';
import Dashboard from './icons/dashboard.svg';
import Documents from './icons/documents.svg';
import Employees from './icons/employees.svg';
import Feed from './icons/feed.svg';
import Financial from './icons/financial.svg';
import ListOfResidents from './icons/listOfResidents.svg';
import Logout from './icons/logout.svg';
import LostAndFound from './icons/lostAndFound.svg';
import OnlineVoting from './icons/onlineVoting.svg';
import Orders from './icons/orders.svg';
import RecreationArea from './icons/recreationArea.svg';
import Registration from './icons/registration.svg';
import ServiceProvider from './icons/serviceProvider.svg';
import logo from 'assets/icons/logo.svg';

// Styles
import * as S from './Layout.styles';

// Models
import { LayoutProps, RolesEnum } from 'models';

// i18n
import useTranslation from 'i18n';

// @Waiuru-Temporary
import { Internationalization } from 'components/internationalization';
import { Menu } from 'components/menu';
import { Sider } from 'components/sider';

const Layout = ({ selectedKey, children }: LayoutProps) => {
  const t = useTranslation();
  const router = useRouter();
  const { asPath } = useRouter();

  const dispatch = useAppDispatch();
  const session = useAppSelector(selectUser);
  const handleMenuClick = (path: Url) => {
    if (path !== asPath) {
      router.push(path);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const cleanCondo = () => {
    const newUser = {
      ...session.user,
      condominium_id: '',
      condominium: {
        id: '',
        uuid: '',
        name: '',
        email: '',
        address: '',
        phone_number: '',
        status: 0,
        role: '',
      },
    };

    dispatch(saveUser({ user: newUser }));
    router.push('/home');
  };

  const isOpenMenu = (keys: string[]) => {
    return keys.includes(selectedKey ?? '');
  };

  return (
    <S.Container>
      <Sider logo={logo}>
        <Menu>
          <Menu.ItemGroup name={`${t('navigation')}`}>
            <Menu.Item
              menuItemKey="1"
              defaultSelectedKeys={selectedKey}
              name={`${t('dashboard')}`}
              src={Dashboard}
              onClick={() => handleMenuClick('/dashboard')}
            />
            <Menu.Item
              menuItemKey="2"
              defaultSelectedKeys={selectedKey}
              name={`${t('chat')}`}
              src={Chat}
              onClick={() => handleMenuClick('/chat')}
            />
            {session.user?.role === RolesEnum.ADMIN && (
              <Menu.Item
                defaultSelectedKeys={selectedKey}
                name={'Condomínios'}
                src={Dashboard}
                onClick={() => cleanCondo()}
              />
            )}
          </Menu.ItemGroup>
          <Menu.ItemGroup name={`${t('quick-access')}`}>
            {/* <Menu.Item
              menuItemKey="3"
              defaultSelectedKeys={selectedKey}
              name={`${t('access-control')}`}
              src={AccessControl}
              onClick={() => handleMenuClick('/access-control')}
            /> */}
            <Menu.SubMenu
              name={`${t('registration')}`}
              src={Registration}
              isOpen={isOpenMenu(['4', '5', '6', '7', '8', '9', '10', '11'])}
            >
              <Menu.SubItem
                menuItemKey="4"
                defaultSelectedKeys={selectedKey}
                name={`${t('visitors')}`}
                onClick={() => handleMenuClick('/create/visitors')}
              />
              <Menu.SubItem
                menuItemKey="5"
                defaultSelectedKeys={selectedKey}
                name={`${t('order')}`}
                onClick={() => handleMenuClick('/create/order')}
              />
              <Menu.SubItem
                menuItemKey="6"
                defaultSelectedKeys={selectedKey}
                name={`${t('vehicles')}`}
                onClick={() => handleMenuClick('/create/vehicles')}
              />
              <Menu.SubItem
                menuItemKey="7"
                defaultSelectedKeys={selectedKey}
                name={`${t('residents')}`}
                onClick={() => handleMenuClick('/create/residents')}
              />
              <Menu.SubItem
                menuItemKey="8"
                defaultSelectedKeys={selectedKey}
                name={`${t('animals')}`}
                onClick={() => handleMenuClick('/create/animals')}
              />
              <Menu.SubItem
                menuItemKey="9"
                defaultSelectedKeys={selectedKey}
                name={`${t('online-voting')}`}
                onClick={() => handleMenuClick('/create/online-voting')}
              />
              <Menu.SubItem
                menuItemKey="10"
                defaultSelectedKeys={selectedKey}
                name={`${t('employee')}`}
                onClick={() => handleMenuClick('/create/employee')}
              />
              <Menu.SubItem
                menuItemKey="11"
                defaultSelectedKeys={selectedKey}
                name={'Criar Convite'}
                onClick={() => handleMenuClick('/create/resident-invite')}
              />
            </Menu.SubMenu>
            <Menu.Item
              menuItemKey="12"
              defaultSelectedKeys={selectedKey}
              name={`${t('employees')}`}
              src={Employees}
              onClick={() => handleMenuClick('/employees')}
            />
            <Menu.Item
              menuItemKey="13"
              defaultSelectedKeys={selectedKey}
              name={`${t('orders')}`}
              src={Orders}
              onClick={() => handleMenuClick('/orders')}
            />
            {/* <Menu.Item
              menuItemKey="14"
              defaultSelectedKeys={selectedKey}
              name={`${t('financial')}`}
              src={Financial}
              onClick={() => handleMenuClick('/financial')}
            /> */}
            <Menu.Item
              menuItemKey="15"
              defaultSelectedKeys={selectedKey}
              name={`${t('book-of-occurrences')}`}
              src={BookOfOccurrences}
              onClick={() => handleMenuClick('/book-of-occurrences')}
            />
            <Menu.Item
              menuItemKey="16"
              defaultSelectedKeys={selectedKey}
              name={`${t('lost-and-Found')}`}
              src={LostAndFound}
              onClick={() => handleMenuClick('/lost-and-found')}
            />
          </Menu.ItemGroup>
          <Menu.ItemGroup name={`${t('other-services')}`}>
            <Menu.Item
              menuItemKey="17"
              defaultSelectedKeys={selectedKey}
              name={`${t('feed')}`}
              src={Feed}
              onClick={() => handleMenuClick('/feed')}
            />
            {/* <Menu.Item
              menuItemKey="18"
              defaultSelectedKeys={selectedKey}
              name={`${t('documents')}`}
              src={Documents}
              onClick={() => handleMenuClick('/documents')}
            /> */}
            {/* <Menu.Item
              menuItemKey="19"
              defaultSelectedKeys={selectedKey}
              name={`${t('advertisements')}`}
              src={Advertisements}
              onClick={() => handleMenuClick('/advertisements')}
            /> */}
            {/* <Menu.Item
              menuItemKey="20"
              defaultSelectedKeys={selectedKey}
              name={`${t('service-provider')}`}
              src={ServiceProvider}
              onClick={() => handleMenuClick('/service-provider')}
            /> */}
            <Menu.Item
              menuItemKey="21"
              defaultSelectedKeys={selectedKey}
              name={`${t('online-voting')}`}
              src={OnlineVoting}
              onClick={() => handleMenuClick('/online-voting')}
            />
            <Menu.Item
              menuItemKey="22"
              defaultSelectedKeys={selectedKey}
              name={`${t('list-of-residents')}`}
              src={ListOfResidents}
              onClick={() => handleMenuClick('/list-of-residents')}
            />
            {/* <Menu.Item
              menuItemKey="23"
              defaultSelectedKeys={selectedKey}
              name={`${t('recreation-area')}`}
              src={RecreationArea}
              onClick={() => handleMenuClick('/recreation-area')}
            /> */}
            {/* <Menu.Item
              menuItemKey="24"
              defaultSelectedKeys={selectedKey}
              name={`${t('activities')}`}
              src={Activities}
              onClick={() => handleMenuClick('/activities')}
            /> */}
            {/* <Menu.Item
              menuItemKey="25"
              defaultSelectedKeys={selectedKey}
              name={`${t('settings')}`}
              src={Settings}
              onClick={() => handleMenuClick('/settings')}
            /> */}
            <Menu.Item menuItemKey="28" name={`${t('logout')}`} src={Logout} onClick={() => handleLogout()} />
          </Menu.ItemGroup>
          <Internationalization />
        </Menu>
      </Sider>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Layout;
