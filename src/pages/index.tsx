import Head from "next/head";

import { WaitingList } from "@/components/organisms/waitinglist/WaitingList";
import style from "./index.module.scss";
import { Header } from "@/components/organisms";
const Index = ({ children }: any) => {
  return (
    <div>
      <Header
        title={`Waiting list`}
        description={`Learn about our  waiting page`}
      />
      <main className={style.container}>
        <WaitingList />
        {children}
      </main>
    </div>
  );
};

export default Index;
