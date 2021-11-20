type QrCodeProps = {
  url: string;
};

export const QrCode = ({ url }: QrCodeProps) => {
  return (
    <div className="qrcode">
      <img src={url} alt="" />
    </div>
  );
};
