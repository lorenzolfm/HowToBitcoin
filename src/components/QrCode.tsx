export const QrCode = (
  { url }: { url: string },
): JSX.Element | null => {
  if (!url) return null;

  return (
    <div className="ui segment">
      <img src={url} alt="qr-code" />
    </div>
  );
};
