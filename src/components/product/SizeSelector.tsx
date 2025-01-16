"use client";

interface Props {
  avaibleSize: string[];
  selectedSize: string | null;
  onSizeSelect: (size: string) => void;
}

export const SizeSelector = ({ avaibleSize, selectedSize, onSizeSelect }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles:</h3>
      <div className="flex">
        {avaibleSize.map((size) => (
          <button
            key={size}
            className={`
              mx-2 
              text-lg 
              bg-white 
              border-2
              p-2 
              rounded 
              font-bold
              transition-all 
              duration-200

              ${size === selectedSize 
                ? "border-zinc-950 shadow-sm" 
                : "border-gray-200"
              }
            `}
            onClick={() => onSizeSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};