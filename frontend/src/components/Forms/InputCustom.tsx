interface InputCustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  placeholder: string;
  htmlFor: string;
  error: string | undefined;
}
export default function InputCustom({
  label,
  id,
  placeholder,
  htmlFor,
  error,
  ...rest
}: InputCustomProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        {...rest}
        id={id}
        type="text"
        placeholder={placeholder}
        className="h-full rounded p-2 border border-yellow-400 bg-transparent
               text-gray-800 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm"
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}
