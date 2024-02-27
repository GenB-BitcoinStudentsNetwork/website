"use client";

import { ReactBtcPayButton } from "react-btcpay-paybutton";

const BtcPayButton = () => {
  return (
    // <ReactBtcPayButton
    //   btcPayDomain="https://btcpay0.voltageapp.io" // Your BTCPay Server URL
    //   storeId="G25NGUycXAJ69hDsSLEyxBjdzib7zVbYy1b8pbzq2bG6" // Your BTCPay Server Store ID
    //   // Additional options as needed (see Step 3 below)
    //   imageShow={false}
    // />

    <form method="POST" action="https://btcpay0.voltageapp.io/api/v1/invoices">
      <input
        type="hidden"
        name="storeId"
        value="G25NGUycXAJ69hDsSLEyxBjdzib7zVbYy1b8pbzq2bG6"
      />
      <input type="hidden" name="currency" value="USD" />
      <input
        type="submit"
        name="submit"
        value={"Donate with BTCPAY"}
        alt="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"
        className={`py-[1.5rem] px-[2rem] bg-primary text-white rounded-lg text-base font-semibold font-sans leading-normal gap-[0.5rem] cursor-pointer hover:bg-dark-green hover:text-white`}
      />
    </form>
  );
};

export default BtcPayButton;
