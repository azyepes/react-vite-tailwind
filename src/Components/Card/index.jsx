const Card = ( data ) => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs  m-2 py-0.5 px-3">
          {data.data?.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data?.image}
          alt="headphones"
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2">
          +
        </div>
      </figure>
      <p className="flex justify-between items-center">
        <span className="font-light text-sm">{data.data?.name}</span>
        <span className="font-medium text-lg">${data.data?.price}</span>
      </p>
    </div>
  );
};

export { Card };
