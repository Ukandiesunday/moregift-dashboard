import "@/styles/globals.scss";
import "@/components/atoms/buttons/Button.scss";
import "@/components/organisms/navbar/Navbar.scss";
import "@/components/molecules/newsLinks/NewsLinks.scss";
import QrModal from "@/components/atoms/QrModal/QrModal";
import AppProvider from "../../context/AppContext";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: any) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <QrModal />
    </AppProvider>
  );
}
