import App, { Container } from "next/app";
import { Link } from "next/link";

import { GlobalStyle } from "@saccade/components";
import { Navbar, Footer, Logo } from "@saccade/components";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Navbar
          logoPlace={
            <Link href="/">
              <Logo name="Saccade" />
            </Link>
          }
        />
        <Component {...pageProps} />
        <Footer />
      </Container>
    );
  }
}

export default MyApp;
