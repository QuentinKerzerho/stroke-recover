export default function TextIntro() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          margin: "50px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="51"
          viewBox="0 0 39 51"
          fill="none"
        >
          <path
            d="M2.91516 31.5312C2.91516 26.6094 6.62861 16.7656 2.91516 2M12.1988 37.2734C17.5626 30.4375 28.5379 13.8125 29.5282 2M15.9122 48.7578C19.2131 48.7578 28.0428 46.4609 36.9551 37.2734"
            stroke="#FEB273"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 style={{ marginTop: "30px", fontSize: "30px" }}>Bienvenue</h1>
      </div>
      <p
        style={{
          marginRight: "20px",
          marginLeft: "20px",
          marginTop: "0px",
          marginBottom: "0px",
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Réveillez la parole, ravivez les souvenirs : notre soutien après un AVC.
      </p>
    </div>
  );
}
