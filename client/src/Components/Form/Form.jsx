import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { getSwal, getFailureSwal } from "../../services/generic-swal";
import "./Form.css";

export function SelectionMenu({ selections, defaultValue, control, listType }) {
  return (
    <div>
      <FormControl required={true} sx={{ minWidth: "150px" }}>
        <InputLabel>{listType.toUpperCase()}</InputLabel>
        <Controller
          name={listType}
          control={control}
          defaultValue={defaultValue ?? ""}
          render={({ field: { onChange, value } }) => (
            <Select value={value} onChange={onChange}>
              {selections?.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </div>
  );
}

export function Form({ method }) {
  const { id: id } = useParams();
  const { data: defaultValues } = useQuery({
    queryKey: ["api/insertTask"],
    select: (response) => response.data.find((e) => e.id === id),
  });

  const status = [
    { value: 1, label: "To Do" },
    { value: 2, label: "In Progress" },
    { value: 3, label: "Done" },
  ];

  const priority = [
    { value: 1, label: "Very Low" },
    { value: 2, label: "Low" },
    { value: 3, label: "Moderate" },
    { value: 4, label: "High" },
    { value: 5, label: "Very High" },
  ];

  const { register, handleSubmit, control } = useForm({ defaultValues });

  const { mutate } = useMutation({
    onSuccess: (info) => {
      getSwal(info.data);
    },
    onError: () => {
      getFailureSwal("Failed to succeed. Please try again");
    },
  });

  const onSubmit = (formdata) => {
    mutate({ method, path: "api/insertTask", data: { ...formdata, id } });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="inputs">
        <div className="text-inputs">
          <TextField
            label="Title"
            variant="outlined"
            {...register("title")}
            required={true}
          />
          <TextField
            required={true}
            label="Content"
            variant="outlined"
            {...register("content")}
          />
        </div>
        <div className="menu-input">
          <SelectionMenu
            selections={status}
            defaultValue={defaultValues?.status}
            control={control}
            listType={"status"}
          />
          <SelectionMenu
            selections={priority}
            defaultValue={defaultValues?.priority}
            control={control}
            listType={"priority"}
          />
        </div>
        <Button
          type="submit"
          className="submit"
          sx={{ backgroundColor: "rgb(16, 167, 178)", color: "white" }}
        >
          submit
        </Button>
      </div>
    </form>
  );
}
