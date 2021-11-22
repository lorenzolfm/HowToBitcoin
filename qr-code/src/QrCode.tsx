type QrCodeProps = {
  url: string;
};

export const QrCode = ({ url }: QrCodeProps) => {
  const renderLoader = () => {
    return (
      <p style={{ alignSelf: 'center' }}>Waiting for user input</p>
    );
  };

  const renderQrCode = () => {
    return (
      <img
        src={url}
        alt=""
        style={{
          width: 400,
          height: 400,
          alignSelf: 'center',
        }}
      />
    );
  }

  return (
    <div className="ui segment qrcode" style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h2 style={{ textAlign: 'center' }}>QR Code:</h2>
      {url === '' ?
        renderLoader() : renderQrCode()}
    </div>
  );
}
