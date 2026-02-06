import { useEffect } from "react";
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
    reset,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(schema) as unknown as Resolver<User>,
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    } else {
      reset({ firstName: "", lastName: "", email: "", phone: "" });
    }
  }, [initialValues, reset]);

  return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {userFormConfig.map((field) => (
        <div key={field.name} className="relative group">
          <label className="block text-sm font-medium text-slate-700 mb-1.5 transition-colors group-focus-within:text-blue-600">
            {field.label}
          </label>

          <input
            type={field.type === "phone" ? "text" : field.type}
            {...register(field.name as keyof User)}
            className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 border-slate-300 text-slate-900 text-sm transition-all duration-200 outline-none
              placeholder-slate-400
              focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200
              ${
                errors[field.name as keyof User]
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50"
                  : "hover:border-slate-400"
              }`}
            placeholder={`Enter ${field.label.toLowerCase()}`}
          />

          {errors[field.name as keyof User] && (
            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
              {errors[field.name as keyof User]?.message as string}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
      >
        <span>{submitLabel || "Save User"}</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </form>

  );
};


export default UserForm;
