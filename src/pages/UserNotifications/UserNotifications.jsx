import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import employer from "../../assets/61802b25e543f0595b8c08e4b4902fcf.png";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    title: "Arabic Call Center",
    content: "Hr Shorted List You",
    date: "10/28/12",
    company: "Louis Vuitton",
    logo:  employer
  },
  {
    title: "Medical Assistant",
    content: "Hr Shorted List You",
    date: "10/28/12",
    company: "Barone LLC.",
    logo:  employer
  },
  {
    title: "President of Sales",
    content: "Hr Shorted List You",
    date: "10/28/12",
    company: "Binford Ltd.",
    logo:  employer
  },
  {
    title: "Nursing Assistant",
    content: "Hr Shorted List You",
    date: "10/28/12",
    company: "Acme Co.",
    logo:  employer
  },
  {
    title: "Web Designer",
    content: "Hr Shorted List You",
    date: "10/28/12",
    company: "Abstergo Ltd.",
    logo:  employer
  },
  {
    title: "Arabic Call Center",
    content: "Hr Shorted List You",
    date: "10/28/12",
    company: "Louis Vuitton",
    logo:  employer
  },
  {
    title: "Medical Assistant",
    content: "Hr Shorted List You",
    date: "10/28/12",
    company: "Barone LLC.",
    logo:  employer
  },
  {
    title: "President of Sales",
    content: "Hr Shorted List You",
    date: "10/28/12",
    company: "Binford Ltd.",
    logo:  employer
  },
  {
    title: "Nursing Assistant",
    content: "Hr Shorted List You",
    date: "10/28/12",
    company: "Acme Co.",
    logo:  employer
  },
  {
    title: "Web Designer",
    content: "Hr Shorted List You",
    date: "10/28/12",
    company: "Abstergo Ltd.",
    logo:  employer
  },
];

const UserNotifications = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="w-full h-full">
      <div className="md:pl-10  w-full h-full">
        <h1 className="font-bold text-4xl">Notifications</h1>
        <div className="mt-7 p-4 bg-fill-bg-color border border-border-color rounded-md  overflow-y-auto max-h-[60vh]">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full md:w-1/3 border border-border-color p-2 rounded-lg focus:outline-none text-dark-text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="overflow-x-auto bg-transparent">
              <table className="w-full border-collapse">
                <thead className="bg-main-color text-white">
                  <tr>
                    <th className="p-3 text-left text-xl">Title</th>
                    <th className="p-3 text-left text-xl">Content</th>
                    <th className="p-3 text-left text-xl">Date</th>
                    <th className="p-3 text-left text-xl">By</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((job, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100">
                      <td className="p-3 text-main-color font-semibold cursor-pointer">
                        {job.title}
                      </td>
                      <td className="p-3 text-main-text font-semibold">{job.content}</td>
                      <td className="p-3 text-dark-text">{job.date}</td>
                      <td className="p-3 flex items-center gap-2 text-sm">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-8 h-8 rounded"
                        />
                        {job.company}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </div>
  );
};

export default UserNotifications;
