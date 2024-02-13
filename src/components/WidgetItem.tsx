export default function WidgetItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
        <div>
          <h5 className="text-xl text-gray-600 text-center">{title}</h5>
          <div className="mt-2 gap-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
