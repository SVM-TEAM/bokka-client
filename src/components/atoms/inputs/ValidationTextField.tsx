import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface FormInputTextProps {
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute; // "password", "email", "text" 등
}

const ValidationTextField = ({
  name,
  label,
  type = 'text',
}: FormInputTextProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      render={({ field }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          autoComplete="off"
          variant="outlined"
          error={!!error}
          fullWidth
          helperText={error?.message?.toString() ?? ''}
        />
      )}
    />
  );
};

export default ValidationTextField;
