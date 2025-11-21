interface ExampleComponentProps {
  title: string;
  description?: string;
}

export default function ExampleComponent({ title, description }: ExampleComponentProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      {description && (
        <p className="mt-2 text-gray-600">{description}</p>
      )}
    </div>
  );
}
