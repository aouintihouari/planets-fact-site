const Footer = ({ planetData, loading }) => {
  if (loading || !planetData) {
    return (
      <footer className="mx-2 my-8 grid-cols-4 md:mx-auto md:grid md:w-11/12 md:gap-6 lg:w-9/12">
        <div className="text-center text-white">Loading planet stats...</div>
      </footer>
    );
  }

  return (
    <footer className="mx-2 my-8 grid-cols-4 md:mx-auto md:grid md:w-11/12 md:gap-6 lg:w-9/12">
      <div className="border-opacity-20 mb-2 flex items-center justify-between border-1 border-white/20 px-4 py-6 md:mb-0 md:block">
        <p className="font-sans-s lg:heading-h4 text-white opacity-75 md:mb-2 md:text-[8px] lg:text-[11px]">
          ROTATION TIME
        </p>
        <h3 className="lg:heading-h2 font-sans text-[20px] text-white md:text-[24px] lg:text-[40px]">
          {planetData.rotation || "58.6 DAYS"}
        </h3>
      </div>
      <div className="border-opacity-20 mb-2 flex items-center justify-between border-1 border-white/20 px-4 py-6 md:mb-0 md:block">
        <p className="font-sans-s lg:heading-h4 text-white opacity-75 md:mb-2 md:text-[8px] lg:text-[11px]">
          REVOLUTION TIME
        </p>
        <h3 className="lg:heading-h2 font-sans text-[20px] text-white md:text-[24px] lg:text-[40px]">
          {planetData.revolution || "87.97 DAYS"}
        </h3>
      </div>
      <div className="border-opacity-20 mb-2 flex items-center justify-between border-1 border-white/20 px-4 py-6 md:mb-0 md:block">
        <p className="font-sans-s lg:heading-h4 text-white opacity-75 md:mb-2 md:text-[8px] lg:text-[11px]">
          RADIUS
        </p>
        <h3 className="lg:heading-h2 font-sans text-[20px] text-white md:text-[24px] lg:text-[40px]">
          {planetData.radius || "2,439.7 km"}
        </h3>
      </div>
      <div className="border-opacity-20 mb-2 flex items-center justify-between border-1 border-white/20 px-4 py-6 md:mb-0 md:block">
        <p className="font-sans-s lg:heading-h4 text-white opacity-75 md:mb-2 md:text-[8px] lg:text-[11px]">
          AVERAGE TEMP.
        </p>
        <h3 className="lg:heading-h2 font-sans text-[20px] text-white md:text-[24px] lg:text-[40px]">
          {planetData.temperature || "430°c"}
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
