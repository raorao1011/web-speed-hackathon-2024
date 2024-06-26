import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { Flex } from '../../../foundation/components/Flex';
import { Image } from '../../../foundation/components/Image';
import { Text } from '../../../foundation/components/Text';
import { useImage } from '../../../foundation/hooks/useImage';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';

const _Wrapper = styled(Link)`
  display: grid;
  gap: ${Space * 1}px;
  background-color: ${Color.MONO_A};
  padding: ${Space * 1.5}px;
  border-radius: ${Radius.SMALL};
  grid-template-columns: auto 1fr;
  flex-shrink: 0;
  border: 1px solid ${Color.MONO_30};
`;

const _ImgWrapper = styled.div`
  width: 96px;
  height: 96px;
  > img {
    border-radius: ${Radius.SMALL};
  }
`;

const _ContentWrapper = styled.div`
  display: grid;
  gap: ${Space * 1}px;
  max-width: 200px;
  width: 100%;
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

export const FeatureCard: React.FC<Props> = (props) => {

  const imageUrl = useImage({ height: 96, imageId: props.bookImageId, width: 96 });
  const authorImageUrl = useImage({ height: 32, imageId: props.bookAuthorImageId, width: 32 });

  return (
    <_Wrapper to={`/books/${props.bookId}`}>
      {imageUrl != null && (
        <_ImgWrapper>
          <Image alt={props.bookImageAlt} height={96} objectFit="cover" src={imageUrl} width={96} />
        </_ImgWrapper>
      )}

      <_ContentWrapper>
        <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
          {props.bookName}
        </Text>
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL14}>
          {props.bookDescription}
        </Text>

        <Flex align="center" gap={Space * 1} justify="flex-end">
          {authorImageUrl != null && (
            <_AvatarWrapper>
              <Image alt={props.bookAuthorName} height={32} objectFit="cover" src={authorImageUrl} width={32} />
            </_AvatarWrapper>
          )}
          <Text color={Color.MONO_100} typography={Typography.NORMAL14}>
            {props.bookAuthorName}
          </Text>
        </Flex>
      </_ContentWrapper>
    </_Wrapper>
  );
};

export const FeatureCardSkeleton = styled.div`
  gap: ${Space * 1}px;
  background-color: ${Color.MONO_A};
  border-radius: ${Radius.SMALL};
  flex-shrink: 0;
  border: 1px solid ${Color.MONO_30};
  width: 328px;
  height: 204px;
`;
