import { getUserInfoAllInvestmentAction } from "@/app/actions/userInfoAllInvestmentAction";
import { Key, useEffect, useState } from "react";
import PlanInProgressCard from "./PlanInProgressCard";
import { useTheme } from "@/app/contexts/ThemeProvider";
import { useCurrency } from "@/app/contexts/CurrencyProvider";
const PlansInProgress: React.FC = () => {
  const { darkMode } = useTheme();
  const { isSoles } = useCurrency();
  const [dataReport, setDataReport] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserInfoAllInvestmentAction();
        setDataReport(result);
      } catch (err) {
        setError("Unable to fetch data");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <p className={`text-xl ${darkMode ? "text-white" : "text-black"}`}>
          Loading...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <p className={`text-xl ${darkMode ? "text-white" : "text-black"}`}>
          {error}
        </p>
      </div>
    );
  }

  if (!dataReport) {
    return (
      <div className="flex items-center justify-center">
        <p className={`text-xl ${darkMode ? "text-white" : "text-black"}`}>
          No data available
        </p>
      </div>
    );
  }

  const reportSoles = dataReport.invesmentInSoles[0];
  const reportDollar = dataReport.invesmentInDolares[0];
  const dataReportToUse = isSoles ? reportSoles : reportDollar;
  const dataReportInCourse = dataReportToUse.invesmentInCourse;

  return (
    <div>
      <div
        className={`cursor-pointer box-border p-[30px] max-w-[598px] min-w-[300px] h-[347px] w-[550px] rounded-[20px] shadow-md hover:shadow-lg ${
          darkMode
            ? "bg-gradient-to-b from-darkBlueColor to-blueCustom"
            : "bg-gradient-to-t from-cremeColor to-blueCustom"
        }`}
      >
        <div className="h-full overflow-auto">
          <div
            className={`font-bold flex-col justify-start items-start ${
              darkMode ? "text-blueCustom" : "text-darkBlueColor"
            }`}
          >
            <h1 className="flex text-xl">Mis planes en curso</h1>
            {dataReportInCourse.length > 0 ? (
              <div>
                {dataReportInCourse.map(
                  (plan: any, index: Key | null | undefined) => (
                    <PlanInProgressCard
                      key={index}
                      isDarkModeState={darkMode}
                      {...plan}
                      isSoles={isSoles} // Se usa el contexto para pasar isSoles
                    />
                  )
                )}
              </div>
            ) : (
              <div>
                <p
                  className={`text-xl m-24 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {isSoles
                    ? "Usted no cuenta con planes en soles."
                    : "Usted no cuenta con planes en dólares."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansInProgress;
