import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Section } from '@/components/ui/section'
import { RESUME_DATA } from '@/data/resume-data'

type PublicSpeech = (typeof RESUME_DATA)['publicSpeeches'][number]

interface PublictionProps {
  date: PublicSpeech['date']
}

/**
 * Displays the PublicSpeech period in a consistent format
 */
function PublicSpeechDate({ date }: PublictionProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      aria-label={`Date: ${date}`}
    >
      {date}
    </div>
  )
}

interface PublicSpeechItemProps {
  publicSpeech: PublicSpeech
}

/**
 * Individual PublicSpeech card component
 */
function PublicSpeechItem({ publicSpeech }: PublicSpeechItemProps) {
  const { title, publisher, abstract, date, link } = publicSpeech

  return (
    <Card className="break-inside-avoid">
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3
            className="font-semibold leading-none"
            id={`PublicSpeech-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <a
              className="hover:underline"
              href={link?.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} link`}
            >
              {title}
            </a>
          </h3>
          <PublicSpeechDate date={date} />
        </div>

        <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
          {publisher}
        </h4>
      </CardHeader>
      <CardContent>
        <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
          {abstract}
        </div>
      </CardContent>
    </Card>
  )
}

interface PublicSpeechListProps {
  publicSpeeches: readonly PublicSpeech[]
}

/**
 * Main PublicSpeech section component
 * Renders a list of PublicSpeech experiences
 */
export function PublicSpeeches({ publicSpeeches }: PublicSpeechListProps) {
  return (
    <Section className="print-force-new-page">
      <h2 className="text-3xl font-bold" id="PublicSpeech-section">
        📢 Publications
      </h2>
      <h3 className="text-lg text-gray-500">
        Scientific articles and public presentations on conferences
      </h3>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="PublicSpeech-section"
      >
        {publicSpeeches.map((item, i) => (
          <article key={i} role="article">
            <PublicSpeechItem publicSpeech={item} />
          </article>
        ))}
      </div>
    </Section>
  )
}
