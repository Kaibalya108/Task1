import { FunctionComponent, useMemo, type CSSProperties } from "react";

type Property1OffType = {
  buttonText?: string;

  /** Style props */
  property1OffPosition?: CSSProperties["position"];
  property1OffTop?: CSSProperties["top"];
  property1OffLeft?: CSSProperties["left"];
  property1OffWidth?: CSSProperties["width"];
  toggleBackgroundColor?: CSSProperties["backgroundColor"];
  dotLeft?: CSSProperties["left"];
  dotBackgroundColor?: CSSProperties["backgroundColor"];
  dotBorder?: CSSProperties["border"];
  dotBoxSizing?: CSSProperties["boxSizing"];
};

const Property1Off: FunctionComponent<Property1OffType> = ({
  buttonText,
  property1OffPosition,
  property1OffTop,
  property1OffLeft,
  property1OffWidth,
  toggleBackgroundColor,
  dotLeft,
  dotBackgroundColor,
  dotBorder,
  dotBoxSizing,
}) => {
  const property1OffStyle: CSSProperties = useMemo(() => {
    return {
      position: property1OffPosition,
      top: property1OffTop,
      left: property1OffLeft,
      width: property1OffWidth,
    };
  }, [
    property1OffPosition,
    property1OffTop,
    property1OffLeft,
    property1OffWidth,
  ]);

  const toggleStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: toggleBackgroundColor,
    };
  }, [toggleBackgroundColor]);

  const dotStyle: CSSProperties = useMemo(() => {
    return {
      left: dotLeft,
      backgroundColor: dotBackgroundColor,
      border: dotBorder,
      boxSizing: dotBoxSizing,
    };
  }, [dotLeft, dotBackgroundColor, dotBorder, dotBoxSizing]);

  return (
    <div
      className="flex flex-row items-start justify-start gap-[16px] text-left text-base text-dimgray font-noto-sans"
      style={property1OffStyle}
    >
      <div className="relative w-[49px] h-6">
        <div
          className="absolute top-[-0.5px] left-[-0.5px] rounded-13xl bg-w-background box-border w-[50px] h-[25px] border-[1px] border-solid border-lightgray"
          style={toggleStyle}
        />
        <div
          className="absolute top-[2.5px] left-[27.5px] rounded-13xl bg-f4 box-border w-[19px] h-[19px] border-[1px] border-solid border-lightgray"
          style={dotStyle}
        />
      </div>
      <div className="relative leading-[24px] inline-block w-[303px] shrink-0">
        {buttonText}
      </div>
    </div>
  );
};

export default Property1Off;
