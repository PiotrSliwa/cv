import { RESUME_DATA } from '@/data/resume-data'
import { Section } from '../../components/ui/section'
import { SectionHeadline } from '@/app/components/SectionHeadline'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface HighlightProps {
  highlights: typeof RESUME_DATA.highlights
  className?: string
}

function HighlightCard({ name, value }: { name: string; value: string }) {
  return (
    <Card
      className="flex flex-1 break-inside-avoid flex-col overflow-hidden border p-3"
      role="article"
    >
      <CardHeader>
        <CardDescription className="text-lg font-bold w-full text-center">{value}</CardDescription>
        <CardTitle className="text-sm w-full text-center font-mono font-normal">{name}</CardTitle>
      </CardHeader>
    </Card>
  )
}

export function Highlights({ highlights, className }: HighlightProps) {
  return (
    <Section className={className}>
      <SectionHeadline id="about">💡Highlights</SectionHeadline>
      <div className="flex w-full gap-1 items-stretch h-[130px]">
        {highlights.map((highlight, i) => (
          <HighlightCard
            key={i}
            name={highlight.name}
            value={highlight.value}
          />
        ))}
      </div>
    </Section>
  )
}
