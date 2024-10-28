const Error = () => {
  return (
    <div className="h-screen bg-slate-700 w-full flex flex-col gap-2 justify-center items-center">
      <h1 className="text-red-800 border-2 bg-red-400 border-red-600 rounded-lg text-3xl py-2 px-3">
        Something unexpected happened {`:${"\\"}`}
      </h1>
      <a
        href="/Bireysel-Silahlanma"
        className="text-red-800 border-2 border-red-600 rounded-lg text-3xl py-1 px-3 hover:text-green-400 hover:border-green-300 duration-300">
        Go Back
      </a>
    </div>
  );
};

export default Error;
