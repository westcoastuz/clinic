import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services-data";
import styles from "./ServicesList.module.css";

export default function ServicesList() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.sectionTag}>Услуги</div>
      <h2 className={styles.sectionTitle}>
        Наши <span>услуги и цены</span>
      </h2>
      <p className={styles.sectionDesc}>
        Полный спектр стоматологических услуг по доступным ценам. Принимаем 24/7.
      </p>

      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.slug} className={styles.card}>
            <div className={styles.cardMedia}>
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
              <span className={styles.cardMediaTitle}>{service.shortName}</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardName}>{service.name}</div>
              <div className={styles.cardShort}>{service.shortDesc}</div>
              <div className={styles.cardPricing}>
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
            </div>
            <div className={styles.cardActions}>
              <Link
                href={`/services/${service.slug}`}
                className={styles.btnMore}
              >
                Подробнее
              </Link>
              <a href="#appointment" className={styles.btnBook}>
                Записаться
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
