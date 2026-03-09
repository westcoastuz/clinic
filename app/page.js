import LegacyLanding from "@/components/LegacyLanding";
import { landingBodyHtml, landingStyles } from "@/lib/landing-content";

export default function HomePage() {
  return <LegacyLanding styles={landingStyles} bodyHtml={landingBodyHtml} />;
}
