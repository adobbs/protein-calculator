'use client';

import { NumberInput, SegmentedControl, Paper, Stack, Title, Text, Group } from '@mantine/core';
import { useCalculatorStore } from '@/store/useCalculatorStore';

interface ProteinRange {
  label: string;
  minRatio: number;
  maxRatio: number;
}

const proteinRanges: ProteinRange[] = [
  { label: 'Almost maximized', minRatio: 0.55, maxRatio: 0.63 },
  { label: 'Very likely maximized', minRatio: 0.64, maxRatio: 0.72 },
  { label: 'Definitely maximized', minRatio: 0.73, maxRatio: 1.0 },
];

export function ProteinCalculator() {
  const { weight, unit, setWeight, setUnit } = useCalculatorStore();

  const calculateProtein = (ratio: number) => {
    if (unit === 'kg') {
      // Convert kg to lbs for calculation (1 kg = 2.20462 lbs)
      return (weight * 2.20462 * ratio).toFixed(1);
    }
    return (weight * ratio).toFixed(1);
  };

  return (
    <Paper shadow="md" radius="lg" p="xl" withBorder>
      <Stack gap="lg">
        <Title order={1} ta="center">
          Protein Intake Calculator
        </Title>

        <Stack gap="md">
          <NumberInput
            label="Your Weight"
            placeholder="Enter your weight"
            value={weight || ''}
            onChange={(value) => setWeight(Number(value))}
            min={0}
            max={999}
            size="lg"
            styles={{
              input: {
                fontSize: '1.25rem',
              },
            }}
          />

          <Group gap="xs" align="center">
            <Text size="sm" fw={500}>
              Unit:
            </Text>
            <SegmentedControl
              value={unit}
              onChange={(value) => setUnit(value as 'lbs' | 'kg')}
              data={[
                { label: 'lbs', value: 'lbs' },
                { label: 'kg', value: 'kg' },
              ]}
            />
          </Group>
        </Stack>

        {weight > 0 && (
          <Stack gap="md" mt="md">
            <Title order={3}>Daily Protein Recommendations (grams)</Title>

            {proteinRanges.map((range) => (
              <Paper key={range.label} p="md" withBorder bg="gray.0">
                <Stack gap="xs">
                  <Text fw={600} size="lg">
                    {range.label}
                  </Text>
                  <Text size="xl" c="blue.7" fw={700}>
                    {calculateProtein(range.minRatio)}g - {calculateProtein(range.maxRatio)}g
                  </Text>
                </Stack>
              </Paper>
            ))}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
}
