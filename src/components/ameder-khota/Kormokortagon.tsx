import { kormokortaData } from "../../../data/data";

const Kormokortagon = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5 ">
      {kormokortaData.map((data) => (
        <div
          key={data.id}
          className="bg-gray-100 p-5 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-500 group"
        >
          <div className="h-[350px] w-full overflow-hidden">
            <img
              src={data.img}
              alt={data.name}
              className="h-full w-full object-cover rounded-t-lg group-hover:scale-105 transition-all duration-500 "
            />
          </div>
          <div className="bg-brand/50 rounded-b-lg py-5">
            <h2 className="head-1 text-white! text-center">{data.name}</h2>
            <h2 className="para-2 mt-1.5">{data.deg}</h2>
            <p className="para-1 text-center mt-2 font-medium">{data.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kormokortagon;
