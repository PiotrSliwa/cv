import { Section } from '../../components/ui/section'

export function Note() {
  return (
    <Section>
      <div className="hidden print:block w-full border-t-2 border-gray-200">
        <p className="text-xs text-gray-500 mt-4">
          I hereby give consent for my personal data included in my application
          to be processed for the purposes of the recruitment process under the
          European Parliament's and Council of the European Union Regulation on
          the Protection of Natural Persons as of 27 April 2016, with regard to
          the processing of personal data and on the free movement of such data,
          and repealing Directive 95/46/EC.
        </p>
      </div>
    </Section>
  )
}
