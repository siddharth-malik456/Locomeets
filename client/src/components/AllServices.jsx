import ServiceCard from "./ServiceCard";

export default function AllServices() {
  const Services = [{ img: "" }];
  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-semibold mb-8">Services</h1>
      <div className="flex flex-wrap gap-24">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
