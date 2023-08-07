export const highlightMatches = (text: string, query: string): JSX.Element => {
  if (!query) {
    return <>{text}</>;
  }

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} className="highlighted">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};
