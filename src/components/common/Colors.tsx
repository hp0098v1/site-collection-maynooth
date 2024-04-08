import { useState } from "react";

type Props = {
  colors: string[];
  className?: string;
};

const Colors = ({ colors, className }: Props) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {colors.map((color) => (
        <Color
          key={color}
          color={color}
          isSelected={color === selectedColor}
          onClick={(color) => {
            setSelectedColor(color);
          }}
        />
      ))}
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

export default Colors;
