// import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

// import style from "@/components/organisms/toastFreedom/ToastFreedom.module.scss";

// import Image from "next/image";
// import { useGlobalContext } from "../../../../context/AppContext";
// const ToastFreedom = () => {
//   const { theme } = useGlobalContext();
//   return (
//     <div className={style.toast_container}>
//       <div className={style.top}>
//         <h1 className={style.h1}>Toast to freedom!🥂</h1>
//         <h2
//           className={theme === "light" ? style.h2 : `${style.h2} ${style.dark}`}
//         >
//           The world’s first one-stop shop for <br />
//           global Gift Cash sharing
//         </h2>
//         <p
//           className={theme === "light" ? style.p1 : `${style.dark} ${style.p1}`}
//         >
//           Now, you can enjoy that 100% Gift Cash transfer freedom you couldn’t
//           get from any Gift Cash <br />
//           transfer or gift platform on the planet.
//         </p>
//       </div>

//       <div className={style.bottom}>
//         <div className={style.row}>
//           <div
//             className={
//               theme === "light" ? `${style.col}` : `${style.col} ${style.dark}`
//             }
//           >
//             <button
//               className={
//                 theme === "light" ? style.icon : `${style.dark} ${style.icon}`
//               }
//             >
//               {theme === "light" ? (
//                 <Image
//                   src="/icons/conversion.svg"
//                   height={45}
//                   width={26}
//                   alt=""
//                 />
//               ) : (
//                 <Image
//                   src="/icons/wconversion.svg"
//                   height={45}
//                   width={20}
//                   alt=""
//                 />
//               )}
//             </button>
//             <h3
//               className={
//                 theme === "light" ? style.h3 : `${style.h3}  ${style.dark}`
//               }
//             >
//               We don’t discriminate against currencies
//             </h3>

//             <p
//               className={
//                 theme === "light"
//                   ? style.p1_right
//                   : `${style.dark} ${style.p1_right} `
//               }
//             >
//               Why worry about currency limitations when sending or donating Gift
//               Cash to anyone or cause when you can just send what you have?
//             </p>
//             <p
//               className={
//                 theme === "light"
//                   ? style.p2_right
//                   : `${style.p2_right} ${style.dark}`
//               }
//             >
//               Whether it’s US Dollars, GB pounds, EGY Pounds, Kenyan KES, Naira,
//               Euros, crypto, or any Gift Cash currency type. Just send it; we’ll
//               ensure your receivers get it the way they want it.
//             </p>
//           </div>

//           <div
//             className={
//               theme === "light"
//                 ? `${style.col} ${style.light}`
//                 : `${style.col} ${style.dark}`
//             }
//           >
//             <button
//               className={
//                 theme === "light" ? style.icon : `${style.dark} ${style.icon}`
//               }
//             >
//               {theme === "light" ? (
//                 <Image
//                   src="/icons/community.svg"
//                   height={26}
//                   width={26}
//                   alt=""
//                 />
//               ) : (
//                 <Image
//                   src="/icons/wcommunity.svg"
//                   height={26}
//                   width={26}
//                   alt=""
//                 />
//               )}
//             </button>
//             <h3
//               className={
//                 theme === "light" ? style.h3 : `${style.h3}  ${style.dark}`
//               }
//             >
//               We don’t discriminate against countries
//             </h3>

//             <p
//               className={
//                 theme === "light"
//                   ? style.p1_right
//                   : `${style.dark} ${style.p1_right} `
//               }
//             >
//               Why should your country or location limit your ability to easily
//               send Gift Cash to anyone or cause anywhere?
//             </p>
//             <p
//               className={
//                 theme === "light"
//                   ? style.p2_right
//                   : `${style.p2_right} ${style.dark}`
//               }
//             >
//               Diasporans sending Gift Cash back home and loved ones sending Gift
//               Cash abroad can now enjoy a better, cheaper, faster, and more
//               efficient sending experience from any country or location.
//             </p>
//           </div>

//           <div
//             className={
//               theme === "light"
//                 ? `${style.col} ${style.light}`
//                 : `${style.col} ${style.dark}`
//             }
//           >
//             <button
//               className={
//                 theme === "light" ? style.icon : `${style.dark} ${style.icon}`
//               }
//             >
//               {theme === "light" ? (
//                 <Image src="/icons/love.svg" height={45} width={26} alt="" />
//               ) : (
//                 <Image src="/icons/wlove.svg" height={45} width={26} alt="" />
//               )}
//             </button>
//             <h3
//               className={
//                 theme === "light" ? style.h3 : `${style.h3}  ${style.dark}`
//               }
//             >
//               We cover every occasion and need
//             </h3>

//             <p
//               className={
//                 theme === "light"
//                   ? style.p1_right
//                   : `${style.dark} ${style.p1_right} `
//               }
//             >
//               Why rely on separate platforms for sending Gift Cash to people and
//               getting crowd gifting when you can easily do both with moregift?
//             </p>
//             <p
//               className={
//                 theme === "light"
//                   ? style.p2_right
//                   : `${style.p2_right} ${style.dark}`
//               }
//             >
//               From local and international individual Gift Cash sharing to
//               global crowd gifting, meet the world’s only dedicated Gift Cash
//               platform tailored to efficiently serve every need and occasion.
//             </p>
//           </div>

//           <div
//             className={
//               theme === "light"
//                 ? `${style.col}  `
//                 : `${style.dark} ${style.col}  ${style.col4}`
//             }
//           >
//             <button
//               className={
//                 theme === "light" ? style.icon : `${style.dark} ${style.icon}`
//               }
//             >
//               {theme === "light" ? (
//                 <Image src="/icons/gavels.svg" height={45} width={26} alt="" />
//               ) : (
//                 <Image src="/icons/wgavel.svg" height={45} width={26} alt="" />
//               )}
//             </button>
//             <h3
//               className={
//                 theme === "light" ? style.h3 : `${style.h3}  ${style.dark}`
//               }
//             >
//               We adapt with international laws and regulations
//             </h3>
//             <p
//               className={
//                 theme === "light"
//                   ? style.p1_right
//                   : `${style.dark} ${style.p1_right} `
//               }
//             >
//               Why must local and international financial regulations limit your
//               ability to send Gift Cash around the world?
//             </p>
//             <p
//               className={
//                 theme === "light"
//                   ? style.p2_right
//                   : `${style.p2_right} ${style.dark}`
//               }
//             >
//               In a world of ever-changing policies, we employ both local and
//               international laws and regulations to ensure that your Gift Cash
//               sending expectations and experience remain optimal.
//             </p>
//           </div>
//         </div>
//         <div className={style.vector}>
//           <Image
//             src="/images/circlehero.png"
//             alt="side vector"
//             width={400}
//             height={400}
//             // layout="responsive"
//           />
//         </div>
//       </div>
//       <GetFreeButton />
//     </div>
//   );
// };

// export default ToastFreedom;
