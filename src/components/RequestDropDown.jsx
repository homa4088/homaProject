import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { requests } from "../services/RequestsService";
import { Link } from "react-router-dom";

const RequestDropDown = () => {
  return (
    <div className="py-5 ">
      <Menu as="div" className="relative inline-block text-right">
        <div>
          <Menu.Button className="flex w-full justify-center items-center rounded-md  px-4 py-2 text-sm font-medium text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <p>لیست درخواست ها</p>
            <ChevronDownIcon className=" ml-2 h-5 w-5  " />
          </Menu.Button>
        </div>

        <Menu.Items className="absolute right-0 mt-2 w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            {requests.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <Link to={`/request/${item.id}`}>
                    <button
                      className={`${
                        active ? "bg-gray-700 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {item.title}
                    </button>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default RequestDropDown;
