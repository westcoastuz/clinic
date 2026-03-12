import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { services, getServiceBySlug } from "@/lib/services-data";
import styles from "./page.module.css";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} — Smile Avenue`,
    description: service.shortDesc,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className={styles.page}>
      <nav className={styles.header}>
        <Link href="/#services" className={styles.backLink}>
          &#8592; Все услуги
        </Link>
        <a href="tel:+998908226655" className={styles.headerPhone}>
          +998 90 822 66 55
        </a>
      </nav>

      <div className={styles.hero}>
        <Image
          src={service.image}
          alt={service.name}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.mainCard}>
          <div className={styles.titleArea}>
            <h1 className={styles.title}>{service.name}</h1>
            <p className={styles.shortDesc}>{service.shortDesc}</p>
          </div>

          <div className={styles.pricing}>
            <span className={styles.pricingLabel}>Цена:</span>
            {service.priceOld && (
              <span className={styles.priceOld}>{service.priceOld}</span>
            )}
            {service.priceNew && (
              <span className={styles.priceNew}>{service.priceNew}</span>
            )}
            {service.priceOnly && (
              <span className={styles.priceOnly}>{service.priceOnly}</span>
            )}
          </div>

          <div className={styles.description}>
            {service.details.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {service.details.sections.map((section, i) => (
            <div key={i} className={styles.infoCard}>
              <h3 className={styles.sectionHeading}>{section.title}</h3>
              {section.items && (
                <ul className={styles.list}>
                  {section.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
              {section.text && (
                <p className={styles.sectionText}>{section.text}</p>
              )}
            </div>
          ))}

          <div className={styles.cta}>
            <div className={styles.ctaText}>
              <div className={styles.ctaTitle}>Записаться на приём</div>
              <div className={styles.ctaSub}>Принимаем 24/7</div>
            </div>
            <Link href="/#appointment" className={styles.btnBook}>
              Записаться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
