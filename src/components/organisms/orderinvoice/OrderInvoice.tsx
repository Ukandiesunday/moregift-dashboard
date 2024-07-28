import style from "@/components/organisms/orderinvoice/OrderInvoice.module.scss";
import Image from "next/image";

const OrderInvoice = () => {
  return (
    <div className={style.order_invoice_container}>
      <div className={style.order}>
        <div className={style.invoice}>Order Invoice</div>
        <div>
          <div className={style.total}>Total</div>
          <button className={style.button1}>₦ 200,010.00</button>
        </div>
        <div className={style.send_details}>
          <div className={style.send_details_top}>
            <span>Sending</span>
            <span className={style.span_amt}>₦ 200,000</span>
          </div>
          <hr />
          <div className={style.send_details_bottom}>
            <p className={style.p}>
              Charges on Card <br />
              <span className={style.span}>Zenith Global Pay</span>
            </p>
            <span className={style.span_amt}>₦ 10,000</span>
          </div>
        </div>
        <button className={style.button2}>
          Send Gift Card
          <Image src="/icons/wsend.svg" alt="" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default OrderInvoice;
