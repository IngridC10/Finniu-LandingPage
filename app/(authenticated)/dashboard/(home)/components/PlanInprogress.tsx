import { getUserInfoAllInvestmentAction } from "@/app/actions/userInfoAllInvestmentAction";
import { Key, useEffect, useState } from "react";
import PlanInProgressCard from "./PlanInProgressCard";

const PlansInProgress = ({
  isSolesState,
  isDarkModeState,
}: {
  isSolesState: any;
  isDarkModeState: boolean;
}) => {
  const isSoles = isSolesState;
  const [dataReport, setDataReport] = useState<null | any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserInfoAllInvestmentAction();
        setDataReport(result);
      } catch (error) {
        setError("Unable to fetch data" as any);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <p
          className={`text-xl ${isDarkModeState ? "text-white" : "text-black"}`}
        >
          Loading...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <p
          className={`text-xl ${isDarkModeState ? "text-white" : "text-black"}`}
        >
          {error}
        </p>
      </div>
    );
  }

  if (!dataReport) {
    return (
      <div className="flex items-center justify-center">
        <p
          className={`text-xl ${isDarkModeState ? "text-white" : "text-black"}`}
        >
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
          isDarkModeState
            ? "bg-gradient-to-b from-darkBlueColor to-blueCustom"
            : "bg-gradient-to-t from-cremeColor to-blueCustom"
        }`}
      >
        <div className="h-full overflow-auto">
          <div
            className={`font-bold flex-col justify-start items-start ${
              isDarkModeState ? "text-blueCustom" : "text-darkBlueColor"
            }`}
          >
            <h1 className="flex text-xl">Mis planes en curso</h1>
            {dataReportInCourse.length > 0 ? (
              <div>
                {dataReportInCourse.map(
                  (plan: any, index: Key | null | undefined) => (
                    <PlanInProgressCard
                      key={index}
                      isDarkModeState={isDarkModeState}
                      {...plan}
                      isSoles={isSoles}
                    />
                  )
                )}
              </div>
            ) : (
              <div>
                <p
                  className={`text-xl m-24 ${
                    isDarkModeState ? "text-white" : "text-black"
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
