import { List } from "../../../shared/components/atoms/List/List";
import { Action } from "../../../shared/components/atoms/Action/Action";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useModuleList, useModule } from "../hooks/useModuleList";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { showDatas } from "../../../shared/stores/index";
import { useSelector } from "react-redux";
export const ModuleList = () => {
  useModule();

  let { data, isLoading } = useSelector(showDatas);
  const hasDatas = !isLoading.modules && data.modules.length > 0;
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Liste des module</h1>
      <div className="buttonAdd">
        <Button
          variant="outlined"
          style={{
            color: "black",

            borderColor: "black",
          }}
        >
          Ajouter des modules
        </Button>
      </div>
      {isLoading.modules ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10vw",
          }}
        >
          <CircularProgress color="inherit" />
        </div>
      ) : hasDatas ? (
        <div className="list">
          {data.modules.map(function (object, key) {
            return (
              <List
                displayList={object}
                typeList={useModuleList}
                key={key}
                action={
                  <>
                    <Action
                      action={"module/update/" + object.id}
                      icon={<VisibilityIcon></VisibilityIcon>}
                    ></Action>
                    <Action
                      action={"module/delete/" + object.id}
                      icon={<DeleteIcon></DeleteIcon>}
                    ></Action>
                  </>
                }
              />
            );
          })}
        </div>
      ) : (
        <h2 style={{ textAlign: "center" }}>
          Vous n’avez actuellement pas de module
        </h2>
      )}
    </>
  );
};

export default ModuleList;
