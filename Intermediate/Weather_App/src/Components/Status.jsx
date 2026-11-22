export function Loader() {
  return <div className="status"><div className="spinner" /><p>Loading weather…</p></div>;
}

export function ErrorBox({ message, onRetry }) {
  return (
    <div className="status">
      <p>⚠️ {message}</p>
      <button className="primary" onClick={onRetry}>Try again</button>
    </div>
  );
}
