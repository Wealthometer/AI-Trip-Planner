"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TextUiProps {
  label: string;
  onSubmit: (value: string) => void;
}

const TextUi: React.FC<TextUiProps> = ({ label, onSubmit }) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex flex-col gap-3 mt-3">
      <p className="text-sm font-medium">{label}</p>
      <Input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        placeholder="Type your answer..."
        className="w-full"
      />
      <Button
        onClick={() => {
          if (value.trim()) {
            onSubmit(value.trim());
            setValue("");
          }
        }}
      >
        Confirm
      </Button>
    </div>
  );
};

export default TextUi;
