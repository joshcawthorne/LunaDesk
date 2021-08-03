function ApplicationLayer({ Component, pageProps, isLoading }) {
  return (
    <div>{Component && <Component {...pageProps} isLoading={isLoading} />}</div>
  );
}

export default ApplicationLayer;
