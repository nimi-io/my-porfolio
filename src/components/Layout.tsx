import type { NextPage } from "next";
import Head from "next/head";
import React, { ReactNode, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Header from "./Header";
import Hero from "./Hero";
import Socials from "./Socials";
import AppStyles from "../styles/globalstyles";
import { useThemeContext } from "../context/theme_context";
import { IApp } from "../utils/interfaces";
import Cursor from "./Cursor";
// import animate from "../../public/assets/js/Cursor";

type Props = {
  app: IApp;
  pageTitle?: string;
  children: ReactNode;
};

const Layout: NextPage<Props> = ({ app, pageTitle, children }: Props) => {
  const { mode: theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme!}>
      <AppStyles />
      <Head>
        <title>{pageTitle ? pageTitle : app.title}</title>
        <meta name="description" content={app.desc} />
        <link rel="icon" href="/favicon_.png" />
      </Head>
      <Cursor />
      <Header />
      <Socials socials={app.socials} />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
