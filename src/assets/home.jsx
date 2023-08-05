const Home = ({ color }) => {
  return (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1_6093"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="29"
        height="28"
      >
        <rect x="0.75" width="28" height="28" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_6093)">
        <path
          d="M5.41663 24.5V10.5L14.75 3.5L24.0833 10.5V24.5H17.0833V16.3333H12.4166V24.5H5.41663Z"
          fill={color ? "#21242C" : "#9497A0"}
        />
      </g>
    </svg>
  );
};

export default Home;
