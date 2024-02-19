import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { ViewButton, ActionButton, AddButton } from "./StyledButtons";
import BasicMenu from "../MenuList/MenuList";
import { ViewScreen } from "../ViewScreen/ViewScreen";
import "./Grid.css";

export default function Grid() {
  const navigate = useNavigate();
  const [noteViewInfo, setNoteViewInfo] = useState({
    isOpened: false,
    info: {},
  });

  const { data, refetch } = useQuery({
    queryKey: ["api/insertTask"],
    refetchInterval: 6000,
    select: (response) => response.data,
  });

  const { mutate } = useMutation({
    onSuccess: () => {
      refetch();
    },
  });

  const changeStatus = (status) => {
    mutate({
      method: "PUT",
      path: "api/insertTask",
      data: status,
    });
  };

  const onDelete = (id) => {
    mutate({
      method: "DELETE",
      path: "api/insertTask",
      data: [id],
    });
  };

  const handleNoteView = (info) => {
    setNoteViewInfo({ isOpened: true, info });
  };

  return (
    <>
      <AddButton onClick={() => navigate("./newtask")}>
        <AddIcon fontSize="large" />
      </AddButton>
      <ViewScreen
        noteViewInfo={noteViewInfo}
        seOpen={setNoteViewInfo}
      ></ViewScreen>
      <div className="listbox">
        <div className="list">
          {data?.map((item, index) => (
            <div key={index} className="item">
              <div className="title-description">
                <b>
                  {item.title?.substring(0, 35) +
                    (item.title?.length > 35 ? "..." : "")}
                </b>
              </div>
              <div className="title-description">
                {item.content?.substring(0, 50) +
                  (item.content?.length > 50 ? "..." : "")}
              </div>
              <ViewButton onClick={() => handleNoteView(item)}>
                View Task
              </ViewButton>
              <BasicMenu
                id={item.id}
                status={item.status}
                statchange={changeStatus}
              />
              <div className="action-buttons">
                <ActionButton
                  color="#3de94f"
                  onClick={() => navigate(`${item.id}`)}
                >
                  <ModeEditTwoToneIcon />
                </ActionButton>
                <ActionButton color="#ff395a" onClick={() => onDelete(item.id)}>
                  <DeleteIcon />
                </ActionButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
