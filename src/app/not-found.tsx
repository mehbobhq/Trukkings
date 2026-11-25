import { PageHero } from "@/components/Blocks";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="That page took a wrong turn."
      lede="The page you're looking for doesn't exist or has moved. Let's get you back on the road."
      actions={[
        { label: "Go home", href: "/", variant: "primary" },
        { label: "Contact us", href: "/contact", variant: "ghost" },
      ]}
    />
  );
}
