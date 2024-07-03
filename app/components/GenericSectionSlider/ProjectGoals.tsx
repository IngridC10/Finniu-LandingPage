import React from "react";
import Image from "next/image";
import CustomLeftArrow from "../Section4/CustomLeftArrow";
import CustomRightArrow from "../Section4/CustomRightArrow";
import ProjectYourGoals from "/images/ProjectYourGoals.png";

const ProjectGoals = () => {
  return (
    <section className=" w-full bg-white flex flex-col min-h-screen justify-center items-center">
      <div className=" container flex flex-row justify-between  items-center">
        <div className=" w-[621px] text-right ">
          <p className="text-[50px] font-bold">Proyecta tus metas</p>

          <p className="text-[36px] text-blackColorText ">
            Estamos listos para crecer contigo
          </p>
          <p className="text-[24px]">
            Podrás proyectar los rendimientos mensuales y totales de tu
            inversión de manera rápida y sencilla.
          </p>
          <div className="flex flex-row justify-end mt-16 gap-7">
            <CustomLeftArrow />
            <CustomRightArrow />
          </div>
        </div>
        <Image
          src={ProjectYourGoals}
          alt="ProjectYourGoals"
          width={600}
          style={{ height: "auto" }}
        />
      </div>
    </section>
  );
};

export default ProjectGoals;
