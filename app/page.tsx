import { Container, Center, Text, Stack } from '@mantine/core';
import { ProteinCalculator } from '@/components/ProteinCalculator';

export default function HomePage() {
  return (
    <Container size="sm" py={60}>
      <Stack gap="xl">
        <ProteinCalculator />

        <Center>
          <Text size="sm" c="dimmed" ta="center" px="md">
            Your privacy is important. No user data or weight information is stored,
            tracked, or transmitted. All calculations happen locally in your browser.
          </Text>
        </Center>
      </Stack>
    </Container>
  );
}
