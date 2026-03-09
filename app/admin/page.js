import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import { listAppointments } from "@/lib/storage";
import styles from "./admin.module.css";

function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleString("ru-RU", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
}

function buildTopProcedures(appointments) {
  const counts = new Map();

  for (const item of appointments) {
    const key = item.procedure || "Другое";
    counts.set(key, (counts.get(key) || 0) + 1);
  }

  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
}

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const appointments = await listAppointments();
  const topProcedures = buildTopProcedures(appointments);

  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Admin Dashboard</h1>
            <p className={styles.meta}>Submitted applications: {appointments.length}</p>
          </div>

          <form action="/api/admin/logout" method="post">
            <button className={styles.logout} type="submit">
              Logout
            </button>
          </form>
        </header>

        <section className={styles.cards}>
          <article className={styles.card}>
            <div className={styles.cardLabel}>Total Requests</div>
            <div className={styles.cardValue}>{appointments.length}</div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardLabel}>Latest Request</div>
            <div className={styles.cardValue}>
              {appointments[0] ? formatDate(appointments[0].created_at) : "—"}
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardLabel}>Top Procedure</div>
            <div className={styles.cardValue}>{topProcedures[0]?.[0] || "—"}</div>
          </article>
        </section>

        <section className={styles.tableWrap}>
          {appointments.length === 0 ? (
            <div className={styles.empty}>No applications yet.</div>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Created At</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Procedure</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td className={styles.muted}>{formatDate(item.created_at)}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.procedure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </main>
  );
}
