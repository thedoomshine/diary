export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blocks: {
        Row: {
          blocked_at: string
          blockee_id: string
          blocker_id: string
        }
        Insert: {
          blocked_at?: string
          blockee_id: string
          blocker_id: string
        }
        Update: {
          blocked_at?: string
          blockee_id?: string
          blocker_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "blocks_blockee_id_fkey"
            columns: ["blockee_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocks_blocker_id_fkey"
            columns: ["blocker_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      circle_members: {
        Row: {
          created_at: string | null
          created_by: string
          deleted_at: string | null
          id: string
          members: string[]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          deleted_at?: string | null
          id: string
          members?: string[]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          deleted_at?: string | null
          id?: string
          members?: string[]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "circle_members_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "circle_members_id_fkey"
            columns: ["id"]
            referencedRelation: "circles"
            referencedColumns: ["id"]
          }
        ]
      }
      circles: {
        Row: {
          bio: string | null
          created_at: string | null
          created_by: string
          id: string
          name: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          created_by: string
          id?: string
          name?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          created_by?: string
          id?: string
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "circles_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      event_invite_status: {
        Row: {
          event_id: string
          invitee_id: string
          inviter_id: string
          specified_date_time: string
          specifier_id: string
          status_code: string
        }
        Insert: {
          event_id: string
          invitee_id: string
          inviter_id: string
          specified_date_time?: string
          specifier_id: string
          status_code: string
        }
        Update: {
          event_id?: string
          invitee_id?: string
          inviter_id?: string
          specified_date_time?: string
          specifier_id?: string
          status_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_invite_invitee_id_fkey"
            columns: ["invitee_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_invite_inviter_id_fkey"
            columns: ["inviter_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_invite_status_specifier_id_fkey"
            columns: ["specifier_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      event_invites: {
        Row: {
          created_at: string
          event_id: string | null
          invitee_id: string
          inviter_id: string
        }
        Insert: {
          created_at?: string
          event_id?: string | null
          invitee_id: string
          inviter_id: string
        }
        Update: {
          created_at?: string
          event_id?: string | null
          invitee_id?: string
          inviter_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_invites_event_id_fkey"
            columns: ["event_id"]
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invite_to_invitee_fkey"
            columns: ["invitee_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invite_to_inviter_fkey"
            columns: ["inviter_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      events: {
        Row: {
          all_day: boolean
          canceled_at: string | null
          created_at: string | null
          created_by: string
          deleted_at: string | null
          description: string | null
          id: string
          location: unknown
          repeat_interval: number | null
          updated_at: string | null
          visibility: Database["public"]["Enums"]["visibility_enum"] | null
        }
        Insert: {
          all_day?: boolean
          canceled_at?: string | null
          created_at?: string | null
          created_by?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          location: unknown
          repeat_interval?: number | null
          updated_at?: string | null
          visibility?: Database["public"]["Enums"]["visibility_enum"] | null
        }
        Update: {
          all_day?: boolean
          canceled_at?: string | null
          created_at?: string | null
          created_by?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          location?: unknown
          repeat_interval?: number | null
          updated_at?: string | null
          visibility?: Database["public"]["Enums"]["visibility_enum"] | null
        }
        Relationships: [
          {
            foreignKeyName: "events_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      followers: {
        Row: {
          followed_at: string
          followee_id: string
          follower_id: string
        }
        Insert: {
          followed_at?: string
          followee_id: string
          follower_id: string
        }
        Update: {
          followed_at?: string
          followee_id?: string
          follower_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "follower_to_followee_fkey"
            columns: ["followee_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follower_to_follower_fkey"
            columns: ["follower_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_feeds: {
        Row: {
          id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_feeds_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_feeds_events: {
        Row: {
          event_id: string
          user_id: string
        }
        Insert: {
          event_id: string
          user_id: string
        }
        Update: {
          event_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_feeds_events_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          bio: string | null
          birth_date: string | null
          display_name: string
          id: string
          location: string | null
          private: boolean
          profile_image_url: string | null
          profile_type: Database["public"]["Enums"]["profile_type_enum"] | null
          username: string
          verified: boolean
          visibility: Database["public"]["Enums"]["visibility_enum"] | null
          website: string | null
        }
        Insert: {
          bio?: string | null
          birth_date?: string | null
          display_name: string
          id: string
          location?: string | null
          private?: boolean
          profile_image_url?: string | null
          profile_type?: Database["public"]["Enums"]["profile_type_enum"] | null
          username: string
          verified?: boolean
          visibility?: Database["public"]["Enums"]["visibility_enum"] | null
          website?: string | null
        }
        Update: {
          bio?: string | null
          birth_date?: string | null
          display_name?: string
          id?: string
          location?: string | null
          private?: boolean
          profile_image_url?: string | null
          profile_type?: Database["public"]["Enums"]["profile_type_enum"] | null
          username?: string
          verified?: boolean
          visibility?: Database["public"]["Enums"]["visibility_enum"] | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      profile_type_enum: "personal" | "business" | "creator"
      visibility_enum:
        | "public"
        | "friends of friends"
        | "private"
        | "followers"
        | "friends"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type UserType = Database['public']['Tables']['users']['Row']
