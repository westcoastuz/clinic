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
  return [
    "🦷 НОВАЯ ЗАЯВКА НА ПРИЁМ",
    "Smile Avenue",
    "",
    `👤 Имя: ${name}`,
    `📞 Телефон: ${phone}`,
    `🩺 Процедура: ${procedure}`,
    "",
    `🕐 Отправлено: ${formatTashkentDate(submittedAt)}`,
  ].join("\n");
}

export async function sendAppointmentToTelegram({ phone, name, procedure }) {
  const botToken = getRequiredEnvironmentVariable("TELEGRAM_BOT_TOKEN");
  const chatId = getRequiredEnvironmentVariable("TELEGRAM_CHAT_ID");
  const submittedAt = new Date();

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatAppointmentMessage({
          phone,
          name,
          procedure,
          submittedAt,
        }),
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
