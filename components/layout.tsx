import Head from "next/head";
import Link from "next/link";
import React from "react";
import Header from "./Header";
import { Col, Container, Row } from "react-bootstrap";

export const siteTitle = "Aliceland";

interface ILayout {
  children: React.ReactNode;
  home?: boolean;
}

function Layout({ children, home }: ILayout) {
  return (
    <body>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <Container fluid className="mt-auto  px-0">
          {children}
        </Container>
      </main>
      <footer>
        <Container fluid>
          <Row></Row>
        </Container>
      </footer>
      {/*   {!home && (
        <div>
          <Link href="/">
            <a>← На главную</a>
          </Link>
        </div>
      )}*/}
    </body>
  );
}
export default Layout;
