import { NavigateNext } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Box } from '../../../foundation/components/Box';
import { Flex } from '../../../foundation/components/Flex';
import { Image } from '../../../foundation/components/Image';
import { Separator } from '../../../foundation/components/Separator';
import { Spacer } from '../../../foundation/components/Spacer';
import { Text } from '../../../foundation/components/Text';
import { useImage } from '../../../foundation/hooks/useImage';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';

const _Wrapper = styled.li`
  width: 100%;
`;

const _Link = styled(Link)`
  width: 100%;
`;

const _ImgWrapper = styled.div`
  width: 96px;
  height: 96px;
  > img {
    border-radius: ${Radius.SMALL};
  }
`;

const _AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  > img {
    border-radius: 50%;
  }
`;

type Props = {
  bookAuthorImageId: string;
  bookAuthorName: string;
  bookDescription: string;
  bookId: string;
  bookImageAlt: string;
  bookImageId: string;
  bookName: string;
};

export const RankingCard: React.FC<Props> = (props) => {
  const imageUrl = useImage({ height: 96, imageId: props.bookImageId, width: 96 });
  const authorImageUrl = useImage({ height: 32, imageId: props.bookAuthorImageId, width: 32 });

  return (
    <_Wrapper>
      <_Link to={`/books/${props.bookId}`}>
        <Spacer height={Space * 1.5} />
        <Flex align="flex-start" gap={Space * 2.5} justify="flex-start">
          {imageUrl != null && (
            <_ImgWrapper>
              <Image
                alt={props.bookName}
                decoding="async"
                height={96}
                loading="lazy"
                objectFit="cover"
                src={imageUrl}
                width={96}
              />
            </_ImgWrapper>
          )}
          <Box width="100%">
            <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
              <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
                {props.bookName}
              </Text>
              <Text as="p" color={Color.MONO_80} typography={Typography.NORMAL12}>
                {props.bookDescription}
              </Text>
            </Flex>

            <Spacer height={Space * 1} />

            <Flex align="center" gap={Space * 1} justify="flex-end">
              {authorImageUrl != null && (
                <_AvatarWrapper>
                  <Image
                    alt={`${props.bookAuthorName}のアイコン`}
                    decoding="async"
                    height={32}
                    loading="lazy"
                    objectFit="cover"
                    src={authorImageUrl}
                    width={32}
                  />
                </_AvatarWrapper>
              )}
              <Text color={Color.MONO_80} typography={Typography.NORMAL12}>
                {props.bookAuthorName}
              </Text>
            </Flex>

            <Spacer height={Space * 1} />

            <Flex align="center" justify="flex-end">
              <Text color={Color.Secondary} typography={Typography.NORMAL14} weight="bold">
                この漫画を読む
              </Text>
              <NavigateNext style={{ color: Color.Secondary, height: 32, width: 32 }} />
            </Flex>
          </Box>
        </Flex>
        <Spacer height={Space * 1.5} />
        <Separator />
      </_Link>
    </_Wrapper>
  );
};

export const RankingCardSkeleton = styled.li`
  width: 100%;
  height: 155px;
  border-bottom: solid 1px rgb(211, 211, 211);
`;
