const CartIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    >
      <path d="M21.822,7.431C21.635,7.161,21.328,7,21,7H7.333L6.179,4.23C5.867,3.482,5.143,3,4.333,3H2v2h2.333l4.744,11.385 C9.232,16.757,9.596,17,10,17h8c0.417,0,0.79-0.259,0.937-0.648l3-8C22.052,8.044,22.009,7.7,21.822,7.431z M17.307,15h-6.64 l-2.5-6h11.39L17.307,15z" />
      <circle cx={10.5} cy={19.5} r={1.5} />
      <circle cx={17.5} cy={19.5} r={1.5} />
    </svg>
  );
};

export default CartIcon;
