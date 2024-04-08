import { Tooltip, Zoom } from '@mui/material';
import { ReactElement } from 'react';

interface CommonTooltipProps {
  children: ReactElement;
  title: string;
}
const CommonTooltip = (props: CommonTooltipProps) => (
  <Tooltip TransitionComponent={Zoom} disableFocusListener title={props.title}>
    {props.children}
  </Tooltip>
);

export default CommonTooltip;
