"use client"
import { faChartLine, faMoneyBill, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

const iconStyle = "w-[32px] h-[32px] text-black";
const titleStyle = "text-black text-[16px] font-normal";


const MovilOperations = () => {
    return (
        <section className="flex flex-col w-full justify-center items-center  min-h-[100%] p-6 bg-bgOperations gap-4  md:hidden">
            <div className="bg-bgOperationsContianer flex flex-col justify-center items-center w-full h-[100px]  rounded-md ">
                <div className="flex flex-row justify-center items-center">
                    <FontAwesomeIcon
                        icon={faMoneyBill}
                        className={iconStyle}
                    />
                    <div className="w-[10px]"></div>
                    <CountUp
                        start={0}
                        end={12.1}
                        duration={2.5}
                        separator=""
                        decimals={1}
                        decimal=","
                        prefix="+"
                        suffix=" M"
                        style={{ fontSize: "32px", fontWeight: "700" }}
                    />
                </div>
                <p className={titleStyle}>Soles invertidos</p>
            </div>
            <div className="bg-bgOperationsContianer flex flex-col justify-center items-center w-full h-[100px]  rounded-md ">
                <div className="flex flex-row justify-center items-center">
                    <FontAwesomeIcon
                        icon={faChartLine}
                        className={iconStyle}
                    />
                    <div className="w-[10px]"></div>
                    <CountUp
                        start={0}
                        end={820}
                        duration={2.7}
                        prefix="+"
                        style={{ fontSize: "32px", fontWeight: "700" }}
                    />
                </div>
                <p className={titleStyle}>Operaciones</p>
            </div>
            <div className="bg-bgOperationsContianer flex flex-col justify-center items-center w-full h-[100px]  rounded-md ">
                <div className="flex flex-row justify-center items-center">
                    <FontAwesomeIcon
                        icon={faUser}
                        className={iconStyle}
                    />
                    <div className="w-[10px]"></div>
                    <CountUp
                        start={0}
                        end={390}
                        duration={2.5}
                        prefix="+"
                        style={{ fontSize: "32px", fontWeight: "700" }}
                    />
                </div>
                <p className={titleStyle}>Inversionistas</p>
            </div>
        </section>
    )
}

export default MovilOperations;