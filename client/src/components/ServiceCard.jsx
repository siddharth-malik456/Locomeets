import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";
export default function ServiceCard({ service }) {
  return (
    <div className="w-72">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section component="a" href="https://mantine.dev/">
          <div className="flex justify-center items-center w-full h-1/2">
            <img
              src={service && service.images[0]}
              height={100}
              className="max-h-full max-w-full"
            />
          </div>
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{service && service.name}</Text>
          <Badge color="blue">₹{service && service.price}</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {service && service.description}
        </Text>

        <Link
          to={`http://localhost:5173/services/${service && service._id}`}
          className="bg-[#283618] text-white w-full text-center mt-4 py-1 rounded-md border border-[#283618] hover:bg-white hover:border-[#283618] hover:text-[#283618] active:bg-[#283618] active:text-white font-semibold"
        >
          Book now
        </Link>
      </Card>
    </div>
  );
}
