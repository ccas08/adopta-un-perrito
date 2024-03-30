export function Alert({ message, type }) {
    return (
      <div className={`alert alert-${type} my-2`} role="alert">
        {message}
      </div>
    );
  }
  