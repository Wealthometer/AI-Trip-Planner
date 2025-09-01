import { Timeline } from "@/components/ui/timeline";
import React from "react";

const TRIP_DATA = {
  budget: "Luxury - No budget constraints",
  description:
    "Experience 42 days of ultimate luxury and adventure in Zanzibar. Explore stunning beaches, lively markets, historic Stone Town, underwater marine parks, and more. Enjoy world-class cuisine, nightlife, and wellness retreats in exquisite resorts. A perfect mix for couples who want a rich cultural and adventurous escape including water sports, sailing, art tours, relaxation, and vibrant festivals throughout the island.",
  destination: "Zanzibar, Tanzania",
  duration: "42 Days",
  origin: "Nigeria",
  group_size: "2 (Couple)",
  hotels: [
    {
      description:
        "An ultra-luxury boutique resort featuring private pool villas, personal butler service and exquisite beachside dining offering maximum privacy and personalized luxury.",
      geo_coordinates: {
        latitude: -5.7573,
        longitude: 39.3167,
      },
      hotel_address: "The Palms Estate, Dunga Rd, Nungwi, Zanzibar, Tanzania",
      hotel_image_url:
        "https://www.thepalms-zanzibar.com/wp-content/uploads/2018/04/The-Palms-Zanzibar_Villa-Pool-1-1920x1283.jpg",
      hotel_name: "The Palms Zanzibar",
      price_per_night: "$1,200+",
      rating: 5,
    },
    {
      description:
        "A luxurious hotel in historic Stone Town combining modern comforts with Swahili architecture, exquisite dining, spa, and rooftop pool with breathtaking ocean views.",
      geo_coordinates: {
        latitude: -6.1659,
        longitude: 39.2026,
      },
      hotel_address: "Forodhani Gardens, Shangani St, Stone Town, Zanzibar",
      hotel_image_url:
        "https://cdn.park.hyatt.com/hyatt/hyattdam/images/2019/08/07/1359/PHZNZ_Carousel_Exterior_View_Night.jpg",
      hotel_name: "Park Hyatt Zanzibar",
      price_per_night: "$600+",
      rating: 5,
    },
    {
      description:
        "An award-winning resort with oceanfront villas inspired by traditional Swahili architecture, featuring a world-class spa, gourmet dining, and exceptional water sports offerings.",
      geo_coordinates: {
        latitude: -6.3315,
        longitude: 39.5469,
      },
      hotel_address: "Jambiani Beach, Zanzibar, Tanzania",
      hotel_image_url:
        "https://baraza-resort.com/wp-content/uploads/2019/05/Baraza-Resort-Exterior-2.jpg",
      hotel_name: "Baraza Resort & Spa",
      price_per_night: "$900+",
      rating: 5,
    },
  ],
  itinerary: [
    {
      activities: [
        {
          best_time_to_visit: "All day",
          geo_coordinates: {
            latitude: -5.7573,
            longitude: 39.3167,
          },
          place_address:
            "The Palms Estate, Dunga Rd, Nungwi, Zanzibar, Tanzania",
          place_details:
            "Relax by your private pool villa and enjoy personalized butler service.",
          place_image_url:
            "https://www.thepalms-zanzibar.com/wp-content/uploads/2018/04/The-Palms-Zanzibar_Villa-Pool-1-1920x1283.jpg",
          place_name: "The Palms Zanzibar",
          ticket_pricing: "Included in accommodation",
          time_travel_each_location: "N/A",
        },
      ],
      best_time_to_visit_day: "Afternoon to Evening",
      day: 1,
      day_plan:
        "Arrival, check-in at The Palms Zanzibar, relax and enjoy private beach and villa amenities.",
    },
    {
      activities: [
        {
          best_time_to_visit: "Early morning to late afternoon",
          geo_coordinates: {
            latitude: -5.7721,
            longitude: 39.3161,
          },
          place_address: "Nungwi Village, Zanzibar, Tanzania",
          place_details:
            "Famous for crystal clear turquoise waters, ideal for snorkeling, diving, and water sports.",
          place_image_url:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
          place_name: "Nungwi Beach",
          ticket_pricing: "Free; water sport rentals approx $50-$100",
          time_travel_each_location: "30 minutes from The Palms",
        },
      ],
      best_time_to_visit_day: "Morning to Afternoon",
      day: 2,
      day_plan:
        "Explore Nungwi Beach: snorkeling and water sports, followed by beachside dining.",
    },
    {
      activities: [
        {
          best_time_to_visit: "9 AM to 12 PM",
          geo_coordinates: {
            latitude: -5.7641,
            longitude: 39.3031,
          },
          place_address: "Nungwi Village, Zanzibar, Tanzania",
          place_details:
            "Marine conservation center where you can swim with turtles and learn about marine life protection.",
          place_image_url:
            "https://www.go2africa.com/images/Destination/zanzibar/mnarani-natural-aquarium-2.jpg",
          place_name: "Mnarani Natural Aquarium",
          ticket_pricing: "$15 per person",
          time_travel_each_location: "10 minutes from Nungwi Beach",
        },
      ],
      best_time_to_visit_day: "Morning",
      day: 3,
      day_plan:
        "Visit the Mnarani Natural Aquarium for turtle conservation and interaction.",
    },
    {
      activities: [
        {
          best_time_to_visit: "Afternoon to evening",
          geo_coordinates: {
            latitude: -6.1659,
            longitude: 39.2026,
          },
          place_address: "Forodhani Gardens, Shangani St, Stone Town, Zanzibar",
          place_details:
            "Luxury hotel in the heart of Stone Town, perfect base for exploring colonial architecture and markets.",
          place_image_url:
            "https://cdn.park.hyatt.com/hyatt/hyattdam/images/2019/08/07/1359/PHZNZ_Carousel_Exterior_View_Night.jpg",
          place_name: "Park Hyatt Zanzibar",
          ticket_pricing: "Included in accommodation",
          time_travel_each_location: "2 hours from Nungwi Beach",
        },
        {
          best_time_to_visit: "5 PM to 8 PM",
          geo_coordinates: {
            latitude: -6.1651,
            longitude: 39.2015,
          },
          place_address: "Mkunazini St, Stone Town, Zanzibar",
          place_details:
            "Vibrant market filled with local spices, souvenirs and street foods; experience Zanzibar's famous spices.",
          place_image_url:
            "https://images.unsplash.com/photo-1563622702-319481098f53",
          place_name: "Stone Town Spice Market",
          ticket_pricing: "Free",
          time_travel_each_location: "Walking distance from hotel",
        },
      ],
      best_time_to_visit_day: "Afternoon to Evening",
      day: 4,
      day_plan:
        "Travel to Stone Town, check-in at Park Hyatt Zanzibar, evening spice market and dinner.",
    },
    {
      activities: [
        {
          best_time_to_visit: "9 AM to 12 PM",
          geo_coordinates: {
            latitude: -6.166,
            longitude: 39.2023,
          },
          place_address: "Mtaa wa Kale, Stone Town, Zanzibar",
          place_details:
            "Once the tallest building in East Africa, now a cultural museum showcasing Zanzibari heritage.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/3/31/House_of_Wonders%2C_Stone_Town%2C_Zanzibar_-_2013.JPG",
          place_name: "House of Wonders (Beit-al-Ajaib)",
          ticket_pricing: "$10 per person",
          time_travel_each_location: "Walking distance between landmarks",
        },
        {
          best_time_to_visit: "10 AM to 1 PM",
          geo_coordinates: {
            latitude: -6.1668,
            longitude: 39.2025,
          },
          place_address: "Mtaa wa Kale, Stone Town, Zanzibar",
          place_details:
            "Historic palace offering insights into the life of Zanzibar’s sultans and their reign.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/5/5b/Sultan%27s_Palace%2C_Stone_Town%2C_Zanzibar_-_2013.JPG",
          place_name: "Sultan's Palace Museum",
          ticket_pricing: "$8 per person",
          time_travel_each_location: "Walking distance between landmarks",
        },
        {
          best_time_to_visit: "11 AM to 3 PM",
          geo_coordinates: {
            latitude: -6.1644,
            longitude: 39.2014,
          },
          place_address: "Mtaa wa Kale, Stone Town, Zanzibar",
          place_details:
            "Historic fort built in the 17th century, hosting cultural performances and exhibitions.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/87/Old_fort_stone_town_zanzibar1.jpg",
          place_name: "Old Fort (Ngome Kongwe)",
          ticket_pricing: "$5 per person",
          time_travel_each_location: "Walking distance between landmarks",
        },
      ],
      best_time_to_visit_day: "Morning to Early Afternoon",
      day: 5,
      day_plan:
        "Guided tour of Stone Town landmarks: House of Wonders, Sultan's Palace, and Old Fort.",
    },
    {
      activities: [
        {
          best_time_to_visit: "Anytime",
          geo_coordinates: {
            latitude: -6.1659,
            longitude: 39.2026,
          },
          place_address: "Forodhani Gardens, Shangani St, Stone Town, Zanzibar",
          place_details:
            "Indulge in luxurious spa treatments including massages and wellness therapies.",
          place_image_url:
            "https://cdn.park.hyatt.com/hyatt/hyattdam/images/2019/08/07/1705/PHZNZ_Spa_Treatment_Room.jpg",
          place_name: "Park Hyatt Zanzibar Spa",
          ticket_pricing: "Spa treatments start at $120",
          time_travel_each_location: "N/A",
        },
        {
          best_time_to_visit: "Anytime",
          geo_coordinates: {
            latitude: -6.1659,
            longitude: 39.2026,
          },
          place_address: "Forodhani Gardens, Shangani St, Stone Town, Zanzibar",
          place_details:
            "Enjoy panoramic views of Stone Town and the Indian Ocean from the rooftop pool.",
          place_image_url:
            "https://cdn.park.hyatt.com/hyatt/hyattdam/images/2019/08/07/1133/PHZNZ_Pool_Exterior.jpg",
          place_name: "Park Hyatt Zanzibar Rooftop Pool",
          ticket_pricing: "Included with accommodation",
          time_travel_each_location: "N/A",
        },
      ],
      best_time_to_visit_day: "All day",
      day: 6,
      day_plan:
        "Relax at the hotel spa and enjoy rooftop pool at Park Hyatt Zanzibar.",
    },
    {
      activities: [
        {
          best_time_to_visit: "8 AM to 12 PM",
          geo_coordinates: {
            latitude: -6.222,
            longitude: 39.2583,
          },
          place_address: "Near Stone Town, Zanzibar",
          place_details:
            "Guided tour of spice plantations with hands-on experience of spices like cloves, cinnamon, and nutmeg.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/d/d9/Spice_plantation_in_Zanzibar_02.JPG",
          place_name: "Zanzibar Spice Farms",
          ticket_pricing: "$25 per person",
          time_travel_each_location: "30 minutes from Stone Town",
        },
      ],
      best_time_to_visit_day: "Morning to Early Afternoon",
      day: 7,
      day_plan:
        "Spice Tour: Visit spice farms outside Stone Town and learn about Zanzibar's spices.",
    },
    {
      activities: [
        {
          best_time_to_visit: "10 AM to 4 PM",
          geo_coordinates: {
            latitude: -6.165,
            longitude: 39.2019,
          },
          place_address: "Departure from Stone Town Harbor, Zanzibar",
          place_details:
            "Experience sailing on traditional wooden boats, swim, snorkel and enjoy seafood lunch on the beach.",
          place_image_url:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
          place_name: "Traditional Dhow Sailing Cruise",
          ticket_pricing: "$150 per person",
          time_travel_each_location: "N/A (day trip)",
        },
      ],
      best_time_to_visit_day: "Late Morning to Afternoon",
      day: 8,
      day_plan:
        "Dhow Sailing Cruise from Stone Town to explore coastline and nearby islands.",
    },
    {
      activities: [
        {
          best_time_to_visit: "8 AM to 11 AM",
          geo_coordinates: {
            latitude: -6.2835,
            longitude: 39.3734,
          },
          place_address: "Jozani Forest, Zanzibar",
          place_details:
            "Zanzibar's only national park famous for its endemic Red Colobus monkeys and lush forest walks.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/7/7e/Red_Colobus_Monkey_%28Procolobus_rufomitratus%29_in_Zanzibar.jpg",
          place_name: "Jozani Chwaka Bay National Park",
          ticket_pricing: "$10 per person",
          time_travel_each_location: "45 minutes from Stone Town",
        },
      ],
      best_time_to_visit_day: "Morning",
      day: 9,
      day_plan:
        "Visit Jozani Forest for nature walk and rare Red Colobus monkeys.",
    },
    {
      activities: [
        {
          best_time_to_visit: "Anytime",
          geo_coordinates: {
            latitude: -6.3315,
            longitude: 39.5469,
          },
          place_address: "Jambiani Beach, Zanzibar, Tanzania",
          place_details:
            "Luxury oceanfront resort with exquisite villas, beach access, swimming pools and award-winning spa.",
          place_image_url:
            "https://baraza-resort.com/wp-content/uploads/2019/05/Baraza-Resort-Exterior-2.jpg",
          place_name: "Baraza Resort & Spa",
          ticket_pricing: "Included in accommodation",
          time_travel_each_location: "Travel from Stone Town approx 1 hour",
        },
      ],
      best_time_to_visit_day: "All day",
      day: 10,
      day_plan:
        "Relax at Baraza Resort & Spa, unwind on the beach, and enjoy spa treatments.",
    },
    {
      activities: [
        {
          best_time_to_visit: "9 AM to 3 PM",
          geo_coordinates: {
            latitude: -6.333,
            longitude: 39.545,
          },
          place_address: "Jambiani Beach, Zanzibar, Tanzania",
          place_details:
            "Known for excellent conditions for kite surfing, snorkeling, and relaxing beach vibes.",
          place_image_url:
            "https://cdn.pixabay.com/photo/2017/01/14/12/59/zanzibar-1979652_1280.jpg",
          place_name: "Jambiani Beach",
          ticket_pricing: "Water sport rentals approx $50-$120",
          time_travel_each_location:
            "Walking or short drive from Baraza Resort",
        },
      ],
      best_time_to_visit_day: "Morning to Afternoon",
      day: 11,
      day_plan: "Try kite surfing and other water sports at Jambiani Beach.",
    },
    {
      activities: [
        {
          best_time_to_visit: "9 AM to 1 PM",
          geo_coordinates: {
            latitude: -6.1672,
            longitude: 39.2061,
          },
          place_address: "Mkunazini St, Stone Town, Zanzibar",
          place_details:
            "Museum dedicated to Zanzibar’s musical heritage, including Taarab music and instruments.",
          place_image_url:
            "https://www.zanzibar.com/sites/default/files/styles/large_crop/public/muzee-de-taarab-zanzibar.jpg",
          place_name: "Taarab Museum",
          ticket_pricing: "$5 per person",
          time_travel_each_location: "Walking from hotel",
        },
        {
          best_time_to_visit: "10 AM to 4 PM",
          geo_coordinates: {
            latitude: -6.1645,
            longitude: 39.2017,
          },
          place_address: "Old Fort, Stone Town, Zanzibar",
          place_details:
            "Contemporary art gallery featuring local artists and crafts.",
          place_image_url:
            "https://www.ngomekongwegallery.com/gallery/galleries/ngome-building.jpeg",
          place_name: "Ngome Kongwe Gallery",
          ticket_pricing: "Free",
          time_travel_each_location: "Walking within Stone Town",
        },
      ],
      best_time_to_visit_day: "Morning to Afternoon",
      day: 12,
      day_plan:
        "Explore local markets and art galleries in Stone Town with focus on contemporary art.",
    },
    {
      activities: [
        {
          best_time_to_visit: "6 PM to 10 PM",
          geo_coordinates: {
            latitude: -6.1655,
            longitude: 39.202,
          },
          place_address: "Forodhani Gardens, Stone Town, Zanzibar",
          place_details:
            "Popular evening market offering local street foods, seafood, and live performances.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/Forodhani_Gardens_Stone_Town.jpg",
          place_name: "Forodhani Gardens Food Market",
          ticket_pricing: "Free entry, food and drinks pay as you go",
          time_travel_each_location: "Walking distance from hotel",
        },
      ],
      best_time_to_visit_day: "Evening",
      day: 13,
      day_plan:
        "Enjoy vibrant nightlife at Forodhani Gardens Food Market with live music and street food.",
    },
  ],
//   origin: "Nigeria",
  rating: 5,
};

function Itinerary() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div key={''}>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div key={''}>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full h-[85vh] overflow-auto">
      <Timeline data={data} tripData={TRIP_DATA} />
    </div>
  );
}

export default Itinerary;
