"use client";
import styles from "./btcpay.module.css";

const BtcPayButton = () => {
  return (
    <form
      method="POST"
      action="https://btcpay0.voltageapp.io/api/v1/invoices"
      className={`${styles["btcpay-form"]} ${styles["btcpay-form--block"]}`}
    >
      <input
        type="hidden"
        name="storeId"
        value="G25NGUycXAJ69hDsSLEyxBjdzib7zVbYy1b8pbzq2bG6"
      />
      <input type="hidden" name="currency" value="USD" />
      <input
        type="image"
        className={`${styles.submit}`}
        name="submit"
        src="https://btcpay0.voltageapp.io/img/paybutton/pay.svg"
        style={{ width: "209px" }}
        alt="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"
      />
    </form>
  );
};

export default BtcPayButton;
