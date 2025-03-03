import { RESUME_DATA } from '@/data/resume-data'
import { Section } from '../../components/ui/section'
import { SectionHeadline } from '@/app/components/SectionHeadline'

interface AboutProps {
  summary: typeof RESUME_DATA.summary
  className?: string
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className={className}>
      <SectionHeadline id="about">🔎 About</SectionHeadline>
      <div
        className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px]"
        aria-labelledby="about-section"
      >
        {summary}
      </div>
    </Section>
  );
}
