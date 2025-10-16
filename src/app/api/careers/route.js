import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
      // Get single career by slug
      const { data, error } = await supabase
        .from('careers')
        .select('*')
        .eq('slug', slug)
        .eq('active', true)
        .single();

      if (error) {
        return Response.json({ error: error.message }, { status: 404 });
      }

      return Response.json([data]);
    } else {
      // Get all active careers
      const { data, error } = await supabase
        .from('careers')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false });

      if (error) {
        return Response.json({ error: error.message }, { status: 500 });
      }

      return Response.json(data || []);
    }
  } catch (error) {
    console.error('Error fetching careers:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

