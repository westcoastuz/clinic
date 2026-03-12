import LegacyLanding from "@/components/LegacyLanding";
import ServicesList from "@/components/ServicesList";
import {
  landingStyles,
  landingHtmlBefore,
  landingHtmlAfter,
} from "@/lib/landing-content";

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: landingStyles }} />
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: landingHtmlBefore }}
      />
      <ServicesList />
      <LegacyLanding styles="" bodyHtml={landingHtmlAfter} />
    </>
  );
}
