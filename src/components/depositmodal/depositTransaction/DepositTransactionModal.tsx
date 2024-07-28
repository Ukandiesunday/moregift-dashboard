import { IoIosClose } from "react-icons/io";
import styles from "./styles.module.scss";
import Input from "@/components/input/Input";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { pinValidation } from "@/schema/formschema/formSchema";
import Button from "@/components/button/Button";
import Image from "next/image";

// interface DepositProps {
//   setDepositIndex: () => void;
// }

const DepositTransactionModal = ({ setDepositIndex }: any) => {
  const [isPin, setIsPin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const togglePin = () => {
    setIsPin(!isPin);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(pinValidation),
  });

  const handlePinSubmit = (data: any) => {
    console.log(data);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // const setIndex = () => {
  //   setDepositIndex(0);
  // };
  return (
    <div>
      {isOpen && (
        <div className={styles.depositTransactionOverlay}>
          <div className={styles.depositModal}>
            <div className={styles.modalTop}>
              <span className={styles.deposit}>Deposit</span>
              <div className={styles.topRight}>
                <Button
                  // onClick={setIndex}
                  label={"Back"}
                  className={"btnRowReverse  primaryBtnWhiteBackground"}
                  image={
                    <Image
                      alt=""
                      width={18}
                      height={18}
                      src="/icons/arrow-back.svg"
                    />
                  }
                />
                <Button
                  onClick={toggleOpen}
                  label={""}
                  className={"btnRowReverse  primaryBtnWhiteBackground"}
                  image={
                    <Image
                      alt=""
                      width={18}
                      height={18}
                      src="/icons/close.svg"
                    />
                  }
                />
              </div>
            </div>

            <div className={styles.detailsContainer}>
              <form
                action=""
                onSubmit={handleSubmit(handlePinSubmit)}
                className={styles.form}
              >
                <p className={styles.selectBank}>Enter Transaction PIN</p>
                <Input
                  iconButton={
                    <button type="button" onClick={togglePin}>
                      {isPin ? (
                        <FaEye className={styles.eyeIcon} />
                      ) : (
                        <FaEyeSlash className={styles.eyeIcon} />
                      )}
                    </button>
                  }
                  label={""}
                  placeholder={"Enter pin"}
                  errorMessage={errors?.pin?.message || ""}
                  register={register("pin")}
                  isError={!!errors?.pin}
                  type={isPin ? "text" : "password"}
                />

                <Button
                  type={"submit"}
                  label={"Deposit"}
                  disabled={!isDirty || errors?.pin}
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepositTransactionModal;
