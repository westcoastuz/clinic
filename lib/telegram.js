function getRequiredEnvironmentVariable(name) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`${name} is not configured`);
  }

  return value;
}

const TASHKENT_TIME_ZONE = "Asia/Tashkent";

function formatTashkentDate(date) {
  const formatted = new Intl.DateTimeFormat("ru-RU", {
    timeZone: TASHKENT_TIME_ZONE,
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);

  return `${formatted} (Ташкент, UTC+5)`;
}

function formatAppointmentMessage({ phone, name, procedure, submittedAt }) {
  let text = "";
  const entities = [];

  function append(value, entityTypes = []) {
    const content = String(value);
    const offset = text.length;
    text += content;

    for (const type of entityTypes) {
      entities.push({ type, offset, length: content.length });
    }
  }

  append("🦷 НОВАЯ ЗАЯВКА НА ПРИЁМ", ["bold"]);
  append("\n");
  append("Smile Avenue", ["italic"]);
  append("\n\n👤 Имя: ");
  append(name, ["bold"]);
  append("\n📞 Телефон: ");
  append(phone, ["bold", "phone_number"]);
  append("\n🩺 Процедура: ");
  append(procedure, ["bold"]);
  append("\n\n🕐 Отправлено: ");
  append(formatTashkentDate(submittedAt), ["bold"]);

  return { text, entities };
}

export async function sendAppointmentToTelegram({ phone, name, procedure }) {
  const botToken = getRequiredEnvironmentVariable("TELEGRAM_BOT_TOKEN");
  const chatId = getRequiredEnvironmentVariable("TELEGRAM_CHAT_ID");
  const submittedAt = new Date();
  const message = formatAppointmentMessage({
    phone,
    name,
    procedure,
    submittedAt,
  });

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        ...message,
      }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    let description = "Unknown Telegram API error";

    try {
      const result = await response.json();
      description = result.description || description;
    } catch {
      // Telegram can occasionally return a non-JSON gateway response.
    }

    throw new Error(`Telegram API error (${response.status}): ${description}`);
  }
}
