import Link from "next/link";
import Image from "next/image";
import type { ServiceCard } from "@/types";

interface ServicesGridProps {
  heading?: string;
  services: ServiceCard[];
}

export function ServicesGrid({
  heading = "End-to-End Logistics. Domestic and International.",
  services,
}: ServicesGridProps) {
  return (
    <section className="bg-sky py-20" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-navy">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <article key={service.key} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative" role="img" aria-label={`
                ${service.key === 'road_freight' ? 'Road freight truck transporting cargo across Nigeria' :
                  service.key === 'marine_transport' ? 'Marine cargo ship at Nigerian port for sea freight' :
                    service.key === 'international_air_cargo' ? 'International air cargo plane for global shipping' :
                      'Cargo container at port for clearing and forwarding'}
              `}>
                <Image
                  src={service.imageSrc}
                  alt={
                    service.key === 'road_freight' ? 'Road freight truck transporting cargo across Nigeria' :
                      service.key === 'marine_transport' ? 'Marine cargo ship at Nigerian port for sea freight' :
                        service.key === 'international_air_cargo' ? 'International air cargo plane for global shipping' :
                          'Cargo container at port for clearing and forwarding'
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link href="/services" className="text-amber font-medium hover:text-amber-hover transition-colors" aria-label={`Learn more about ${service.title}`}>
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
