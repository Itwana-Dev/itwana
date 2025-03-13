const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;

  return (
    <div className="w-full transform transition duration-500 hover:scale-105">
      <div className="relative z-10 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800 dark:shadow-gray-700">
        <div className="mb-4 text-center">
          {price && (
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
              ${price}
              {duration && (
                <span className="text-lg font-medium text-gray-500 dark:text-gray-300">
                  /{duration}
                </span>
              )}
            </h3>
          )}
          <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-2">
            {packageName}
          </h4>
        </div>

        <p className="mb-6 text-gray-600 dark:text-gray-400 text-center">
          {subtitle}
        </p>

        <div className="mb-6 border-t border-gray-200 dark:border-gray-700 pt-6">
  <button
    onClick={() => window.open("https://wa.link/4zj2ia", "_blank")}
    className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-600 transition-colors duration-300"
  >
    Comprar
  </button>
</div>


        <div>{children}</div>
      </div>
    </div>
  );
};

export default PricingBox;
