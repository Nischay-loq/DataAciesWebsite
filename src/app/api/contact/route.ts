import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ success: false, errors: parsed.error.format() }, { status: 400 });
    }

    const data = parsed.data;

    // TODO: Integrate with CRM, email service, or queue here.
    // For now, log and return success.
    // eslint-disable-next-line no-console
    console.info("Contact form received:", JSON.stringify(data));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Contact API error", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
