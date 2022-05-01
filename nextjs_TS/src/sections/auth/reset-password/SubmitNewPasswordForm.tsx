import * as Yup from 'yup';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import { FormProvider, RHFTextField } from '../../../components/hook-form';

import axios from '../../../utils/axios';

// ----------------------------------------------------------------------

type FormValuesProps = {
  password: string;
};

type Props = {
  onSent: VoidFunction;
  onGetEmail: (value: string) => void;
  token: string | string[] | undefined;
};

export default function SubmitNewPasswordForm({ onSent, onGetEmail, token }: Props) {
  const isMountedRef = useIsMountedRef();

  const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
  });

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: { password: '' },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await axios.post(`https://api.anypayinc.com/password-resets/${token}`, {
        password: data.password
      });
      if (isMountedRef.current) {
        onSent();
        //onGetEmail(data.email);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="password" label="New Password" />

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Submit
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
