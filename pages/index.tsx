import { withAuth } from 'helpers/hocs/withAuth';
import React from 'react';
import { Main } from 'views/Main';

const { Page, getServerSideProps } = withAuth(Main);

export { getServerSideProps };
export default Page;