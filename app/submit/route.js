import { NextResponse } from "next/server";
import { normalizeProcedureName } from "@/lib/procedures";
import { createAppointment } from "@/lib/storage";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const phone = String(formData.get("phone") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const procedureRaw = String(formData.get("procedure") || "");
    const procedure = normalizeProcedureName(procedureRaw);

    if (!phone || !name || !procedure) {
      return NextResponse.json(
        { detail: "Barcha maydonlarni to'ldiring" },
        { status: 422 },
      );
    }

    if (name.length > 100 || phone.length > 20 || procedure.length > 100) {
      return NextResponse.json(
        { detail: "Kiritilgan ma'lumot juda uzun" },
        { status: 422 },
      );
    }

    await createAppointment({ phone, name, procedure });

    return NextResponse.json({
      success: true,
      message: "So'rovingiz qabul qilindi!",
    });
  } catch (error) {
    return NextResponse.json(
      {
        detail:
          error instanceof Error
            ? error.message
            : "Serverda xatolik yuz berdi",
      },
      { status: 500 },
    );
  }
}
