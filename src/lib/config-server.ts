import { supabase, isSupabaseConfigured } from './supabase';
import { userConfig } from '../config/index';

export interface Background {
    id: string;
    url: string;
    display_url?: string;
    name?: string;
}

export interface AppConfig {
    music: {
        playlistId: string | null;
        playlistName: string | null;
    };
    photoAlbum: {
        albumUrl: string | null;
    };
    seo: {
        title: string | null;
        description: string | null;
        keywords: string[];
    };
    backgrounds: Background[];
}

export async function getAppConfig(): Promise<AppConfig> {
    const fallback = {
        music: {
            playlistId: null,
            playlistName: null,
        },
        photoAlbum: {
            albumUrl: null,
        },
        seo: {
            title: userConfig.seo.title,
            description: userConfig.seo.description,
            keywords: [],
        },
        backgrounds: [],
    };

    if (!isSupabaseConfigured()) {
        return fallback;
    }

    try {
        const { data, error } = await supabase!
            .from('app_config')
            .select('key, value');

        if (error || !data) {
            console.error('[lib/config-server] Database error:', error);
            return fallback;
        }

        const configMap = new Map((data || []).map((item) => [item.key, item.value]));

        const dbSeoKeywords = configMap.get('seo_keywords');
        let seoKeywords: string[] = [];
        if (dbSeoKeywords && typeof dbSeoKeywords === 'string' && dbSeoKeywords.trim()) {
            try {
                const parsed = JSON.parse(dbSeoKeywords.trim());
                if (Array.isArray(parsed)) {
                    seoKeywords = parsed.filter(k => typeof k === 'string');
                }
            } catch (e) {
                seoKeywords = dbSeoKeywords.split(',').map(k => k.trim()).filter(k => k.length > 0);
            }
        }

        const backgrounds = await getBackgrounds();

        return {
            music: {
                playlistId: configMap.get('apple_music_playlist_url') || null,
                playlistName: configMap.get('apple_music_playlist_name') || null,
            },
            photoAlbum: {
                albumUrl: configMap.get('icloud_photos_album_url') || null,
            },
            seo: {
                title: configMap.get('seo_title') || userConfig.seo.title,
                description: configMap.get('seo_description') || userConfig.seo.description,
                keywords: seoKeywords,
            },
            backgrounds,
        };
    } catch (err) {
        console.error('[lib/config-server] Unexpected error:', err);
        return fallback;
    }
}

export async function getBackgrounds(): Promise<Background[]> {
    if (!isSupabaseConfigured()) {
        return [];
    }

    try {
        const { data, error } = await supabase!
            .from('backgrounds')
            .select('id, url, display_url, name')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('[lib/config-server] Database error fetching backgrounds:', error);
            return [];
        }

        return data || [];
    } catch (err) {
        console.error('[lib/config-server] Unexpected error fetching backgrounds:', err);
        return [];
    }
}
