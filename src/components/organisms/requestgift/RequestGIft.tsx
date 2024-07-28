import style from "@/components/organisms/requestgift/style.module.scss";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { useState } from "react";

const RequestGIft = ({ handlePageChange }: any) => {
  const [image, setImage] = useState("/images/profile.png");

  // handling checkbox change
  const [isChecked, setIsChecked] = useState(false);

  //setting all input fields  to state
  const [formData, setFormData] = useState({
    name: "",
    email: "",

    amount: "",
    note: "",
    checked: isChecked,
  });

  const handleInputChange = (e: any) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const completeFields = Object.values(formData).every((value) => value !== "");

  const handleSubmit = ({ e }: any) => {
    e.preventDefault();
  };
  return (
    <div className={style.send_gift}>
      <form action="" onSubmit={handleSubmit} className={style.form}>
        <div className={style.profile}>
          <label className={style.label} htmlFor="img">
            <Image
              src={image}
              width={50}
              height={50}
              alt="profile photo"
              style={{ borderRadius: "50%" }}
            />

            <input type="file" id="img" className={style.input} />
          </label>
          <span className={style.name}>
            Linda
            <Image
              src="/icons/verify.svg"
              width={20}
              height={20}
              alt="profile photo"
            />
          </span>
          <p className={style.text}>
            Hi Bayo. Show your girl some love. its my birthday next week. What’s
            up? you fit drop me like N200k?
          </p>
        </div>

        <div className={style.currency_container}>
          <div className={style.currency_wrapper}>
            <div className={style.currency}>
              <Image
                src="/icons/currency.svg"
                width={30}
                height={30}
                alt="currency"
                style={{ borderRadius: "50%" }}
              />

              <div>
                Sending currency <br />
                <span className={style.span2}>Tap to change</span>
              </div>
            </div>
            <div className={style.icon_container}>
              NGN
              <ChevronRightIcon className={style.icon} />
            </div>
          </div>
        </div>

        <div className={style.amount}>
          <label htmlFor="amount" className={style.label}>
            Enter Amount
            <span>*</span>
          </label>
          <input
            type="number"
            placeholder="N 200,000.00"
            max={50}
            name="amount"
            id="amount"
            onChange={handleInputChange}
            value={formData.amount}
            className={style.input_field}
          />
          <div className={style.note}>
            <div className={style.note_container}>
              <label htmlFor="checkbox" className={style.custom_checkbox}>
                <input
                  type="checkbox"
                  name="isChecked"
                  id="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                  checked={isChecked}
                  className={style.checkbox}
                />
                {isChecked && <span className={style.checkmark}>&#10004;</span>}
              </label>

              <label htmlFor="checkbox" className={style.label}>
                Add short note
                <span>*</span>
              </label>
            </div>

            <textarea
              className={`${style.textarea} ${isChecked ? style.check : ""}`}
              name="note"
              id=""
              cols={50}
              rows={3}
              onChange={handleInputChange}
              value={formData.note}
              placeholder="Add text not more than 200 words"
              maxLength={200}
              required
            ></textarea>
          </div>
        </div>

        <div className={style.email_fields}>
          <label htmlFor="email" className={style.label}>
            Sender email
            <span>*</span>
          </label>
          <p className={style.text}>Where do we send your receipt?</p>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleInputChange}
            value={formData.email}
            placeholder="Enter your email"
            className={style.input_field}
          />
        </div>

        <div className={style.name_fields}>
          <label htmlFor="name" className={style.label}>
            Sender First name
            <span>*</span>
          </label>
          <p className={style.text}>Let Linda know who sent her this Gift</p>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={handleInputChange}
            value={formData.name}
            placeholder="Enter your First name"
            className={style.input_field}
          />
        </div>

        <button
          disabled={!completeFields}
          type="submit"
          className={
            completeFields ? `${style.btn} ${style.active}` : style.btn
          }
          onClick={() => handlePageChange(1)}
        >
          Send Gift Card
          <Image
            src="/icons/wsend.svg"
            width={18}
            height={17}
            alt="profile photo"
          />
        </button>
      </form>
    </div>
  );
};

export default RequestGIft;
