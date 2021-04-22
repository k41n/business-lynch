import { Layout } from 'antd';
import { AuthGuard } from 'components/AuthGuard';
import { MainHeader } from 'components/MainHeader';
import React from 'react';

interface LayoutSlots {
  content?: React.ReactNode;
  header?: React.ReactNode;
}

interface Props {
  authOnly?: boolean;
  children: () => LayoutSlots;
}

const { Header, Content } = Layout;

export const MainLayout: React.FC<Props> = ({ authOnly, children }: Props) => {
  const { content, header } = children();
  return (
    <>
      {authOnly && <AuthGuard />}
      <Layout>
        <Header>{header ?? <MainHeader />}</Header>
        <Layout>
          <Content style={{ height: 'calc(100vh - 64px)' }}>{content}</Content>
        </Layout>
      </Layout>
    </>
  );
};
