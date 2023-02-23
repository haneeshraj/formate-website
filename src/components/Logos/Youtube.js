const SvgComponent = (props) => (
  <div
    style={{
      width: !props.width ? "24px" : props.width,
      height: !props.height ? "24px" : props.height,
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={!props.width ? "24px" : props.width}
      height={!props.height ? "24px" : props.height}
      {...props}
    >
      <path
        className="fill-logo"
        d="M53.527 17.427C55.714 19.677 56 23.252 56 32s-.286 12.323-2.473 14.573C51.34 48.822 49.062 49 32 49s-19.34-.178-21.527-2.427C8.286 44.323 8 40.748 8 32s.286-12.323 2.473-14.573S14.938 15 32 15s19.34.178 21.527 2.427zM27.95 39.417l12.146-7.038-12.146-6.928v13.966z"
      />
    </svg>
  </div>
);

export default SvgComponent;
