import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";
export default function ServiceCard({ service }) {
  return (
    <div className=" w-72  ">
      <Link to={`http://localhost:5173/services/one/${service && service._id}`}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section component="a">
            <div className="flex justify-center items-center w-full h-1/2">
              <Image
                src={service && service.images[0]}
                height={100}
                className="min-h-28 aspect-square "
              />
            </div>
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{service && service.name}</Text>
            <Badge color="blue">₹{service && service.price}</Badge>
          </Group>

          <Text
            className="overflow-hidden min-h-20 line-clamp-4"
            size="sm"
            c="dimmed"
          >
            {service && service.description}
          </Text>

          <div className="bg-[#283618] text-white w-full text-center mt-4 py-1 rounded-md border border-[#283618] hover:bg-white hover:border-[#283618] hover:text-[#283618] active:bg-[#283618] active:text-white font-semibold">
            Book now
          </div>
        </Card>
      </Link>
    </div>
  );
}
