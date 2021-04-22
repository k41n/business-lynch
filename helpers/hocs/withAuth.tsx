import { AuthGuard } from "components/AuthGuard";
import { TOKEN_COOKIE } from "constants/keys";
import { SIGN_IN_PATH } from "constants/routes";
import React from "react";

const isBrowser = () => typeof window !== 'undefined';

export const withAuth = (Component: React.FC) => {
  const serverCondition = (ctx) => {
    return !(ctx.req.headers.cookie || '').includes(TOKEN_COOKIE);
  }

  const getServerSideProps = async (ctx) => {
    if (!isBrowser() && ctx.res) {
      if (serverCondition(ctx)) {
        ctx.res.writeHead(302, { Location: SIGN_IN_PATH });
        ctx.res.end();
      }
    }

    return { props: {} };
  }

  const Page = () => <><AuthGuard /><Component /></>;

  return { getServerSideProps, Page };
} 