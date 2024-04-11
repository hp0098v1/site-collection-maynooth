import { useState } from "react";

type Props = {
  colors: string[];
  className?: string;
  colorComp?: "color1" | "color2";
};

const Colors = ({ colors, className, colorComp = "color1" }: Props) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {colors.map((color) => {
        return colorComp === "color1" ? (
          <Color
            key={color}
            color={color}
            isSelected={color === selectedColor}
            onClick={(color) => {
              setSelectedColor(color);
            }}
          />
        ) : (
          <Color2
            key={color}
            color={color}
            isSelected={color === selectedColor}
            onClick={(color) => {
              setSelectedColor(color);
            }}
          />
        );
      })}
    </div>
  );
};

type ColorProps = {
  color: string;
  onClick: (value: string) => void;
  isSelected: boolean;
};

const Color = ({ color, isSelected, onClick }: ColorProps) => {
  return (
    <div
      onClick={() => onClick(color)}
      className={`box-content w-4 h-4 rounded-full cursor-pointer border-white ${
        isSelected ? "border-2" : ""
      }`}
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

/* AI COlOR STYLES */

/* <div className="flex flex-col flex-1 justify-center self-stretch p-1.5 rounded-full border border-orange-400 border-solid stroke-[1px]">
      <div className="shrink-0 w-2.5 h-2.5 bg-orange-400 rounded-full" />
    </div> */

const Color2 = ({ color, isSelected, onClick }: ColorProps) => {
  return (
    <div
      onClick={() => onClick(color)}
      className={`size-4 rounded-full cursor-pointer p-2`}
      style={{
        backgroundColor: color,
        boxShadow: isSelected ? `0 0 0 3px white, 0 0 0 4px ${color}` : "",
      }}
    ></div>
  );
};

export default Colors;
