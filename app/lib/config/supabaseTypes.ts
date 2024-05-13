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
      appointments_anon: {
        Row: {
          appointment_id: number
          barangay: string
          city: string
          date_of_birth: string
          department: string
          doctor_uuid: string
          email: string
          first_name: string
          house_number: number
          last_name: string
          middle_name: string
          mobile_number: string
          province: string
          sex: string
          street: string
          zip_code: number
        }
        Insert: {
          appointment_id?: number
          barangay: string
          city: string
          date_of_birth: string
          department: string
          doctor_uuid?: string
          email: string
          first_name: string
          house_number: number
          last_name: string
          middle_name: string
          mobile_number: string
          province: string
          sex: string
          street: string
          zip_code: number
        }
        Update: {
          appointment_id?: number
          barangay?: string
          city?: string
          date_of_birth?: string
          department?: string
          doctor_uuid?: string
          email?: string
          first_name?: string
          house_number?: number
          last_name?: string
          middle_name?: string
          mobile_number?: string
          province?: string
          sex?: string
          street?: string
          zip_code?: number
        }
        Relationships: [
          {
            foreignKeyName: "appointments_anon_doctor_uuid_fkey"
            columns: ["doctor_uuid"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
        ]
      }
      doctors: {
        Row: {
          board_certifications: string | null
          experience: number | null
          id: string
          medical_degree: string | null
          medical_license_number: string | null
          speciality: string | null
        }
        Insert: {
          board_certifications?: string | null
          experience?: number | null
          id?: string
          medical_degree?: string | null
          medical_license_number?: string | null
          speciality?: string | null
        }
        Update: {
          board_certifications?: string | null
          experience?: number | null
          id?: string
          medical_degree?: string | null
          medical_license_number?: string | null
          speciality?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "doctors_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
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
