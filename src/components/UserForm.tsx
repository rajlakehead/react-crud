import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormConfig } from "../config/userFormConfig";
import { generateZodSchema } from "../utils/formValidation";
import type { User } from "../types/user";

interface Props {
  initialValues?: User;
  onSubmit: (data: User) => void;
  submitLabel?: string;
}

const schema = generateZodSchema(userFormConfig);

const UserForm = ({ initialValues, onSubmit, submitLabel }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(schema) as unknown as Resolver<User>,
    defaultValues: initialValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded-lg p-6 space-y-5"
    >
      {userFormConfig.map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            {field.label}
          </label>

          <input
            type={field.type === "phone" ? "text" : field.type}
            {...register(field.name as keyof User)}
            className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2
              ${
                errors[field.name as keyof User]
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
          />

          {errors[field.name as keyof User] && (
            <p className="text-xs text-red-500">
              {errors[field.name as keyof User]?.message as string}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        {submitLabel || "Save User"}
      </button>
    </form>
  );
};


export default UserForm;
