
import { Switch } from "@headlessui/react";
import { useState } from "react";

const Notification = () => {
  const [enabled, setEnabled] = useState({
    all: false,
    inApp: false,
    inEmail: false,
  });

  const handleToggle = (key) => {
    setEnabled((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <div className="w-full">
      <div className="md:pl-10 w-fit lg:w-3/5">
        <h1 className="font-bold text-4xl">Notifications</h1>
        <div className="mt-7">
          <div className="my-6 flex justify-start items-center border-b border-border-color pb-4">
            <Switch
              checked={enabled.all}
              onChange={()=>handleToggle('all')}
              className="group inline-flex h-8 w-16 items-center rounded-full bg-gray-200
               transition data-[checked]:bg-green-500 mr-6 shadow-inner"
            >
              <span className="size-6 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-9" />
            </Switch>
            <div className="">
              <h3 className="font-medium">All Notifications</h3>
              <p className="text-lg text-border-color">
                Nec, posuere non felis duis massa vitae aliquet{" "}
              </p>
            </div>
          </div>

          <div className="my-6 flex justify-start items-center border-b border-border-color pb-4">
            <Switch
              checked={enabled.inApp}
              onChange={()=>handleToggle('inApp')}
              className="group inline-flex h-8 w-16 items-center rounded-full bg-gray-200
               transition data-[checked]:bg-green-500 mr-6 shadow-inner"
            >
              <span className="size-6 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-9" />
            </Switch>
            <div className="">
              <h3 className="font-medium">Notifications In App</h3>
              <p className="text-lg text-border-color">
                Nec, posuere non felis duis massa vitae aliquet{" "}
              </p>
            </div>
          </div>

          <div className="my-6 flex justify-start items-center border-b border-border-color pb-4">
            <Switch
              checked={enabled.inEmail}
              onChange={()=>handleToggle('inEmail')}
              className="group inline-flex h-8 w-16 items-center rounded-full bg-gray-200
               transition data-[checked]:bg-green-500 mr-6 shadow-inner"
            >
              <span className="size-6 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-9" />
            </Switch>
            <div className="">
              <h3 className="font-medium">Notifications Email</h3>
              <p className="text-lg text-border-color">
                Nec, posuere non felis duis massa vitae aliquet{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
