import type { Meta, StoryObj } from '@storybook/react';
import SurveyImg from '../components/atoms/GenreSurveyImg';

const meta: Meta<typeof SurveyImg> = {
  title: 'Components/Card',
  component: SurveyImg,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GenreSurveyImage: Story = {
  args: {
    isChecked: false,
    name: '스릴러',
  },
};
