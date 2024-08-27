import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import CountUp from "react-countup";
import { getNextPaymentsAction } from "@/app/actions/getNextPaymentsActions";

const RevenuePaymentsReport = ({
  isDarkModeState,
  isSolesState,
}: {
  isDarkModeState: boolean;
  isSolesState: boolean;
}) => {
  const [dataReport, setDataReport] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNextPaymentsAction();
        if (
          !data ||
          !Array.isArray(data.paymentInSoles) ||
          !Array.isArray(data.paymentInDolares)
        ) {
          throw new Error("Unexpected data format");
        }

        const reportSoles = data.paymentInSoles;
        const reportDollar = data.paymentInDolares;

        setDataReport(isSolesState ? reportSoles : reportDollar);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        console.error(err);
      }
    };

    fetchData();
  }, [isSolesState]);

  const moneySymbol = isSolesState ? "S/ " : "$ ";
  const hasPayments = dataReport.length > 0;

  return (
    <div
      className={`body-container cursor-pointer flex flex-col justify-center p-8 ${
        isDarkModeState ? "bg-customBlack" : "bg-white"
      } ${
        isDarkModeState ? "text-white" : "text-black"
      } shadow-lg hover:shadow-xl w-[550px] h-[319px] rounded-[20px]`}
    >
      <div className="">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h1
              className={`text-lg font-bold ${
                isDarkModeState ? "text-customLightBlue" : "text-darkBlueColor"
              } text-center`}
            >
              Mis próximos pagos de intereses
            </h1>
          </div>
          <div>
            <Link href="/">
              <button
                className={`icon-revenue ${
                  isDarkModeState
                    ? "bg-customLightBlue text-darkBlueColor"
                    : "bg-darkBlueColor text-white"
                } flex items-center cursor-pointer ml-2 px-2 py-1 rounded-lg`}
                // onClick={handleClick}
              >
                Ver más
                <FontAwesomeIcon
                  className={`text-xs ${
                    isDarkModeState
                      ? "text-darkBlueColor"
                      : "text-customLightBlue"
                  } ml-2`}
                  icon={faArrowRight}
                />
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`flex flex-wrap gap-4 mt-4 ${
            !hasPayments ? "overflow-y-hidden" : "overflow-y-auto"
          } row-containers max-h-[198px] justify-center`}
        >
          {hasPayments ? (
            dataReport.map((payment, index) => (
              <div
                key={index}
                className={`card ${
                  isDarkModeState ? "bg-customBlack" : "bg-white"
                } border ${
                  isDarkModeState ? "border-customLightBlue" : "border-black"
                } rounded-xl w-52 h-44 flex flex-wrap gap-2.5 justify-center items-end pt-2`}
              >
                <div className="flex w-[160px] h-full items-center justify-center min-w-[160px]">
                  <div className="flex flex-col items-center justify-center">
                    <div>
                      <h2
                        className={`text-[17px] font-bold ${
                          isDarkModeState ? "text-white" : "text-black"
                        } text-center`}
                      >
                        {payment.planName}
                      </h2>
                    </div>
                    <div>
                      <h3
                        className={`text-2xl ${
                          isDarkModeState ? "text-white" : "text-black"
                        } text-center`}
                      >
                        {moneySymbol}
                        <CountUp
                          start={0}
                          end={Number(payment.rentability ?? 0)}
                          duration={2.75}
                          separator=","
                          decimals={2}
                        />
                      </h3>
                    </div>
                    <div>
                      <h4
                        className={`text-sm ${
                          isDarkModeState ? "text-white" : "text-black"
                        } text-center`}
                      >
                        Fecha de pago
                      </h4>
                    </div>
                    <h5
                      className={`text-lg ${
                        isDarkModeState ? "text-white" : "text-black"
                      } text-center`}
                    >
                      {payment.paymentDate}
                    </h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ height: "calc(100% - 50px)" }}>
              <p
                className={`text-xl m-20 font-bold ${
                  isDarkModeState ? "text-white" : "text-black"
                } text-center`}
              >
                {isSolesState
                  ? "Usted no cuenta con planes en soles."
                  : "Usted no cuenta con planes en dólares."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RevenuePaymentsReport;
