import { kormochariData } from "../../../data/data";

const Kormochari = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5 ">
      {kormochariData.map((data) => (
        <div
          key={data.id}
          className=" rounded-xl bg-brand/15 border border-gray-200 hover:shadow-xl transition-all duration-500 group flex flex-col justify-between h-full"
        >
          <div className="h-[280px] md:h-[360px] w-full overflow-hidden">
            <img
              src={data.img}
              alt={data.name}
              className="h-full w-full object-cover rounded-t-lg transition-all duration-500 "
            />
          </div>
          <div className=" rounded-b-lg py-5">
            <h2 className="head-1  text-center">{data.name}</h2>
            <h2 className="para-2 text-black! mt-1.5">{data.deg}</h2>
            <p className="para-1 text-center mt-2 font-medium text-black!">
              {data.phone}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kormochari;
