const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
    <path d="M6 10l-2.5-2.5 1-1L6 8l4.5-4.5 1 1L6 10z" />
  </svg>
);

const crossIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
    <path
      d="M4 4l8 8M12 4l-8 8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OfferList = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  return (
    <div className="flex items-start space-x-3 mb-4">
      <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary bg-opacity-20 text-primary transition duration-300">
        {status === "active" ? checkIcon : crossIcon}
      </div>
      <p className="text-sm text-body-color leading-relaxed">{text}</p>
    </div>
  );
};

export default OfferList;
