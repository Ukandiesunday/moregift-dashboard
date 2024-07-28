/* eslint-disable react/no-unescaped-entities */

import style from "@/components/organisms/waitingemail/WaitingListEmail.module.scss";
import { useState } from "react";

const WaitListEmail = ({ setMailModal, mailModal, setOkOpen }: any) => {
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  // const [error, setError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setEmail("");
    setLocation("");
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const activateButton = validateEmail(email) && location !== "";

  const handleClose = () => {
    setMailModal(false);
    setOkOpen(true);
  };

  return (
    <div className={style.overlay}>
      <div
        className={
          mailModal
            ? style.email_container
            : `${style.email_container} ${style.mail_top}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.wrapper}>
          <div className={style.top}>
            <h1 className={style.h1}>
              🤓Ready to be part of something special?
            </h1>
            <p className={style.p}>
              Reserve your spot among the first group of users to test our app.
              Don't wait!
            </p>
          </div>
          <div className={style.bottom}>
            <form onSubmit={handleSubmit} className={style.form}>
              <div className={style.item}>
                <label htmlFor="email">
                  Email
                  <span>*</span>
                </label>
                <div className={style.input_container}>
                  <input
                    className={style.input}
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className={style.item}>
                <label htmlFor="location">
                  Location
                  <span>*</span>
                </label>
                <div className={style.input_container}>
                  <select
                    className={style.input}
                    name="location"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Your Country
                    </option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="China">China</option>
                    <option value="Uk">UK</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Netherland">Netherland</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Japan">Japan</option>
                    <option value="Europe">Europe</option>
                    <option value="Ivory Coast">Ivory Coast</option>
                    <option value="North Korea">North Korea</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Mexico">Mexico</option>
                    <option value="London">London</option>
                    <option value="France">France</option>
                    <option value="Cape Town">Cape Town</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Japan">Japan</option>
                    <option value="	Argentine"> Argentine</option>
                    <option value="Algeria">Algeria</option>
                    <option value="	Belgium"> Belgium</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Russia">Russia</option>
                    <option value="	Cap-Vert"> Cap-Vert</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombie">Colombie</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Denmark">Denmark</option>
                    <option value="	Egypt"> Egypt</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="	Ethiopia"> Ethiopia</option>
                    <option value="	Finland"> Finland</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="	Guinea"> Guinea</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="	Hungary"> Hungary</option>
                    <option value="	Iceland"> Iceland</option>
                    <option value="	India"> India</option>
                    <option value="	Indonesia"> Indonesia</option>
                    <option value="	Ireland"> Ireland</option>
                    <option value="Iraq">Iraq</option>
                    <option value="	Italy"> Italy</option>
                    <option value="	Jamaica"> Jamaica</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Israel">Israel</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className={
                  activateButton ? style.btn2 : `${style.btn2} ${style.active}`
                }
                onClick={handleClose}
                disabled={!activateButton}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitListEmail;
