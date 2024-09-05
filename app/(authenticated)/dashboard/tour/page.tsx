"use client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  getShowTourCookies,
  removeShowTourCookies,
  saveShowTourCookies,
} from "@/app/cookies/client/ShowTourCookies";
import TourStepCero from "./components/TourStepCero";
import TourInvestment from "./components/TourInvestment";
import TourHistory from "./components/TourHistory";
import TourCalendar from "./components/TourCalendar";
import TourSolesDolares from "./components/TourSolesDolares";
import TourNotification from "./components/TourNotification";
import { useRouter } from "next/router";

const Tour = ({
  setTourVisibleState,
}: {
  setTourVisibleState: (visible: boolean) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  //   const navigate = useNavigate();

  useEffect(() => {
    const showTour = getShowTourCookies();
    if (showTour === "true") {
      setTourVisibleState(false);
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [setTourVisibleState]);

  const handleContinue = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleCloseTour = () => {
    setTourVisibleState(false);
    saveShowTourCookies("false");
    removeShowTourCookies();
  };

  function getTourStep(pageNumber: number) {
    switch (pageNumber) {
      case 1:
        return (
          <TourStepCero
            handleContinue={handleContinue}
            handleCloseTour={handleCloseTour}
            setCurrentPage={setCurrentPage}
          />
        );
      case 2:
        return <TourInvestment handleContinue={handleContinue} />;

      case 3:
        return <TourHistory handleContinue={handleContinue} />;

      case 4:
        return <TourCalendar handleContinue={handleContinue} />;

      case 5:
        return <TourSolesDolares handleContinue={handleContinue} />;

      case 6:
        return <TourNotification handleCloseTour={handleCloseTour} />;
      default:
        return null;
    }
  }

  const tourStyles: { [key: string]: React.CSSProperties } = {
    container: {
      overflowX: "hidden",
      overflowY: "hidden",
      height: "100%",
      width: "100%",
      position: "absolute",
      zIndex: 1000,
    },
    bodyTour: {
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(13, 58, 92, 0.9)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    bodyContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      lineHeight: "1.8",
      width: "100%",
    },
    bodyText: {
      height: "151px",
      fontSize: "25px",
      marginLeft: "140px",
    },
    rowButtons: {
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      marginTop: "180px",
      justifyContent: "start",
      marginLeft: "290px",
    },
    span: {
      color: "#a2e6fa",
    },
    button1: {
      width: "153px",
      height: "60px",
      backgroundColor: "#0d3a5c",
      borderRadius: "26px",
      border: "none",
      fontSize: "24px",
      color: "#ffffff",
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    closedIcon: {
      height: "42px",
      color: "#A2E6FA",
      position: "fixed",
      top: "38px",
      right: "45px",
      margin: "15px",
      cursor: "pointer",
    },
  };

  return (
    <div style={tourStyles.container}>
      <div className="bodyTour">
        <FontAwesomeIcon
          onClick={() => {
            // navigate("/home?forceTour=false");

            handleCloseTour();
            saveShowTourCookies("false");
          }}
          icon={faTimes}
          style={tourStyles.closedIcon}
        />
        <div style={tourStyles.bodyContainer}>{getTourStep(currentPage)}</div>
      </div>
    </div>
  );
};

export default Tour;
