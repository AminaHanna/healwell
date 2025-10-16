import { supabase } from '@/lib/supabase';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const active = searchParams.get('active') !== 'false';

    let query = supabase.from('services').select('*');

    if (slug) {
      query = query.eq('slug', slug);
    } else if (active) {
      query = query.eq('active', true);
    }

    const { data, error } = await query.order('display_order', { ascending: true });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

