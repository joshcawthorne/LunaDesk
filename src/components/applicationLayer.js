function ApplicationLayer({ Component, pageProps }) {
  return <div>{Component && <Component {...pageProps} />}</div>;
}

export default ApplicationLayer;
