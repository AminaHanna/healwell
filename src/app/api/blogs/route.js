import { supabase } from '@/lib/supabase';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const published = searchParams.get('published') !== 'false';

    let query = supabase.from('blogs').select('*');

    if (slug) {
      query = query.eq('slug', slug);
    } else if (published) {
      query = query.eq('published', true);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

