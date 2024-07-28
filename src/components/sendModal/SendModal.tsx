import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "../button/Button";
import { IoIosClose } from "react-icons/io";
import { BsUpload } from "react-icons/bs";
import styles from "./sendModal..module.scss";

import { ImCheckmark } from "react-icons/im";

import { useState } from "react";

interface formDataDTO {
  isSchedule: boolean;
  isAddNote: boolean;
  title: string;
  note: string;
  isGreetingCard: boolean;
  files: null;
}

interface SendModalProp {
  toggleSendModal: () => void;
}
const SendModal = ({ toggleSendModal }: SendModalProp) => {
  const [formData, setFormData] = useState<formDataDTO>({
    title: "",
    note: "",
    isSchedule: false,
    isAddNote: false,
    isGreetingCard: false,
    files: null,
  });

  const handleInputChange = (e: any) => {
    const { value, name, type, file, checked } = e.target;
    setFormData({ ...formData, [name]: value });

    // checks if type is checkbox and updates the formData

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    }

    // checks if type is file and updates the formData

    if (type === "file") {
      setFormData({ ...formData, [name]: file });
    }
  };

  // handles form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className={styles.sendModalOverLay}>
      <div className={styles.sendModal}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.top}>
            <span className={styles.topRight}>Send</span>
            <div className={styles.topRight}>
              <Button
                type={"submit"}
                label={"checkout"}
                chevronRight={
                  <ChevronRightIcon
                    className={styles.icon}
                    width={18}
                    height={18}
                  />
                }
              />
              <button className={styles.closeButton} onClick={toggleSendModal}>
                <IoIosClose className={styles.closeIcon} />
              </button>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.formItems}>
              <label htmlFor="scheduleSend">
                <span className={styles.customCheckBoxContainer}>
                  {formData.isSchedule && (
                    <span className={styles.customCheckBox}>
                      <ImCheckmark />
                    </span>
                  )}
                </span>
                <input
                  type="checkbox"
                  name="isSchedule"
                  id="scheduleSend"
                  checked={formData.isSchedule}
                  onChange={handleInputChange}
                />
                Schedule Send
              </label>
              <hr />
            </div>

            <div className={styles.formItems}>
              <label htmlFor="event">
                Event title <span className={styles.asterisk}>*</span>
              </label>
              <input
                type="text"
                name="title"
                id="event"
                value={formData.title}
                placeholder="Enter event title"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.addNote}>
              <div className={styles.formItems}>
                <label htmlFor="addNote" className={styles.labelAddNote}>
                  <span className={styles.customCheckBoxContainer}>
                    {formData.isAddNote && (
                      <span className={styles.customCheckBox}>
                        <ImCheckmark />
                      </span>
                    )}
                  </span>
                  <input
                    type="checkbox"
                    name="isAddNote"
                    id="addNote"
                    checked={formData.isAddNote}
                    onChange={handleInputChange}
                  />
                  Add note<span className={styles.asterisk}>*</span>
                </label>
                {formData.isAddNote && (
                  <textarea
                    name="note"
                    id="addNote"
                    cols={50}
                    rows={3}
                    placeholder="Type your message"
                    value={formData.note}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                )}
              </div>
              {formData.isAddNote && (
                <label
                  htmlFor="greetingCard"
                  className={styles.labelAddGreetingCard}
                >
                  <span className={styles.customCheckBoxContainer}>
                    {formData.isGreetingCard && (
                      <span className={styles.customCheckBox}>
                        <ImCheckmark />
                      </span>
                    )}
                  </span>
                  <input
                    type="checkbox"
                    name="isGreetingCard"
                    id="greetingCard"
                    checked={formData.isGreetingCard}
                    onChange={handleInputChange}
                  />
                  Add greeting card
                </label>
              )}
            </div>
            <div className={styles.foot}>
              <div className={styles.desc}>
                <span>Upload Recipient</span> <span>0 added</span>
              </div>
              <div className={styles.uploadContainer}>
                <label htmlFor="recipient">
                  Add recipient <span className={styles.asterisk}>*</span>
                </label>
                <div className={styles.uploadSheet}>
                  <label htmlFor="recipient">
                    <BsUpload className={styles.uploadIcon} />
                    Upload from spreadsheet
                    <input
                      type="file"
                      id="recipient"
                      name="files"
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendModal;
