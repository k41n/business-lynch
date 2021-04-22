import { Avatar, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useCacooUser } from 'cacoo/useCacooUser';
import { TOKEN_COOKIE } from 'constants/keys';
import { MAIN_PATH } from 'constants/routes';
import { useRouter } from 'next/router';
import React from 'react';
import cookie from 'react-cookies';

import { Container } from './styles';

export const MainHeader = () => {
  const { error, user } = useCacooUser();

  const router = useRouter();

  const handleSignOut = () => {
    cookie.remove(TOKEN_COOKIE, { path: '/' });
    router.push(MAIN_PATH);
  }

  if (error) console.error(error);
  if (!user) return null;

  return (
    <Container>
      <Menu mode="horizontal">
        <SubMenu
          key="SubMenu"
          title={
            <>
              <Avatar size={32} src={user.imageUrl} /> {user.nickname}
            </>
          }
        >
          <Menu.Item key="1" onClick={handleSignOut}>Sign Out</Menu.Item>
        </SubMenu>
      </Menu>
    </Container>
  );
};
