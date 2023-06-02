function Overview({
  forecast,
  icon,
  title,
}: {
  forecast: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="border-b border-b-rock-blue flex items-center py-2">
      <div className="bg-white flex h-8 items-center justify-center mr-1 rounded-full text-4xl text-rock-blue w-8">
        {icon}
      </div>
      <p className="basis-full flex justify-between">
        <span>{title}:</span>
        <span className="font-bold">{forecast}</span>
      </p>
    </div>
  );
}

export default Overview;
