import { supabase } from '@/lib/supabase';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const activeOnly = searchParams.get('active_only') === 'true';

    let query = supabase
      .from('team_members')
      .select('*')
      .order('display_order', { ascending: true });

    if (activeOnly) {
      query = query.eq('is_active', true);
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
    const { name, position, image_url, bio, social_links, display_order, is_active } = body;

    if (!name || !position) {
      return Response.json(
        { error: 'name and position are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('team_members')
      .insert([
        {
          name,
          position,
          image_url: image_url || null,
          bio: bio || null,
          social_links: social_links || {},
          display_order: display_order || 0,
          is_active: is_active !== undefined ? is_active : true,
        },
      ])
      .select();

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data[0], { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, name, position, image_url, bio, social_links, display_order, is_active } = body;

    if (!id) {
      return Response.json(
        { error: 'id is required' },
        { status: 400 }
      );
    }

    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (position !== undefined) updateData.position = position;
    if (image_url !== undefined) updateData.image_url = image_url;
    if (bio !== undefined) updateData.bio = bio;
    if (social_links !== undefined) updateData.social_links = social_links;
    if (display_order !== undefined) updateData.display_order = display_order;
    if (is_active !== undefined) updateData.is_active = is_active;
    updateData.updated_at = new Date().toISOString();

    const { data, error } = await supabase
      .from('team_members')
      .update(updateData)
      .eq('id', id)
      .select();

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data[0]);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return Response.json(
        { error: 'id is required' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('team_members')
      .delete()
      .eq('id', id);

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

