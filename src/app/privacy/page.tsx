import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "What data HSM Sensors collects when you submit an enquiry, why it is collected, how long it is kept, and how to have it removed.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <PageHero
        compact
        eyebrow="Legal"
        title="Privacy notice"
        lede="This notice explains what happens to the information you send us through this website. It is written to be read, not to be survived."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      />

      <article className="mx-auto max-w-[760px] px-4 py-12 sm:px-6 lg:py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500">
          Last updated {year}
        </p>

        <Section title="Who is responsible">
          <p>
            {site.legalName} ({site.chineseName}), {site.address.street},{" "}
            {site.address.city} {site.address.postalCode}, {site.address.region},{" "}
            {site.address.countryName}. Contact:{" "}
            <a href={`mailto:${site.contact.email}`} className="text-brand-600 underline underline-offset-2">
              {site.contact.email}
            </a>
            .
          </p>
        </Section>

        <Section title="What we collect">
          <p>When you submit the enquiry form, we collect the fields you fill in:</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>your name, company and email address;</li>
            <li>country, phone number and any model, quantity or product family you select;</li>
            <li>the message describing your application;</li>
            <li>
              technical data recorded automatically with the submission: the IP address the
              request came from, the browser user-agent string, and the time of submission.
            </li>
          </ul>
          <p className="mt-3">
            We do not ask for, and do not want, payment card details, identity documents or
            other sensitive personal data through this form.
          </p>
        </Section>

        <Section title="Why we hold it">
          <p>
            To answer your enquiry: to work out which instrument fits, to quote a price and a
            lead time, and to keep in contact about that order. The lawful basis is that
            processing is necessary to take steps at your request before entering a contract,
            and our legitimate interest in responding to business enquiries addressed to us.
          </p>
          <p>
            We do not use enquiry data for advertising, we do not build profiles, and we do
            not sell or rent it to anyone.
          </p>
        </Section>

        <Section title="Who sees it">
          <p>
            Our sales and engineering staff, and the service providers that operate this
            website on our behalf — a database host, an email delivery provider and a
            messaging provider used for internal notification. Those providers process the
            data only to deliver the service, under contract.
          </p>
          <p>
            Because we are based in China, your enquiry is transferred to and stored in China.
            If your organisation requires a data transfer agreement before sending personal
            data to us, tell us before you submit the form and we will put one in place.
          </p>
        </Section>

        <Section title="How long we keep it">
          <p>
            Enquiry records are kept for as long as needed to handle the enquiry and any
            resulting order, and for the period our accounting and warranty obligations
            require. Records with no commercial outcome are deleted when they are no longer
            useful.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            You can ask us for a copy of the data we hold about you, ask us to correct it, or
            ask us to delete it. Write to{" "}
            <a href={`mailto:${site.contact.email}`} className="text-brand-600 underline underline-offset-2">
              {site.contact.email}
            </a>{" "}
            and we will respond. If you are in the EU or UK, you also have the right to
            complain to your local data protection authority.
          </p>
        </Section>

        <Section title="Cookies and tracking">
          <p>
            This site does not set advertising or analytics cookies. The only cookie we set is
            an access cookie for the internal enquiry list, which is set only after an
            administrator signs in and is never issued to ordinary visitors.
          </p>
          <p>
            Our hosting and database providers may keep standard server logs, including IP
            addresses, for security and troubleshooting.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            If this notice changes, the revised version will be published on this page with a
            new date. Material changes affecting enquiries already received will be
            communicated directly where we hold a contact address for you.
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
