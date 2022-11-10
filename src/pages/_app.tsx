import { AppProps } from "next/app"
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import { Container, CountDown, Header } from "../styles/pages/app";
import Image from "next/image";
import { Handbag } from "phosphor-react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image
          src={logoImg}
          alt=""
          width={48}
          height={48}
        />

        <span>
          <CountDown >1</CountDown>
          <Handbag size={32} />
        </span>

      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

