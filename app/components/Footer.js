export default function Footer() {
  const data = new Date();
  return (
    <footer>
      <p>{data.toDateString()}</p>
    </footer>
  );
}
