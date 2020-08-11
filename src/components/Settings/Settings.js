import { useContext } from "react";

import { EditContext } from "../../context/editContext";
import style from "./Settings.module.css";
import Example from "../Dropdown/dropdown";

const Settings = () => {
  const editContext = useContext(EditContext);

  return (
    <div className={`col-12 col-lg-8 m-auto`}>
      <h1 className={`mt-5`}>Customisations</h1>
      <div className={`${style.optionsContainer} p-4 mx-auto col-12`}>
        <div className={`col-12 row mx-auto mt-2 mb-3`}>
          <div className={`col-8 col-lg-6 text-center mx-auto mb-3`}>
            <Example
              name="Change Style"
              type="font"
              items={[
                "HomemadeApple",
                "Caveat",
                "Dawning",
                "IndieFlower",
                "NothingYouCouldDo",
                "Liu",
                "LeagueScript",
              ]}
              item1="HomemadeApple"
              item2="Caveat"
              item3="Dawning"
              item4="IndieFlower"
              item5="NothingYouCouldDo"
              item6="Liu"
              item7="LeagueScript"
            />
          </div>
          <div className={`col-8 col-lg-6 text-center mx-auto mb-3`}>
            <Example
              name="Change Sheet"
              type="page"
              items={["Ruled1", "Ruled2", "OnlyMargin", "Blank1", "Blank2"]}
            />
          </div>
        </div>

        <div className={`col-12`}>
          <div className={`${style.edit} col-12 mx-auto my-2 text-center`}>
            <input
              type="checkbox"
              name="heading"
              value={editContext.isBody}
              id="heading"
              onClick={editContext.isBodyHandler}
              className="d-none"
            />
            <label for="heading">
              Edit <span>{editContext.isBody ? "Body" : "Title"}</span>.
            </label>
          </div>

          <div className={`col-12 col-sm-10 col-md-8 col-lg-12 mx-auto`}>
            <div className={`${style.inputBorder} col-12 pb-4`}>
              <label for="size">Font size</label>
              <input
                type="range"
                min="5"
                max="50"
                name={editContext.isBody ? "bodySize" : "headSize"}
                value={
                  editContext.isBody
                    ? editContext.bodyValues.bodySize
                    : editContext.headValues.headSize
                }
                className="form-control"
                id="size"
                onChange={editContext.onValueChange}
              />
            </div>

            <div className={`${style.inputBorder} col-12 mt-3 pb-4`}>
              <label for="left">Adjust x-axis</label>
              <input
                type="range"
                min="5"
                max="200"
                name={editContext.isBody ? "bodyLeft" : "headLeft"}
                value={
                  editContext.isBody
                    ? editContext.bodyValues.bodyLeft
                    : editContext.headValues.headLeft
                }
                className="form-control"
                id="left"
                onChange={editContext.onValueChange}
              />
            </div>

            <div className={`${style.inputBorder} col-12 mt-3 pb-4`}>
              <label for="top">Adjust y-axis </label>
              <input
                type="range"
                min="0"
                max="100"
                name={editContext.isBody ? "bodyTop" : "headTop"}
                value={
                  editContext.isBody
                    ? editContext.bodyValues.bodyTop
                    : editContext.headValues.headTop
                }
                className="form-control"
                id="top"
                onChange={editContext.onValueChange}
              />
            </div>

            <div className={`${style.inputBorder} col-12 mt-3 pb-4`}>
              <label for="spacing">Line-spacing</label>
              <input
                type="range"
                min="1"
                max="5"
                step="0.5"
                name={editContext.isBody ? "bodyLine" : "headLine"}
                value={
                  editContext.isBody
                    ? editContext.bodyValues.bodyLine
                    : editContext.headValues.headLine
                }
                className="form-control col-12"
                id="spacing"
                onChange={editContext.onValueChange}
              />
            </div>
          </div>
        </div>

        <div class={`col-12 mx-auto text-center mt-4`}>
          <button
            className="mx-auto col-6 dbtn"
            onClick={editContext.downloadImg}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
