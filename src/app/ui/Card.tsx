export const Card: React.FC<{ title: string, text: string }> = ({ title, text }) => (
  <div className="w-[200px] h-[200px] bg-white rounded shadow flex flex-col items-center justify-center p-4">
      <h3 className="font-semibold mb-2 text-center">{title}</h3>
      <p className="text-center">{text}</p>
  </div>
);