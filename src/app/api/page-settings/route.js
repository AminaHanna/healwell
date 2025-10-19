import { supabase } from '@/lib/supabase';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageName = searchParams.get('page_name');
    const settingKey = searchParams.get('setting_key');

    let query = supabase.from('page_settings').select('*');

    if (pageName) {
      query = query.eq('page_name', pageName);
    }

    if (settingKey) {
      query = query.eq('setting_key', settingKey);
    }

    const { data, error } = await query;

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data || []);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { page_name, setting_key, setting_value } = body;

    if (!page_name || !setting_key) {
      return Response.json(
        { error: 'page_name and setting_key are required' },
        { status: 400 }
      );
    }

    // Check if setting exists
    const { data: existing } = await supabase
      .from('page_settings')
      .select('id')
      .eq('page_name', page_name)
      .eq('setting_key', setting_key)
      .single();

    let result;
    if (existing) {
      // Update existing
      result = await supabase
        .from('page_settings')
        .update({
          setting_value,
          updated_at: new Date().toISOString(),
        })
        .eq('page_name', page_name)
        .eq('setting_key', setting_key)
        .select();
    } else {
      // Insert new
      result = await supabase
        .from('page_settings')
        .insert([
          {
            page_name,
            setting_key,
            setting_value,
          },
        ])
        .select();
    }

    if (result.error) {
      return Response.json({ error: result.error.message }, { status: 500 });
    }

    return Response.json(result.data[0]);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { page_name, setting_key, setting_value } = body;

    if (!page_name || !setting_key) {
      return Response.json(
        { error: 'page_name and setting_key are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('page_settings')
      .update({
        setting_value,
        updated_at: new Date().toISOString(),
      })
      .eq('page_name', page_name)
      .eq('setting_key', setting_key)
      .select();

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data[0]);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

