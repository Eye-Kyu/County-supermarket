type ValidationMessageProps = {
  id?: string;
  message?: string;
};

export default function ValidationMessage({ id, message }: ValidationMessageProps) {
  if (!message) return null;

  return (
    <p id={id} className="mt-1 text-xs font-medium text-red-600" role="alert">
      {message}
    </p>
  );
}
