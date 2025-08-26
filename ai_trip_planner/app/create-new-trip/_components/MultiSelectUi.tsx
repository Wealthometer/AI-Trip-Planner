"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface MultiSelectUiProps {
  options: string[];
  onSelected: (value: string) => void;
}

const MultiSelectUi: React.FC<MultiSelectUiProps> = ({ options, onSelected }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="flex flex-col gap-3 mt-3">
      <p className="text-sm font-medium">Pick your travel interests:</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt: string) => (
          <Button
            key={opt}
            variant={selected.includes(opt) ? "default" : "outline"}
            onClick={() => toggleOption(opt)}
            className="rounded-full"
          >
            {opt}
          </Button>
        ))}
      </div>
      <Button
        onClick={() => {
          if (selected.length > 0) {
            onSelected(selected.join(", "));
            setSelected([]);
          }
        }}
      >
        Confirm
      </Button>
    </div>
  );
};

export default MultiSelectUi;
