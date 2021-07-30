import React from "react";
import "./IsDownload.scss";

export const IsDownload: React.FC = () => {
  const [percentDone, setPercentDone] = React.useState(0);
  const time = 100000;
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPercentDone((old) => {
        if (old >= 99) {
          clearInterval(interval);
        }
        return old + 1;
      });
    }, time / 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="dawn">
        {percentDone >= 1000 ? (
          <p className="dawn_file">Go!</p>
        ) : (
          <p className="dawn_file"> загрузка игровых файлов </p>
        )}
        <p className="dawn_lo"> {percentDone}</p>{" "}
        <p className="dawn_pro">/ 100%</p> <p className="dawn_mb">128 мб/с</p>
      </div>
      <div className="progress-div" style={{ width: `${percentDone}vw` }}>
        <div className="progress" />
      </div>
    </div>
  );
};
