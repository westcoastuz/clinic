import fs from "node:fs/promises";
import path from "node:path";

const localFilePath = process.env.VERCEL
  ? path.join("/tmp", "appointments.json")
  : path.join(process.cwd(), "data", "appointments.json");
let writeQueue = Promise.resolve();

async function ensureLocalStore() {
  await fs.mkdir(path.dirname(localFilePath), { recursive: true });

  try {
    await fs.access(localFilePath);
  } catch {
    await fs.writeFile(localFilePath, "[]", { encoding: "utf8", mode: 0o600 });
  }
}

async function readLocalAppointments() {
  await ensureLocalStore();
  const content = await fs.readFile(localFilePath, "utf8");

  try {
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeLocalAppointments(items) {
  await ensureLocalStore();
  const payload = JSON.stringify(items, null, 2);
  const tempFilePath = `${localFilePath}.tmp`;

  await fs.writeFile(tempFilePath, payload, { encoding: "utf8", mode: 0o600 });
  await fs.rename(tempFilePath, localFilePath);
}

function withWriteLock(task) {
  const next = writeQueue.then(task, task);
  writeQueue = next.then(
    () => undefined,
    () => undefined,
  );

  return next;
}

export async function createAppointment({ phone, name, procedure }) {
  const createdAt = new Date().toISOString();

  return withWriteLock(async () => {
    const items = await readLocalAppointments();
    const nextId =
      items.reduce((maxValue, item) => {
        const numericId = Number(item?.id) || 0;
        return numericId > maxValue ? numericId : maxValue;
      }, 0) + 1;

    const record = {
      id: nextId,
      phone,
      name,
      procedure,
      created_at: createdAt,
    };

    items.unshift(record);
    await writeLocalAppointments(items);
    return record;
  });
}

export async function listAppointments() {
  const items = await readLocalAppointments();
  return [...items].sort((a, b) => Number(b.id) - Number(a.id));
}
