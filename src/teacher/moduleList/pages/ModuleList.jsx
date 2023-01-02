import { List } from "../../../shared/components/atoms/List/List";
import { Action } from "../../../shared/components/atoms/Action/Action";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useModuleList } from "../hooks/useModuleList";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { call, showDatas } from "../../../shared/stores/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const ModuleList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllModule = async () => {
      dispatch(call("/items/module", [], "get", "", "modules"));
    };
    return getAllModule;
  }, []);

  let { data, isLoading, error } = useSelector(showDatas);

  const hasDatas = !isLoading && data.modules.length > 0;
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
      {isLoading ? (
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
