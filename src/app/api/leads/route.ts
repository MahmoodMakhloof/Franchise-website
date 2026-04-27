import { NextResponse } from 'next/server';
import { connectMongo } from '@/lib/db/mongo';
import { Lead } from '@/lib/db/models/Lead';
import { leadSchema, type LeadInput } from '@/lib/schemas/lead';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function sendTelegram(data: LeadInput) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const text = [
    `🆕 *New Lead*`,
    ``,
    `👤 ${data.fullName}`,
    `📧 ${data.email}`,
    `📱 ${data.phone}`,
    `🏙️ ${data.city}`,
    `💰 ${data.budget}`,
    `🍽️ Brand: ${data.brand}`,
    data.message ? `\n📝 ${data.message}` : '',
  ]
    .filter((l) => l !== undefined)
    .join('\n');

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: 'validation_error', issues: parsed.error.issues },
        { status: 400 }
      );
    }

    await connectMongo();

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      undefined;
    const userAgent = req.headers.get('user-agent') || undefined;

    const doc = await Lead.create({ ...parsed.data, ip, userAgent });

    sendTelegram(parsed.data).catch((e) =>
      console.error('Telegram notification failed', e)
    );

    return NextResponse.json({ ok: true, id: String(doc._id) }, { status: 201 });
  } catch (err) {
    console.error('POST /api/leads failed', err);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
