interface TitleProps {
  title: string;
}

export default function Title(props: TitleProps) {
  const { title } = props;

  return <h1 className="text-3xl font-bold 2xl:text-4xl">{title}</h1>;
}
