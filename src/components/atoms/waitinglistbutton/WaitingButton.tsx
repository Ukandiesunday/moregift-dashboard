import style from "@/components/atoms/waitinglistbutton/WaitingButton.module.scss";

const WaitingButton = ({ text, handleMailOpen }: any) => {
  return (
    <button type="button" className={style.button} onClick={handleMailOpen}>
      {text}
    </button>
  );
};

export default WaitingButton;
