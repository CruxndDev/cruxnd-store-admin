const GeneralStats = ({ data }) => {
  return (
    <div className="w-full flex justify-between mb-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="md:text-sm xl:text-[16px] w-[24%] xl:w-[22%] flex justify-between items-center custom-shadow rounded-xl px-8 lg:px-6 py-6"
        >
          <div>
            <div className="text-sm font-medium mb-2">{item.name}</div>
            <h4 className="font-semibold text-xl">{item.value}</h4>
          </div>
          <div className="text-4xl">{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default GeneralStats;
