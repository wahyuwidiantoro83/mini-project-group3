import { HiChevronDown, HiOutlineArrowPath } from "react-icons/hi2";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const FindEvent = (props) => {
  return (
    <>
      <Navbar />
      <div className="main-content min-h-screen">
        <div className="flex px-10">
          <div className="flex flex-col lg:w-[20%] py-6 gap-6">
            <div className="Flex-col">
              <div className="flex items-center px-6 justify-between">
                <span className="text-xl font-bold">Filter</span>
                <span className="w-10 h-10 p-2">
                  <HiOutlineArrowPath size={"100%"} />
                </span>
              </div>
              <div className="flex"></div>
            </div>
            <div className="Flex-col">
              <div className="flex items-center px-6 justify-between">
                <span className="text-xl font-normal">Offline Only</span>
                <div class="inline-flex items-center">
                  <div class="relative inline-block h-4 w-8 cursor-pointer rounded-full">
                    <input
                      id="switch-component"
                      type="checkbox"
                      class="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-pink-500 peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
                    />
                    <label
                      for="switch-component"
                      class="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-pink-500 peer-checked:before:bg-pink-500"
                    >
                      <div
                        class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                        data-ripple-dark="true"
                      ></div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex"></div>
            </div>
            <div className="Flex-col">
              <div className="flex items-center px-6 justify-between">
                <span className="text-xl font-normal">Location</span>
                <span className="w-10 h-10 p-2">
                  <HiChevronDown size={"100%"} />
                </span>
              </div>
              <div className="flex"></div>
            </div>
            <div className="Flex-col">
              <div className="flex items-center px-6 justify-between">
                <span className="text-xl font-normal">Category</span>
                <span className="w-10 h-10 p-2">
                  <HiChevronDown size={"100%"} />
                </span>
              </div>
              <div className="flex"></div>
            </div>
          </div>
          <div className="flex lg:w-[80%]"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindEvent;
