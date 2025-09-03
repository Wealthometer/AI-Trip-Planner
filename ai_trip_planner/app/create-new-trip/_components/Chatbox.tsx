"use client";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea";
import { Loader, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import EmptyBoxState from "./EmptyBoxState";
import GroupSizeUi from "./GroupSizeUi";
import BudgetUi from "./BudgetUi";
import DateUi from "./DateUi";
import TextUi from "./TextUi";
import MultiSelectUi from "./MultiSelectUi";
import FinalUi from "./FinalUi";
import { set } from "date-fns";
import { on } from "node:stream";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUserDetail } from "@/app/provider";
import { v4 as uuidv4 } from "uuid";

type Message = {
  role: string;
  content: string;
  ui?: string;
};

// type Hotel = {
//   name: string;
//   stars: number;
//   address: string;
// };

type ItineraryItem = {
  day: number;
  activities: string[];
};

export type TripInfo = {
  // origin: ReactNode;
  origin: string;
  budget: string;
  destination: string;
  duration: string;
  group_size: string;
  // hotels: {
  //   hotel_name: string;
  //   hotel_address: string;
  //   price_per_night: string;
  //   rating: number;
  //   hotel_image_url: string;
  //   geo_coordinates: { latitude: number; longitude: number };
  //   description: string;
  // }[];
  hotels: any;
  itinerary: any;
};

type Hotel = {
  hotel_name: string;
  hotel_address: string;
  price_per_night: string;
  hotel_image_url: string;
  geo_coordinates: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  description: string;
};

type Activity = {
  place_name: string;
  place_details: string;
  place_image_url: string;
  geo_coordinates: {
    latitude: number;
    longitude: number;
  };
  place_address: string;
  ticket_pricing: string;
  time_travel_each_location: string;
  best_time_to_visit: string;
};


type DayPlan = {
  day: number;
  day_plan: string;
  best_time_to_visit_day: string;
  activities: Activity[];
}



function Chatbox() {
  //   const [messages, setMessages] = useState<Message[]>();
  //   const [userInput, setUserInput] = useState<string>();

  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [tripDetail, setTripDetail] = useState<TripInfo>();
  const messagesEndRef = React.useRef<HTMLDivElement | null>(null);
  const SaveTripDetail = useMutation(api.tripDetail.CreateTripDetail);
  const { userDetail, setUserDetail } = useUserDetail();
  

  const onSend = async (value?: string) => {
    const finalInput = value ?? userInput;

    if (!finalInput?.trim()) return;

    setLoading(true);
    setUserInput(""); // clear text area

    const newMsg: Message = {
      role: "user",
      content: finalInput,
    };

    setMessages((prev: Message[]) => [...prev, newMsg]);

    const result = await axios.post("/api/aimodel", {
      messages: [...messages, newMsg],
      isFinal: isFinal,
    });

    console.log("Trip", result.data);

    !isFinal &&
      setMessages((prev: Message[]) => [
        ...prev,
        {
          role: "assistant",
          content: result?.data?.resp,
          ui: result?.data?.ui,
        },
      ]);

    if (isFinal) {
      const tripPlan = result?.data?.trip_plan ?? {
        note: "No trip details generated",
      };
      setTripDetail(tripPlan);

      const tripId = uuidv4();
      await SaveTripDetail({
        tripDetail: tripPlan,
        tripId: tripId,
        uid: userDetail?._id,
      });
     } 

    setLoading(false);
  };

  const RenderGenerativeUi = (ui: string) => {
    switch (ui) {
      case "budget":
        return (
          <BudgetUi
            onSelectedOption={(v: string) => {
              onSend(v);
            }}
          />
        );
      case "groupSize":
        return (
          <GroupSizeUi
            onSelectedOption={(v: string) => {
              onSend(v);
            }}
          />
        );
      case "tripDuration":
        return (
          <DateUi
            onSelectedOption={(v: string) => {
              onSend(v);
            }}
          />
        );
      case "source":
        return (
          <TextUi
            label="Where are you starting from?"
            onSubmit={(v: string) => {
              onSend(v);
            }}
          />
        );
      case "destination":
        return (
          <TextUi
            label="Where are you traveling to?"
            onSubmit={(v: string) => {
              onSend(v);
            }}
          />
        );
      case "travelInterests":
        return (
          <MultiSelectUi
            options={[
              "Adventure",
              "Sightseeing",
              "Food",
              "Nightlife",
              "Relaxation",
              "Cultural",
              "Nature & Wildlife",
              "Hiking & Trekking",
              "Beach & Sunbathing",
              "Water Sports",
              "Winter Sports",
              "Shopping & Fashion",
              "History & Heritage",
              "Art & Museums",
              "Music & Festivals",
              "Road Trips",
              "Luxury & Resorts",
              "Wellness & Spa",
              "Spiritual / Religious Trips",
              "Camping & Outdoors",
              "Eco-Tourism / Sustainability",
              "Cruises & Sailing",
              "Photography Trips",
              "Desert Safaris",
              "Mountains & Scenic Landscapes",
              "Theme Parks & Entertainment",
              "Volunteer / Humanitarian Travel",
              "Farm & Countryside",
              "Local Experiences",
              "Romantic Getaways / Honeymoons",
              "Business / Work Trips",
              "Tech & Innovation Tours",
              "Sports Travel",
              "Wine & Brewery Tours",
              "Architecture & Design Tours",
              "Wildlife Safari",
              "Fishing Trips",
              "Off-the-Grid / Minimalist Travel",
              "Backpacking",
              "Cross-Country Train Journeys",
              "Festivals & Carnivals",
            ]}
            onSelected={(v: string) => {
              onSend(v);
            }}
          />
        );
      case "specialRequirements":
        return (
          <TextUi
            label="Any special requirements or preferences?"
            onSubmit={(v: string) => {
              onSend(v);
            }}
          />
        );
      case "final":
        return <FinalUi viewTrip={() => console.log()} disable={!tripDetail} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg?.ui == "final") {
      setIsFinal(true);
      setUserInput("Ok, Great..!");
      // onSend();
    }
  }, [messages]);

  useEffect(() => {
    if (isFinal && userInput) {
      onSend();
    }
  }, [isFinal]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="h-[87vh] flex flex-col">
      {messages?.length == 0 && (
        <EmptyBoxState
          onSelectOption={(v: string) => {
            setUserInput(v);
            onSend();
          }}
        />
      )}
      {/* Display Messages */}
      <section className="flex-1 overflow-y-auto p-4">
        {messages.map((msg: Message, index) =>
          msg.role === "user" ? (
            <div key={index} className="flex justify-end mt-2">
              <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
                {msg.content}
              </div>
            </div>
          ) : (
            <div key={index} className="flex justify-start mt-2">
              <div className="max-w-lg bg-gray-200 text-black px-4 py-2 rounded-lg">
                {msg.content}
                {RenderGenerativeUi(msg.ui ?? "")}
              </div>
            </div>
          )
        )}

        {loading && (
          <div className="flex justify-start mt-2">
            <div className="max-w-lg bg-gray-200 text-black px-4 py-2 rounded-lg">
              <Loader className="animate-spin" />
            </div>
          </div>
        )}

        {/* 👇 magic scroll target */}
        <div ref={messagesEndRef} />
      </section>

      {/* User Input */}
      <section>
        <div className="border rounded-2xl p-4 shadow relative">
          <Textarea
            placeholder="Start Typing Here....."
            className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
            onChange={(event) => setUserInput(event.target.value)}
            value={userInput}
          />
          <Button
            size={"icon"}
            className="absolute bottom-6 right-6"
            onClick={() => onSend()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Chatbox;
