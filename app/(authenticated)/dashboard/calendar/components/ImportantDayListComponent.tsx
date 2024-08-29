import React, { ReactNode, useEffect, useState } from "react";
import { useTheme } from "@/app/contexts/ThemeProvider";
import { getImportantDaysAction } from "@/app/actions/importantDaysAction";

const ImportantDayListComponent = () => {
  const { darkMode } = useTheme();
  const [importantDays, setImportantDays] = useState<
    {
      description: ReactNode;
      date: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getImportantDaysAction();
        setImportantDays(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {importantDays.map((day, index) => (
        <div
          key={index}
          className="w-[422px] flex flex-col p-3 ml-3 border-customBlueRentability border-4 rounded-xl bg-customLightBlue"
        >
          <div className="text-container">
            <div className="flex justify-between date">
              <h1
                className={`font-bold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                {day.date}
              </h1>
            </div>
            <div className="flex justify-between amount">
              <h2 className={`${darkMode ? "text-white" : "text-black"}`}>
                {day.description}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImportantDayListComponent;
