"use client"
import { Carousel, Card } from "./ui/apple-cards-carousel"

export function TripPlannerCarousel() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} layout={true} />)

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Plan your perfect getaway with AI.
      </h2>
      <Carousel items={cards} />
    </div>
  )
}

const ParisContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Experience the romance of Paris with our AI-curated itinerary.
        </span>{" "}
        Visit iconic landmarks like the Eiffel Tower and Louvre Museum, discover hidden cafés in Montmartre, and enjoy
        Seine river cruises. Our AI considers your preferences, budget, and travel dates to create the perfect Parisian
        adventure.
      </p>
      <img
        src="https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&auto=format&fit=crop"
        alt="Eiffel Tower at sunset with Paris cityscape"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl mt-6"
      />
    </div>
  )
}

const TokyoContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Immerse yourself in Tokyo's perfect blend of tradition and innovation.
        </span>{" "}
        From ancient temples in Asakusa to the neon-lit streets of Shibuya, experience authentic sushi, cherry blossoms,
        and cutting-edge technology. Our AI crafts personalized routes through this incredible metropolis.
      </p>
      <img
        src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop"
        alt="Tokyo skyline with Mount Fuji in background"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl mt-6"
      />
    </div>
  )
}

const SantoriniContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Discover the breathtaking beauty of Santorini's volcanic landscapes.
        </span>{" "}
        Watch stunning sunsets from Oia, explore ancient ruins at Akrotiri, and taste world-class wines at clifftop
        vineyards. Our AI optimizes your island hopping experience for maximum relaxation and wonder.
      </p>
      <img
        src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2069&auto=format&fit=crop"
        alt="Santorini white buildings with blue domes overlooking the sea"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl mt-6"
      />
    </div>
  )
}

const NewYorkContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">Experience the energy of the city that never sleeps.</span> From
        Broadway shows to Central Park picnics, world-class museums to rooftop bars with skyline views. Our AI navigates
        the endless possibilities to match your interests and create unforgettable NYC memories.
      </p>
      <img
        src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop"
        alt="New York City skyline with Empire State Building"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl mt-6"
      />
    </div>
  )
}

const BaliContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">Find your zen in Bali's tropical paradise.</span> Relax on pristine
        beaches, explore ancient temples, enjoy world-class spa treatments, and witness stunning rice terraces. Our AI
        balances adventure and relaxation for your perfect Indonesian escape.
      </p>
      <img
        src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=2070&auto=format&fit=crop"
        alt="Bali rice terraces with tropical landscape"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl mt-6"
      />
    </div>
  )
}

const IcelandContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">Witness Iceland's otherworldly natural wonders.</span> Chase the
        Northern Lights, soak in geothermal hot springs, explore dramatic waterfalls and glaciers. Our AI times your
        visit perfectly for optimal weather and natural phenomena viewing opportunities.
      </p>
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
        alt="Iceland Northern Lights over snowy landscape"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl mt-6"
      />
    </div>
  )
}

const data = [
  {
    category: "Europe",
    title: "Paris, France – City of Lights & Romance",
    src: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&auto=format&fit=crop",
    content: <ParisContent />,
  },
  {
    category: "Asia",
    title: "Tokyo, Japan – Where Tradition Meets Future",
    src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop",
    content: <TokyoContent />,
  },
  {
    category: "Europe",
    title: "Santorini, Greece – Volcanic Island Paradise",
    src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2069&auto=format&fit=crop",
    content: <SantoriniContent />,
  },
  {
    category: "North America",
    title: "New York City – The Ultimate Urban Adventure",
    src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
    content: <NewYorkContent />,
  },
  {
    category: "Asia",
    title: "Bali, Indonesia – Tropical Zen & Culture",
    src: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=2070&auto=format&fit=crop",
    content: <BaliContent />,
  },
  {
    category: "Europe",
    title: "Iceland – Land of Fire & Ice",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    content: <IcelandContent />,
  },
]
