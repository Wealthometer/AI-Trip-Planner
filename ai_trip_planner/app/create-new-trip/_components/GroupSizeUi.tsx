import { House, Plane, Sailboat, Ship, Wine } from "lucide-react";
import React from "react";

export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in exploration",
    icon: <Plane className="text-green-500 h-5 w-5" />,
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: <Wine color="crimson" className="h-5 w-5" />,
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: <House color="blue" className=" h-5 w-5" />,
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: <Ship color="red" className="text-green-500 h-5 w-5" />,
    people: "5 to 10 People",
  },
];

function GroupSizeUi({onSelectedOption}:any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 items-center mt-1 gap-2">
      {SelectTravelesList.map((item, index) => (
        <div
          key={index}
          className="p-3 border rounded-2xl bg-white hover:border-primary cursor-pointer"
          onClick={()=>onSelectedOption(item.title+":"+item.people)}
        >
          <h2>{item.icon}</h2>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default GroupSizeUi;
