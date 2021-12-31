const CoverImage: React.FC<{ url: string; styles: Object }> = ({
  url,
  styles,
}) => <img alt={url} src={url} style={styles} />;

export default CoverImage;
