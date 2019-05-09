import React from 'react';
import { Box, Image, Heading, Text } from '../shared/base';

interface TutorialHeaderProps {
  title: string | null;
  description: string | null;
  tags?: string[];
}

const TutorialHeader: React.FunctionComponent<TutorialHeaderProps> = ({
  title,
  description,
  tags,
}) => {
  return (
    <Box p={2}>
      <Image
        width={[0.25, 0.25, 0.25]}
        src="https://cdn-images-1.medium.com/max/1200/1*yTMBzO8zfEhKr4Lky6pjZQ.png"
      />
      <Heading> {title} </Heading>
      <Text>{description} </Text>
      <Image
        width={[0.025, 0.025, 0.025]}
        src="https://image.flaticon.com/icons/svg/84/84510.svg"
      />
      {tags && <Text>{tags.join('  ')}</Text>}
    </Box>
  );
};

export default TutorialHeader;
