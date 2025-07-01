import { z } from 'zod';

// auth form inputs
export const SignupFormSchema = z
  .object({
    firstname: z.string().min(2, { message: 'At least 2 characters long.' }).trim(),
    lastname: z.string().min(2, { message: 'At least 2 characters long.' }).trim(),
    nickname: z.string().min(2, { message: 'Nickname must be at least 2 characters long.' }).trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
      .string()
      .min(8, { message: 'Be at least 8 characters long' })
      .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
      .regex(/[0-9]/, { message: 'Contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.',
      })
      .trim(),
    confirmpassword: z
      .string()
      .min(8, { message: 'Be at least 8 characters long' })
      .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
      .regex(/[0-9]/, { message: 'Contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.',
      })
      .trim(),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: 'Passwords do not match.',
    path: ['confirmpassword'],
  });

export const LoginFormSchema = z.object({
  identifier: z.string().min(2, { message: 'This field is required.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
});

export const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
});

export const OtpFormSchema = z.object({
  pin: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.',
  }),
});

export const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Be at least 8 characters long' })
      .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
      .regex(/[0-9]/, { message: 'Contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.',
      })
      .trim(),
    confirmpassword: z
      .string()
      .min(8, { message: 'Be at least 8 characters long' })
      .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
      .regex(/[0-9]/, { message: 'Contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.',
      })
      .trim(),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: 'Passwords do not match.',
    path: ['confirmpassword'],
  });

// Profile form schema
export const ProfileFormSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: 'First Name must be at least 2 characters long.' })
    .trim(),
  lastname: z.string().min(2, { message: 'Last Name must be at least 2 characters long.' }).trim(),
  nickname: z.string().min(2, { message: 'Nickname must be at least 2 characters long.' }).trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
});

export const BioFormSchema = z.object({
  bio: z.string().max(500, { message: 'Bio must be at most 500 characters long.' }).optional(),
});

export const ChangePasswordFormSchema = z
  .object({
    oldpassword: z
      .string()
      .min(8, { message: 'Be at least 8 characters long' })
      .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
      .regex(/[0-9]/, { message: 'Contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.',
      })
      .trim(),
    newpassword: z
      .string()
      .min(8, { message: 'Be at least 8 characters long' })
      .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
      .regex(/[0-9]/, { message: 'Contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.',
      })
      .trim(),
    confirmpassword: z
      .string()
      .min(8, { message: 'Be at least 8 characters long' })
      .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
      .regex(/[0-9]/, { message: 'Contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.',
      })
      .trim(),
  })
  .refine((data) => data.newpassword === data.confirmpassword, {
    message: 'Passwords do not match.',
    path: ['confirmpassword'],
  });
