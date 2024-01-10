import duas from "../duasJSON/duas.json";
import "../css/duas.css";
import { useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";

const MorningDua = () => {
  const [isLight, setIsLIght] = useState(true);

  const light = {
    color: "#fff",
    backgroundColor: "rgb(0, 63, 63)",
    border: "1px solid #fff",
  };

  const dark = {
    color: "rgb(0, 29, 29)",
    backgroundColor: "#fff",
    border: "1px solid rgb(0, 63, 63)",
  };

  return (
    <div
      style={{
        padding: "20px",
        color: isLight ? light.color : dark.color,
        backgroundColor: isLight ? light.backgroundColor : dark.backgroundColor,
      }}
    >
      <div
        dir="rtl"
        className="mainDuaDiv"
        style={{
          padding: "20px",
          border: isLight ? light.border : dark.border,
        }}
      >
        <div style={{}}>
          <button
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
            onClick={() => setIsLIght(!isLight)}
          >
            {isLight ? (
              <MdLightMode size={"25px"} color="white" />
            ) : (
              <MdNightlight size={"25px"} />
            )}
          </button>
        </div>
        <div className="duaTitle">
          <h2>أذكار الصباح والمساء</h2>
        </div>
        {duas.map((dua) => (
          <div key={dua.id}>
            <div>
              <span
                className="duaNumber"
                style={{ color: isLight ? "aquamarine" : "rgb(0, 50, 50)" }}
              >
                {dua.id}{" "}
              </span>
              <span
                className="singleDuaTitle"
                style={{ color: isLight ? "rgb(170, 255, 255)" : "#000" }}
              >
                {dua.title}{" "}
              </span>
              <span>{dua.dua} </span>
              <span className="duaRepeat">{dua.repeat} </span>
              <span className="duaReference">( {dua.reference} )</span>
            </div>
          </div>
        ))}
        <div className="duafooter">
          <p>(من حصن الإسلام من أذكار الكتاب والسنة بعد مراجعة المراجع)</p>
          <p>اللهم وفقنا لطاعتك واتباع سنة حبيبك واجعلنا من الصالحين</p>
        </div>
      </div>
    </div>
  );
};

export default MorningDua;
