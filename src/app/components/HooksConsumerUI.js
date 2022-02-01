const ResponseMsg = ({ value }) => (
  <span style={{ marginLeft: 10 }}>{value}</span>
);

const ErrorMsg = ({ value }) => (
  <span style={{ marginLeft: 10, color: "red" }}>{value.message}</span>
);

const HooksConsumerUIBody = ({ error, response, loading }) => {
  if (error) {
    return <ErrorMsg value={error} />;
  }

  if (loading) {
    return <ResponseMsg value="loading..." />;
  }

  return <ResponseMsg value={response} />;
};

export const HooksConsumerUI = ({ handleGet, loading, ...otherProps }) => (
  <div>
    <button
      onClick={handleGet("page1")}
      style={{ textTransform: "uppercase" }}
      disabled={loading}
    >
      load from apollo
    </button>
    <HooksConsumerUIBody {...otherProps} loading={loading} />
  </div>
);
