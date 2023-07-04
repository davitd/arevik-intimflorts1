export const BirthdateIcon = ({
  onClick,
  step,
  status,
}: {
  onClick: (value: string) => void;
  step: string;
  status: string;
}) => {
  const color =
    status === 'passed'
      ? '#FFDC22'
      : status === 'active'
      ? '#F76448'
      : '#E5E8EB';
  return (
    <svg
      onClick={() => onClick(step)}
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 15.5V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V15.5M1 13V12C1 11.4696 1.21071 10.9609 1.58579 10.5858C1.96086 10.2107 2.46957 10 3 10H17C17.5304 10 18.0391 10.2107 18.4142 10.5858C18.7893 10.9609 19 11.4696 19 12V13M10 7V10M10 7C11.262 7 12 6.032 12 4.375C12 2.718 10 1 10 1C10 1 8 2.718 8 4.375C8 6.032 8.738 7 10 7Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
