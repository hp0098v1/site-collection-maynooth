const productDimensions = [
  { label: "Height (cm)", value: "80" },
  { label: "Width (cm)", value: "188" },
  { label: "Depth (cm)", value: "96" },
  { label: "Weight (kg)", value: "62" },
  { label: "Arm dimensions (HWD)", value: "60 x 16 x 56 cm" },
  { label: "Packaging dimensions", value: "1 :80 x 193 x 96cm" },
  { label: "Seat dimensions (HWD)", value: "48 x 154 x 65 cm" },
  { label: "Size", value: "3 seat sofa bed" },
];

const productDetails = [
  { label: "Assembly", value: "Legs to be fitted" },
  { label: "Fabric composition", value: "100% Polyester" },
  { label: "Filling", value: "Fibre and Foam" },
  { label: "Foam specification", value: "33kg/cbm" },
  { label: "Foam type", value: "Polyethylene" },
  { label: "Caring instructions", value: "Professional cleaning only" },
  { label: "Sofa bed usage", value: "Occasional" },
  { label: "SKU", value: "SOFORS225PNK-UK" },
];

const DimantionsAndDetails = () => {
  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-8 container mt-8">
      <img
        loading="lazy"
        src="/assets/images/product/dimantions.png"
        alt="dimantions"
      />

      <section>
        <h2 className="text-2xl font-bold pb-2 border-b">ابعاد</h2>

        <div className="flex gap-5 justify-between self-center mt-4 max-w-lg">
          <div className="flex flex-col gap-8">
            {productDimensions.map((dimension, index) => (
              <div key={index} className={"text-sm"}>
                {dimension.label}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {productDimensions.map((dimension, index) => (
              <div key={index} className={`text-sm`}>
                {dimension.value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-2xl mt-8">
        <h2 className="text-2xl font-bold pb-2 border-b">جزییات محصول</h2>

        <div className="flex gap-5 justify-between self-center mt-4 max-w-lg">
          <div className="flex flex-col gap-8">
            {productDetails.map((detail, index) => (
              <div key={index} className={"text-sm"}>
                {detail.label}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {productDetails.map((detail, index) => (
              <div key={index} className={`text-sm`}>
                {detail.value}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DimantionsAndDetails;
