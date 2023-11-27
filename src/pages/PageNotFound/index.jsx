const PageNotFound = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex w-full h-full justify-center items-center">
        <div className="flex flex-col items-center">
          <span className="font-bold text-8xl text-gray-800">404</span>
          <span className="font-bold text-2xl text-gray-800">Page Not Found</span>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
