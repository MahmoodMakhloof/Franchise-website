import { NextResponse } from 'next/server';
import { leadSchema, type LeadInput } from '@/lib/schemas/lead';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function sendTelegram(data: LeadInput) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) throw new Error('Telegram env vars not set');

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
  ].join('\n');

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
  });

  if (!res.ok) throw new Error(`Telegram error: ${res.status}`);
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

    await sendTelegram(parsed.data);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error('POST /api/leads failed', err);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
