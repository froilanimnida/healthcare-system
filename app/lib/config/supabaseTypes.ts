export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          age: number | null
          alternate_email: string | null
          alternate_mobile_number: number | null
          appointment_id: string
          barangay: string | null
          city: string
          date_of_appointment: string
          date_of_birth: string
          email: string
          first_name: string
          home_address_line_1: string
          home_address_line_2: string
          last_name: string
          middle_name: string
          mobile_number: number
          remarks: string | null
          service: string
          sex: string
          status: string | null
          user_id: string | null
          user_uuid: string | null
          zip_code: number
        }
        Insert: {
          age?: number | null
          alternate_email?: string | null
          alternate_mobile_number?: number | null
          appointment_id?: string
          barangay?: string | null
          city: string
          date_of_appointment: string
          date_of_birth: string
          email: string
          first_name: string
          home_address_line_1: string
          home_address_line_2: string
          last_name: string
          middle_name: string
          mobile_number: number
          remarks?: string | null
          service: string
          sex: string
          status?: string | null
          user_id?: string | null
          user_uuid?: string | null
          zip_code: number
        }
        Update: {
          age?: number | null
          alternate_email?: string | null
          alternate_mobile_number?: number | null
          appointment_id?: string
          barangay?: string | null
          city?: string
          date_of_appointment?: string
          date_of_birth?: string
          email?: string
          first_name?: string
          home_address_line_1?: string
          home_address_line_2?: string
          last_name?: string
          middle_name?: string
          mobile_number?: number
          remarks?: string | null
          service?: string
          sex?: string
          status?: string | null
          user_id?: string | null
          user_uuid?: string | null
          zip_code?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          address: string | null
          age: number | null
          barangay: string | null
          city: string | null
          first_name: string | null
          gender: string | null
          last_name: string | null
          middle_name: string | null
          role: string | null
          user_id: string
        }
        Insert: {
          address?: string | null
          age?: number | null
          barangay?: string | null
          city?: string | null
          first_name?: string | null
          gender?: string | null
          last_name?: string | null
          middle_name?: string | null
          role?: string | null
          user_id: string
        }
        Update: {
          address?: string | null
          age?: number | null
          barangay?: string | null
          city?: string | null
          first_name?: string | null
          gender?: string | null
          last_name?: string | null
          middle_name?: string | null
          role?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
