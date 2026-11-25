import { PageHero, Section } from "@/components/Blocks";
import ContactForm from "@/components/ContactForm";
import { Check } from "@/components/Icons";
import { contactPage as p } from "@/content/company";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(p.meta.title, p.meta.description, "/contact");

export default function Page() {
  return (
    <>
      <PageHero {...p.hero} crumbs={[{ label: "Contact" }]} />
      <Section tight>
        <div className="contact-grid">
          <div>
            <h2 className="h2-md">{p.include.title}</h2>
            <ul className="checks">
              {p.include.items.map((t) => (
                <li key={t}>
                  <Check />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mailline">
              Prefer email? <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
