import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import CountUp from "react-countup";
import logoSmallDark from "@/images/dashboard/History/logoSmallDark.png";
import Finniu from "@/images/dashboard/History/logoSmallLight.png";
import { useTheme } from "@/app/contexts/ThemeProvider";
import { useCurrency } from "@/app/contexts/CurrencyProvider";
import ModalComponent from "./ModalComponent";

type InvestmentData = {
  invesmentInCourse: any[];
  invesmentFinished: any[];
  invesmentInProcess: any[];
  invesmentCanceled: any[];
  countPlanesActive: number;
  [key: string]: any;
};

type DataReport = {
  invesmentInSoles: InvestmentData[];
  invesmentInDolares: InvestmentData[];
};

interface TransactionsProps {
  filterSelectedState: string;
  dataReport: DataReport;
}

const Transactions: React.FC<TransactionsProps> = ({
  filterSelectedState,
  dataReport,
}) => {
  const { darkMode } = useTheme();
  const { isSoles } = useCurrency();
  const defaultBankLogoUrl = darkMode ? logoSmallDark : Finniu;

  const [modalOpenState, setModalOpenState] = useState(false);
  const [voucherImages, setVoucherImages] = useState<string[]>([]);

  const dataSoles = dataReport.invesmentInSoles ?? [];
  const dataDolar = dataReport.invesmentInDolares ?? [];
  const selectedData = isSoles ? dataSoles : dataDolar;

  const dataToRender =
    selectedData[0]?.[getSelectedInvestmentKey(filterSelectedState)] || [];

  const hasData = dataToRender.length > 0;

  const toggleModal = (voucherImages: string[] = []) => {
    setModalOpenState(!modalOpenState);
    setVoucherImages(voucherImages);
  };

  function getSelectedInvestmentKey(filterState: string): string {
    switch (filterState) {
      case "inCourse":
        return "invesmentInCourse";
      case "toConfirm":
        return "invesmentInProcess";
      case "finish":
        return "invesmentFinished";
      case "rejected":
        return "invesmentCanceled";
      default:
        return "";
    }
  }

  return (
    <div>
      <div
        className={`flex justify-center items-center xxl:w-[1260px] xl:w-[1000px] md:w-[563px] lg:w-[604px] max-h-[250px] rounded-2xl lg:m-5 md:m-0 lg:p-0 md:p-2 ${
          darkMode ? "bg-customBlack" : "bg-white"
        } shadow-md`}
      >
        <div className="flex flex-row content-center gap-2.5 leading-none text-left h-[220px] mt-3 lg: ml-[-16px] md:ml-0 xxl:overflow-y-auto xxl:overflow-x-hidden xl:overflow-y-auto xl:overflow-x-auto lg:overflow-x-auto lg:overflow-y-auto md:overflow-auto">
          <div className="containers-overflow">
            <div
              className={`container-operation ${
                darkMode ? "dark-mode-table" : "light-mode-table"
              }`}
            >
              {hasData ? (
                <table className="w-[1251px]">
                  <tbody>
                    <tr>
                      <th>Banco</th>
                      <th>Código de transacción</th>
                      <th>Monto</th>
                      <th>Plazo</th>
                      <th>Rentabilidad</th>
                      <th>Intereses mensuales</th>
                      {filterSelectedState !== "rejected" && <th>Voucher</th>}
                      <th>Inicio</th>
                    </tr>
                    {dataToRender.map(
                      (
                        item: {
                          depositBank: { bankLogoUrl: any };
                          operationCode:
                            | string
                            | number
                            | bigint
                            | boolean
                            | React.ReactElement<
                                any,
                                string | React.JSXElementConstructor<any>
                              >
                            | Iterable<React.ReactNode>
                            | React.ReactPortal
                            | Promise<React.AwaitedReactNode>
                            | null
                            | undefined;
                          amount: number;
                          deadline: {
                            name:
                              | string
                              | number
                              | bigint
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | React.ReactPortal
                              | Promise<React.AwaitedReactNode>
                              | null
                              | undefined;
                          };
                          rentabilityPercent: number;
                          rentabilityPerMonth: number | null;
                          boucherList: { boucherImage: any }[];
                          startDateInvestment: {
                            split: (arg0: string) => number[];
                          };
                        },
                        index: React.Key | null | undefined
                      ) => (
                        <tr key={index}>
                          <td>
                            <Image
                              className="m-auto img-banks"
                              src={
                                item.depositBank?.bankLogoUrl ||
                                defaultBankLogoUrl
                              }
                              alt="finniu"
                              width={164}
                              height={164}
                              priority
                            />
                          </td>
                          <td>{item.operationCode}</td>
                          <td>
                            {isSoles ? "S/" : "$"}{" "}
                            <CountUp
                              start={0}
                              end={item.amount}
                              duration={2.75}
                              separator=","
                              decimals={2}
                            />
                          </td>
                          <td> {item.deadline?.name}</td>
                          <td>
                            <CountUp
                              start={0}
                              end={item.rentabilityPercent}
                              duration={2.75}
                              separator=","
                              decimals={2}
                            />
                            {"%"}
                          </td>
                          <td>
                            {isSoles ? "S/" : "$"}
                            {item.rentabilityPerMonth !== null ? (
                              <CountUp
                                start={0}
                                end={item.rentabilityPerMonth}
                                duration={2.75}
                                separator=","
                                decimals={2}
                              />
                            ) : (
                              "-"
                            )}
                          </td>
                          {filterSelectedState !== "rejected" && (
                            <td
                              style={{
                                color: darkMode ? "#A2E6FA" : "#262525",
                              }}
                            >
                              <button
                                onClick={() =>
                                  toggleModal(
                                    item.boucherList.map(
                                      (boucher: { boucherImage: any }) =>
                                        boucher.boucherImage
                                    )
                                  )
                                }
                              >
                                {item.boucherList.length !== 0 && (
                                  <FontAwesomeIcon
                                    icon={faEye}
                                    className="eye-icon"
                                  />
                                )}
                              </button>
                            </td>
                          )}
                          <td>
                            {new Date(
                              item.startDateInvestment.split("-")[0],
                              item.startDateInvestment.split("-")[1] - 1,
                              item.startDateInvestment.split("-")[2]
                            ).toLocaleDateString("es-PE", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            })}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              ) : (
                <div
                  className={`flex flex-col justify-center text-xl text-center ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  <p>No encontramos información....</p>
                </div>
              )}

              <ModalComponent
                isOpen={modalOpenState}
                onClose={toggleModal}
                voucherImages={voucherImages}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
