import { createServerClient as _createServerClient } from '@supabase/auth-helpers-remix';

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          created_at: string;
          content: string;
          user_id: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          content: string;
          user_id?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          content?: string;
          user_id?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

export const createServerClient = ({
  request,
  response
}: {
  request: Request
  response: Response
}) =>
_createServerClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
  { request, response }
);