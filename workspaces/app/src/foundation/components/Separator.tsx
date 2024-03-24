import styled from 'styled-components';

const _Separator = styled.div`
  width: 100%;
  background-color: rgb(211, 211, 211);
  height: 1px;
`;

export const Separator: React.FC = () => {
  // const wrapperRef = useRef<HTMLDivElement>(null);
  // const [imgUrl, setImgUrl] = useState<string | null>(null);

  // useEffect(() => {
  //   const width = wrapperRef.current?.clientWidth;

  //   const canvas = document.createElement('canvas');
  //   canvas.width = width ?? 0;
  //   canvas.height = 1;

  //   const ctx = canvas.getContext('2d');

  //   if (ctx == null) {
  //     return;
  //   }

  //   ctx.moveTo(0, 0);
  //   ctx.lineTo(width ?? 0, 0);

  //   ctx.strokeStyle = Color.MONO_30;
  //   ctx.lineWidth = 1;

  //   ctx.stroke();

  //   setImgUrl(canvas.toDataURL('image/png'));
  // }, []);

  return <_Separator aria-hidden={true} />;
};
