import {
  updateBio,
  updateImage,
  updateProfileInfo
} from '@/features/user/user-info-slice';
import { BioFormSchema, ChangePasswordFormSchema, ProfileFormSchema } from '@/lib/definitions';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { z } from 'zod';

export async function save(
  values: z.infer<typeof ProfileFormSchema>,
  onSuccess: () => void,
  dispatch: Dispatch<UnknownAction>
) {
  console.log('Form data is valid, creating user...', values);
  // dispatch(loginUser({ ...values, image: '' }));
  dispatch(updateProfileInfo(values));
  onSuccess();
  // Call the provider or db to create a user...
}

export async function saveBio(
  values: z.infer<typeof BioFormSchema>,
  onSuccess: () => void,
  dispatch: Dispatch<UnknownAction>
) {
  console.log('Bio data is valid, updating bio...', values);
  dispatch(updateBio(values.bio ?? ''));
  // Here you would typically call an API to update the user's bio
  // For now, we just log it and call onSuccess
  // dispatch(loginUser({ bio: values.bio ?? '' }));
  onSuccess();
}

export async function saveImage(
  file: string,
  onSuccess: () => void,
  dispatch: Dispatch<UnknownAction>
) {
  console.log('Image file is valid, uploading image...', file);
  dispatch(updateImage(file)); // change image with link from backend
  // Here you would typically call an API to upload the image
  // For now, we just log it and call onSuccess
  // dispatch(loginUser({ image: URL.createObjectURL(file) }));
  onSuccess();
}

export async function changepassword(
  values: z.infer<typeof ChangePasswordFormSchema>,
  onSuccess: () => void,
  dispatch: Dispatch<UnknownAction>
) {
  console.log('Password data is valid, changing password...', values);
  // Here you would typically call an API to change the user's password
  // For now, we just log it and call onSuccess
  // dispatch(loginUser({ password: values.newpassword }));
  onSuccess();
}
