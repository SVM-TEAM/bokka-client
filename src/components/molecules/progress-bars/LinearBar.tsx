import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material';
import CommonTooltip from 'src/components/atoms/tooltips/CommonTooltip';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[400],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));

interface LinearBarProps {
  progress: number;
}

const LinearBar = (props: LinearBarProps) => {
  return (
    <CommonTooltip title={`오늘의 학습률: ${props.progress}%`}>
      <BorderLinearProgress variant="determinate" value={props.progress} />
    </CommonTooltip>
  );
};

export default LinearBar;
