// import { WaitingNavBar } from "@/components/layouts/NavBar";
// import { Header } from "@/components/organisms";
// import WaitListEmail from "@/components/organisms/waitingemail/WaitListEmail";
// import style from "./index.module.scss";
// import React from "react";
// import Image from "next/image";
// import WaitingButton from "@/components/atoms/waitinglistbutton/WaitingButton";

// const WaitingTestPage = () => {
//   const [isWaitModal, setWaitModal] = React.useState(false);

//   const openWaitListModal = () => {
//     setWaitModal(!isWaitModal);
//   };
//   return (
//     <div>
//       <Header
//         title={`Waiting List Page`}
//         description={`Learn about waiting list page`}
//       />
//       <WaitingNavBar onClick={openWaitListModal} />
//       <main className={style.main}>
//         <div className={style.hero}>
//           <div className={style.hero_left}>
//             ...meet the <span className={style.span}>world’s first</span>
//             Gift-as-a-Service(GaaS) application that gives you 100% spending
//             freedom.
//           </div>
//           <div className={style.hero_right}>
//             <Image
//               src="/images/BlackGroup19.png"
//               width={330}
//               height={270}
//               alt=""
//               className={style.img}
//             />
//           </div>
//         </div>
//         <div className={style.btn}>
//           <WaitingButton
//             text={`join the waiting list`}
//             onClick={openWaitListModal}
//           />
//         </div>

//         <div className={style.description}>
//           <p className={style.description_p}>
//             <span>We remove every annoying obstacle from your way,</span> from
//             inflated fees, inconvenient regulations, taxes, transaction
//             restrictions to spending. You can now chill, request, send, receive,
//             and spend your gift anyhow and anywhere you like. Currency agnostic
//             Send Text, Text Convert without limits or restrictions. Join the
//             Waiting List Text Pay without Sell globally Text Text Text Text
//           </p>
//         </div>
//       </main>
//       <WaitListEmail mailModal={isWaitModal} />
//     </div>
//   );
// };

// export default WaitingTestPage;
