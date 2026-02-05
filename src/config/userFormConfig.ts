export type FieldType = "text" | "email" | "phone";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
}

export const userFormConfig: FormField[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "phone",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
  },
];
