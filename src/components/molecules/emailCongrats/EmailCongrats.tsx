/* eslint-disable react/no-unescaped-entities */

import style from "@/components/molecules/emailCongrats/EmailCongrats.module.scss";

const EmailCongrats = ({ setOkOpen }: any) => {
  return (
    <div>
      <div className={style.congratulation_container}>
        <div className={style.congratulation}>
          <div className={style.message}>
            <h1>
              🎉 <br />
              Congratulations!
            </h1>
            <p>
              You've secured your spot on our waiting list for early access!
            </p>

            <button className={style.ok_btn} onClick={() => setOkOpen(false)}>
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCongrats;
