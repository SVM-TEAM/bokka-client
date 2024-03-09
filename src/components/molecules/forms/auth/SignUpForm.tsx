import { Typography, Button } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ValidationTextField from 'src/components/atoms/inputs/ValidationTextField';

interface ISignUpFormInput {
  userId: string;
  password: string;
  passwordConfirm: string;
}

const schema = yup.object().shape({
  userId: yup
    .string()
    .required('이메일은 필수 항목입니다.')
    .email('유효한 이메일 주소가 아닙니다.'),
  password: yup.string().required('비밀번호는 필수 항목입니다.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), ''])
    .required(),
});

const SignUpForm = () => {
  const methods = useForm<ISignUpFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ISignUpFormInput) => {
    console.log(data);
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        회원가입
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ValidationTextField name="userId" label="이메일" />
          <ValidationTextField
            name="password"
            label="비밀번호"
            type="password"
          />
          <ValidationTextField
            name="passwordConfirm"
            label="비밀번호 확인"
            type="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            가입하기
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default SignUpForm;
