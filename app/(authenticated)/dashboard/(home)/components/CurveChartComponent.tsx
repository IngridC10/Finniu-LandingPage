import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendDown,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import loadingImage from "@/images/Dashboard/Home/loading.png";
import {
  AreaChart,
  BarChart,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getRentabilityGraphAction } from "@/app/actions/rentabilityGraphAction";
import { useTheme } from "@/app/contexts/ThemeProvider";

type CurveChartComponentProps = {
  isDarkModeState: boolean;
  isSolesState: boolean;
};

const CurveChartComponent: React.FC<CurveChartComponentProps> = ({
  isSolesState,
}) => {
  const isSoles = isSolesState;
  const { darkMode } = useTheme();
  const [selectedValue, setSelectedValue] = useState("all_months");
  const [dataValues, setDataValues] = useState<
    { name: string; Monto: number; date: Date; year: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [isLineChart, setIsLineChart] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getRentabilityGraphAction(selectedValue);
        const { rentabilityInPen, rentabilityInUsd } = result;

        const reportData = isSoles ? rentabilityInPen : rentabilityInUsd;

        const formattedData = reportData.map((item) => ({
          name:
            item.month.slice(0, 1).toUpperCase() +
            item.month.slice(1, 3).toLowerCase(),
          Monto: item.amountPoint,
          date: new Date(item.date),
          year: item.year,
        }));

        formattedData.sort((a, b) => a.date.getTime() - b.date.getTime());
        setDataValues(formattedData);
      } catch (error) {
        console.error("Error fetching rentability graph:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedValue, isSoles]);

  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };

  const moneySymbol = isSoles ? "S/" : "$";
  const formatYAxis = (Monto: any) => `${moneySymbol}${Monto}`;

  const shouldDisplayChart = !loading && dataValues.length > 0;

  const chartWidths: Record<string, number> = {
    all_months: 1200,
    quarter_year: 500,
    mid_year: 500,
    year: 1000,
    two_years: 1200,
    three_years: 1200,
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-[550px] h-[347px] mt-6 cursor-pointer rounded-[20px] p-5 ${
          darkMode ? "bg-black" : "bg-white"
        } shadow-md hover:shadow-lg `}
      >
        <div className="flex justify-end gap-2.5">
          <button
            onClick={() => setIsLineChart(true)}
            className={`w-[30px] h-[30px] shadow-md ${
              isLineChart
                ? darkMode
                  ? "bg-darkBlueColor"
                  : "bg-blueCustom"
                : darkMode
                ? "transparent"
                : "bg-white"
            } border-1 border-white rounded-[5px] ml-[10px] relative`}
          >
            <FontAwesomeIcon
              style={{
                color: darkMode ? "#A2E6FA" : "#0D3A5C",
              }}
              icon={faArrowTrendDown}
            />
          </button>
          <button
            onClick={() => setIsLineChart(false)}
            className={`w-[30px] h-[30px] shadow-md ${
              isLineChart
                ? darkMode
                  ? "transparent "
                  : "bg-white"
                : darkMode
                ? "bg-darkBlueColor"
                : "bg-blueCustom"
            } border-1 border-white rounded-[5px] ml-1 mr-1`}
          >
            <FontAwesomeIcon
              style={{ color: darkMode ? "#A2E6FA" : "#0D3A5C" }}
              icon={faChartSimple}
            />
          </button>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-between pr-2">
          <h1
            className={`text-xl font-bold ${
              darkMode ? "text-customLightBlue" : "text-darkBlueColor"
            }`}
          >
            Mi rentabilidad
          </h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <select
              className="m-0 rounded bg-blueCustom"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="all_months">Todos</option>
              <option value="quarter_year">3 meses </option>
              <option value="mid_year">6 meses </option>
              <option value="year">12 meses </option>
              <option value="two_years">24 meses </option>
              <option value="three_years">36 meses </option>
            </select>
          </div>
        </div>

        {shouldDisplayChart ? (
          <div className="h-full overflow-x-auto max-h-[260px] overflow-y-hidden">
            <div className="flex flex-col w-full h-full ">
              <ResponsiveContainer
                className="recharts-responsive-container"
                width={chartWidths[selectedValue]}
              >
                {isLineChart ? (
                  <AreaChart data={dataValues}>
                    <CartesianGrid horizontal={true} vertical={false} />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: darkMode ? "#ffffff" : "#0D3A5C" }}
                    />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div
                              style={{
                                backgroundColor: darkMode
                                  ? "#A2E6FA"
                                  : "#f3f3f3",
                                padding: "10px",
                                color: "#000000",
                                fontWeight: "bold",
                                textAlign: "center",
                              }}
                            >
                              <p>{`${label} - ${payload[0].payload.year}`}</p>
                              <p>{`${moneySymbol} ${payload[0].value}`}</p>
                            </div>
                          );
                        }

                        return null;
                      }}
                    />

                    <YAxis
                      tickFormatter={formatYAxis}
                      tick={{ fill: darkMode ? "#ffffff" : "#0D3A5C" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="Monto"
                      stroke={darkMode ? "#a2e6fa" : "#a2e6fa"}
                      fill={darkMode ? "#0D3A5C" : "#a2e6fa"}
                      strokeWidth={4}
                      dot={{ r: 6, fill: "#8FE6FF" }}
                    />
                  </AreaChart>
                ) : (
                  <BarChart data={dataValues} barSize={50}>
                    <CartesianGrid horizontal={true} vertical={false} />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: darkMode ? "#ffffff" : "#0D3A5C" }}
                    />
                    <YAxis
                      tickFormatter={formatYAxis}
                      tick={{ fill: darkMode ? "#ffffff" : "#0D3A5C" }}
                    />
                    <Bar
                      isAnimationActive={false}
                      dataKey="Monto"
                      fill={darkMode ? "#0D3A5C" : "#a2e6fa"}
                      onMouseEnter={(data, index, e) => {
                        (e.target as HTMLElement).setAttribute(
                          "fill",
                          darkMode ? "#a2e6fa" : "#0D3A5C"
                        );
                      }}
                      onMouseLeave={(data, index, e) => {
                        (e.target as HTMLElement).setAttribute(
                          "fill",
                          darkMode ? "#0D3A5C" : "#a2e6fa"
                        );
                      }}
                    />
                    <Tooltip
                      cursor={false}
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div
                              style={{
                                backgroundColor: darkMode
                                  ? "#A2E6FA"
                                  : "#f3f3f3",
                                padding: "10px",
                                color: "#000000",
                                fontWeight: "bold",
                                textAlign: "center",
                              }}
                            >
                              <p>{`${label} - ${payload[0].payload.year}`}</p>
                              <p>{`${moneySymbol} ${payload[0].value}`}</p>
                            </div>
                          );
                        }

                        return null;
                      }}
                    />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            {loading ? (
              <Image
                src={loadingImage}
                alt="loading"
                className="flex items-center justify-center w-52"
              />
            ) : (
              <p
                className={`text-xl m-24 font-bold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                {isSoles
                  ? "Usted no cuenta con planes en soles."
                  : "Usted no cuenta con planes en dólares."}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurveChartComponent;
