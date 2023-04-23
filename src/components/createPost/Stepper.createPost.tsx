import { Stepper } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import { BsUiChecksGrid } from 'react-icons/bs';
import { HiOutlinePencilAlt, HiOutlineUpload } from 'react-icons/hi';

function StepperCreatePost(props: {
  activeStep: number;
  setActiveStep: (stepIndex: number) => void;
}) {
  return (
    <Stepper
      breakpoint='md'
      active={props.activeStep}
      className='mb-10'
      onStepClick={props.setActiveStep}
      completedIcon={<IconCircleCheck />}
    >
      <Stepper.Step
        icon={<HiOutlinePencilAlt />}
        label='Step 1'
        description='Take about this post'
      />
      <Stepper.Step
        icon={<BsUiChecksGrid />}
        label='Step 2'
        description='Choose post variant'
      />
      <Stepper.Step
        icon={<HiOutlineUpload />}
        label='Step 3'
        description='Upload assets'
      />
    </Stepper>
  );
}

StepperCreatePost.defaultProps = {
  setActiveStep: () => {},
  activeStep: 0,
};

export default StepperCreatePost;
