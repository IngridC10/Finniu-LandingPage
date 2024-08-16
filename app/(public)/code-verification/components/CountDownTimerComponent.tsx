"use client";
import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

type CountDownTimerProps = {
  onFinish: () => void;
};

const CountDownTimer = ({ onFinish }: CountDownTimerProps) => {
  const RenderTimeComponent = ({
    remainingTime,
  }: {
    remainingTime: number;
  }) => {
    useEffect(() => {
      if (remainingTime === 0 && onFinish) {
        onFinish();
      }
    }, [remainingTime, onFinish]);

    return (
      <div className="time-wrapper">
        <div className="time">{remainingTime}</div>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={110}
          size={110}
          colors={["#9381FF", "#0D3A5C"]}
          colorsTime={[0, 40]}
        >
          {({ remainingTime }) => (
            <RenderTimeComponent remainingTime={remainingTime} />
          )}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default CountDownTimer;
