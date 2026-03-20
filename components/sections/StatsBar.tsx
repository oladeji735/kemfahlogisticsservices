import { homepageData } from "@/lib/data/homepage";

const capabilityStats = [
  { label: "Nationwide Coverage", value: "36" },
  { label: "International Routing", value: "12+" },
  { label: "Fleet Ready", value: "15" },
  { label: "On-Time Delivery", value: "100%" },
];

export function StatsBar() {
  return (
    <section className="bg-midnight py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {capabilityStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-sm md:text-base text-white/65">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
