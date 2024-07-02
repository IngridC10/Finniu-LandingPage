import React from "react";
import Image from "next/image";
import VirtualWallet from "/images/VirtualWallet.png";
import CustomLeftArrow from "../Section4/CustomLeftArrow";
import CustomRightArrow from "../Section4/CustomRightArrow";

const Wallet = () => {
  return (
    <section className=" w-full bg-lightSkyBlue flex flex-col min-h-screen justify-center items-center">
      <div className=" container flex flex-row justify-center items-center">
        <div className=" w-[621px] text-right ">
          <p className="text-[50px] font-bold">Billetera virtual</p>

          <p className="text-[24px]">
            Pronto podrás disfrutar de nuestra billetera virtual, una
            herramienta adicional para gestionar de manera conveniente tus
            inversiones.
          </p>
          <div className="flex flex-row justify-end mt-16 gap-7">
            <CustomLeftArrow />
            <CustomRightArrow />
          </div>
        </div>
        <Image
          src={VirtualWallet}
          alt="Wallet"
          width={350}
          style={{ height: "700px", marginLeft: "74px" }}
        />
      </div>
    </section>
  );
};

export default Wallet;
