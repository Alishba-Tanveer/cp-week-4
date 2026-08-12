"use client";

interface ControlledInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function ControlledInput({
  value,
  onChange,
  placeholder = "Enter a value",
}: ControlledInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
    />
  );
}
