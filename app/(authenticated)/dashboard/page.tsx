"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/app/contexts/ThemeProvider";
import {
  getIsSolesCookies,
  saveIsSolesCookies,
} from "@/app/cookies/client/IsSolesCookies";
import { useRouter } from "next/navigation";
import { getProfileCookies } from "@/app/cookies/client/UserProfileCookies";
import { getTokenCookies } from "@/app/cookies/client/TokenCookies";
import SwitchSolesComponent from "./(home)/components/SwitchSolesComponent";
import InprogressInvestmentReport from "./(home)/components/InProgressInvestmentReport";
import RevenuePaymentsReport from "./(home)/components/RevenuePaymentsReport";
import CurveChartComponent from "./(home)/components/CurveChartComponent";
import PlansInProgress from "./(home)/components/PlanInprogress";
import Tour from "./tour/page";
import { getShowTourCookies } from "@/app/cookies/client/ShowTourCookies";

const Page = () => {
  const router = useRouter();
  const { darkMode } = useTheme();
  const [isSolesState, setIsSolesState] = useState(
    getIsSolesCookies() === "true"
  );
  const [userName, setUserName] = useState("Usuario");
  const [tourVisibleState, setTourVisibleState] = useState(true);

  const [forceTour, setForceTour] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      setForceTour(searchParams.get("forceTourVisible"));
    }
  }, []);

  useEffect(() => {
    const token = getTokenCookies();
    if (!token) {
      router.push("/login");
      return;
    }

    const profile = getProfileCookies();
    if (profile && profile.firstName) {
      setUserName(profile.firstName);
    } else {
      console.error("No se pudo recuperar el perfil del usuario.");
    }

    if (forceTour === "true") {
      setTourVisibleState(true);
    } else {
      const showTour = getShowTourCookies();
      setTourVisibleState(showTour !== "false");
    }
  }, [router, forceTour]);

  const handleSwitchChange = () => {
    setIsSolesState(!isSolesState);
    saveIsSolesCookies(!isSolesState);
  };

  return (
    <main
      className={`relative flex h-full w-full ${
        darkMode ? "bg-backgroundDarkColor" : "bg-customBackgroundLight"
      }`}
    >
      <div className="flex flex-row w-screen h-full min-h-screen gap-15">
        {tourVisibleState && <Tour setTourVisibleState={setTourVisibleState} />}

        <div className="relative flex flex-col items-end w-full container">
          <div className="flex items-center w-full justify-between mb-10">
            <p
              className={`text-3xl font-bold flex w-[237px] flex-row justify-start ${
                darkMode ? "text-customLightBlue" : "text-darkBlueColor"
              }`}
            >
              Hola {userName}
            </p>

            <SwitchSolesComponent />
          </div>

          <div className="flex justify-center flex-col gap-[30px] md:flex-col lg:flex-col xl:flex-row w-full items-center lg:text-center mt-6">
            <div className="flex flex-col">
              <InprogressInvestmentReport />
            </div>
            <div className="flex flex-col">
              <RevenuePaymentsReport />
            </div>
          </div>

          <div className="flex justify-center flex-col gap-[30px] w-full md:flex-col lg:flex-col xl:flex-row items-center lg:text-center mt-6">
            <div className="flex flex-col">
              <CurveChartComponent />
            </div>
            <div className="flex flex-col mt-6">
              <PlansInProgress />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
