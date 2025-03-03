import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Section } from '@/components/ui/section'
import { RESUME_DATA } from '@/data/resume-data'
import { SectionHeadline } from '@/app/components/SectionHeadline'

type Certification = (typeof RESUME_DATA)['certification'][number]

function CertificationDate({ date }: { date: string }) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      aria-label={`Date: ${date}`}
    >
      {date}
    </div>
  )
}

interface CertificationItemProps {
  certification: Certification
}

/**
 * Individual certification card component
 */
function CertificationItem({ certification }: CertificationItemProps) {
  const { name, issuer, date, link } = certification

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3
            className="font-semibold leading-none"
          >
            <a
              className="hover:underline"
              href={link?.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          </h3>
          <CertificationDate date={date} />
        </div>
      </CardHeader>
      <CardContent
        className="mt-2 text-foreground/80 print:text-[12px]"
      >
        {issuer}
      </CardContent>
    </Card>
  )
}

interface CertificationListProps {
  certifications: readonly Certification[]
}

/**
 * Main certification section component
 * Renders a list of certification experiences
 */
export function Certification({ certifications }: CertificationListProps) {
  return (
    <Section className="">
      <SectionHeadline id="certification">🏅Certification</SectionHeadline>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="certification-section"
      >
        {certifications.map((item, i) => (
          <article key={i} role="article">
            <CertificationItem certification={item} />
          </article>
        ))}
      </div>
    </Section>
  )
}
