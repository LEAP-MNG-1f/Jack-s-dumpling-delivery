import { useState } from "react";
import AdminCategoryButton from "./AdminCategoryButton";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import { BACKEND_ENDPOINT } from "@/constants";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

type TCategoryProps = {
  categories: TCategory[];
  setCategories: (categories: TCategory[]) => void;
};

type TCategory = {
  _id: string;
  name: string;
};

export const AdminSidebar = ({ categories, setCategories }: TCategoryProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newCategoryName, setCategoryName] = useState("");

  const newCategoryFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const addCategory = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-origin": "*",
        },
        body: JSON.stringify({ name: newCategoryName }),
      };
      const response = await fetch(`${BACKEND_ENDPOINT}/api/category`, options);
      const data = await response.json();
      if (data.success === "true") {
        setCategories([...categories, data.data]);
      }
      handleClose();
    } catch (error) {
      console.log("error", error);
    }
  };
  const deleteCategory = async (id: string) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ _id: id }),
      };
      const response = await fetch(`${BACKEND_ENDPOINT}/api/category`, options);
      const data = await response.json();
      if (data.success === "true") {
        setCategories(
          categories.filter((category) => {
            category._id !== id;
          })
        );
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="w-[600px]  px-4 flex flex-col gap-4">
      <div>Food menu</div>
      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <AdminCategoryButton
            key={category._id}
            id={category._id}
            name={category.name}
            deleteCategory={deleteCategory}
          />
        ))}
      </div>
      <div>
        <div>
          <Button className="w-full" onClick={handleOpen}>
            + Create new category
          </Button>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <div className="flex gap-4">
                <button onClick={handleClose}>
                  <CloseIcon />
                </button>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  + Create new category
                </Typography>
              </div>
              <div className="flex gap-2 flex-col">
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2, fontSize: 10 }}
                >
                  category name
                </Typography>
                <input
                  type="text"
                  className="border w-full p-2 rounded-2xl "
                  name="name"
                  onChange={newCategoryFunc}
                />
              </div>
              <div>
                <button
                  className="bg-green-600 w-full content-center rounded-2xl py-2 mt-4"
                  onClick={addCategory}
                >
                  Add category
                </button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};
