import { useState } from "react";
import { amenitiesList } from "../content/amenitiesList";
import { amenitiesListType } from "../type/type";
import { BsChevronDown } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";

const AmenitiesList = () => {
  const [listItems, setListItems] =
    useState<amenitiesListType[]>(amenitiesList);

  const handleChecked = (id: number) => {
    const newList = listItems.map((item: amenitiesListType) =>
      item.id === id
        ? { ...item, active: !item.active }
        : { ...item, active: false }
    );
    setListItems(newList);
  };

  const handleHover = (id: number) => {
    const newList = listItems.map((item: amenitiesListType) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    );
    setListItems(newList);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-3">
      <div className="lg:col-span-2">
        <h1 className="text-red text-lg font-bold uppercase ">Amenities</h1>
        {listItems.map((item: amenitiesListType) => (
          <div
            key={item.id}
            className="flex flex-col py-3 px-5 justify-between items-center "
            onClick={() => {
              handleChecked(item.id);
            }}
          >
            <div className="flex justify-between w-full items-center mb-4">
              <h1>{item.title}</h1>
              <BsChevronDown
                className={`lg:hidden ${
                  item.active ? "rotate-180" : ""
                } transition-all duration-300`}
              />
              <div
                onMouseOver={() => {
                  if (window.innerWidth > 1024) {
                    handleHover(item.id);
                  }
                }}
                className=" hidden lg:flex rounded-md w-[40px] h-[40px] hover:bg-red  items-center justify-center group" // أضف "group"
              >
                <BiShow
                  className=" text-red text-2xl transition-all duration-400 group-hover:text-white group-hover:scale-110" 
                />
              </div>
            </div>
            <AnimatePresence>
              {item.active && (
                <motion.div
                  className="w-full mt-4 lg:hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <hr className="w-full border-[#f3f3f3]" />
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        {listItems.map((item: amenitiesListType) => (
          <div
            key={item.id}
            style={{ transform: `translateY(${item.id * 50}px)` }}
          >
            <AnimatePresence>
              {item.active && (
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-[50px] md:mt-[110px]">
          <p className="text-lg font-bold mb-2.5 max-w-[420px] text-black">Those who want to experience a more elevated lifestyle</p>
          <p className="text-lg  max-w-[580px] text-black">
          can consider acquiring one of the limited-edition 5 bedroom townhouses from the 'super-luxury' category.
          </p>
      </div>
    </section>
  );
};

export default AmenitiesList;
