import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing use of the HSM Sensors website, the status of catalogue information, and how quotations and orders are formed.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <PageHero
        compact
        eyebrow="Legal"
        title="Terms of use"
        lede="These terms cover the website. Quotations and orders are governed by the terms stated on the quotation and the sales contract, which take precedence over anything written here."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />

      <article className="mx-auto max-w-[760px] px-4 py-12 sm:px-6 lg:py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500">
          Last updated {year}
        </p>

        <Section title="Using this site">
          <p>
            This website is operated by {site.legalName}. By using it you accept these terms.
            If you do not accept them, please do not use the site.
          </p>
          <p>
            You may view, download and print pages for the purpose of evaluating and
            purchasing our products. You may not scrape the catalogue at volume, republish it
            as your own, or use the site in a way that interferes with its operation or with
            other visitors.
          </p>
        </Section>

        <Section title="Catalogue information is indicative">
          <p>
            Product specifications, dimensions, images and descriptions on this site are
            published for selection purposes. They describe the standard configuration and
            are subject to change without notice as products are revised.
          </p>
          <p>
            The specification that governs a purchase is the one stated on the quotation and,
            where one is issued, the datasheet for the specific model and revision. If a
            figure on this website and a figure on your quotation differ, the quotation
            governs.
          </p>
          <p>
            Product photographs are representative. Finish, labelling and minor fittings may
            differ from the image shown.
          </p>
        </Section>

        <Section title="No offer, and no reliance on the site alone">
          <p>
            Nothing on this website is an offer capable of acceptance. Prices, lead times and
            availability are confirmed only in a written quotation.
          </p>
          <p>
            Selection guidance on this site — including the output-signal and level-principle
            references — is general technical information. It is not a substitute for
            engineering judgement about your process, and we are not responsible for a
            specification chosen without reference to us. Where a wrong selection could cause
            injury, environmental release or significant loss, confirm the specification with
            our engineering team in writing before ordering.
          </p>
        </Section>

        <Section title="Intellectual property">
          <p>
            The HSM Sensors name, logo, product photography, catalogue text and page design are
            our property or are used by us under licence. Third-party trademarks mentioned on
            this site — including fitting standards and protocol names — belong to their
            respective owners and are used only to describe compatibility.
          </p>
        </Section>

        <Section title="Enquiries you send us">
          <p>
            By submitting an enquiry you confirm that the information is accurate and that you
            are entitled to share it, and you authorise us to reply to the address or number
            you provide. Do not send us confidential third-party information through the form.
          </p>
        </Section>

        <Section title="Availability">
          <p>
            We aim to keep the site available but do not guarantee uninterrupted access. We
            may suspend or change any part of it, including withdrawing a product from the
            catalogue, without notice.
          </p>
        </Section>

        <Section title="Liability">
          <p>
            To the extent permitted by law, we are not liable for indirect or consequential
            loss arising from use of this website or reliance on its content. Nothing in these
            terms excludes liability that cannot lawfully be excluded, including for death or
            personal injury caused by negligence.
          </p>
        </Section>

        <Section title="Governing law">
          <p>
            These terms are governed by the laws of the People&apos;s Republic of China. The
            courts of Xiamen, Fujian have jurisdiction over disputes arising from use of this
            website, without prejudice to any mandatory consumer protection rules that apply
            where you live.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about these terms:{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="text-brand-600 underline underline-offset-2"
            >
              {site.contact.email}
            </a>
            .
          </p>
        </Section>
      </article>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-9 border-t border-ink-200 pt-7 first:border-t-0 first:pt-0">
      <h2 className="text-[1.05rem] font-semibold tracking-tight text-ink-900">{title}</h2>
      <div className="mt-2.5 space-y-3 text-[14px] leading-[1.75] text-ink-700">{children}</div>
    </section>
  );
}
