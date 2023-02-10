import '@/styles/style.scss';
import { register } from 'swiper/element/bundle';
register();

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
