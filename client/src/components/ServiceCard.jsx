import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export default function ServiceCard({ service }) {
  return (
    <div>
      <div className="w-72">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section component="a" href="https://mantine.dev/">
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Pot Making</Text>
            <Badge color="blue">₹166</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            className=" bg-[#BC6C25]"
          >
            Book now
          </Button>
        </Card>
      </div>
    </div>
  );
}
