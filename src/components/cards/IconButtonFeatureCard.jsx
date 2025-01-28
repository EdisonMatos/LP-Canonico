export default function IconButtonFeatureCard(props) {
  const { icon, title, paragraph, className, children } = props;

  return (
    <div
      className={`w-full p-0 tablet1:w-[200px] desktop1:w-[240px] flex flex-col items-center  desktop1:p-0 ${className}`}
    >
      <div className="h-[64px] w-[64px] mb-[24px]  rounded-md flex justify-center items-center text-bgSectionDark bg-primary">
        {icon}
      </div>
      <h1 className="h-auto font-bold font-mainFont text-title1 text-center mb-[16px] text-bgSectionDark">
        {title}
      </h1>
      <p className="text-left text-black opacity-70 font-mainFont w-[90%] pb-4">
        {paragraph}
      </p>
      {children}
    </div>
  );
}
