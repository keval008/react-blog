import React from "react";
import "/src/css/categories.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Select, MenuItem } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState, useEffect } from "react";
import axios from "axios";
import useGet from "../../hooks/setdata";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DataTable from "react-data-table-component";
import { IconButton } from "@mui/material";
import { Switch } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
function Categories() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedCategoryId, setEditedCategoryId] = useState(null);
  const { data, refetch } = useGet("http://127.0.0.1:8000/api/categories");
  const [category, setCategory] = useState({});
  const [columns, setColumns] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [checked, setchecked] = React.useState();
  const [status, setStatus] = useState("");
  const [statusId, setStatusId] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [modalType, setModalType] = useState("");
  const [openStatusDialog, setOpenStatusDialog] = useState(false);
  const [statusToUpdate, setStatusToUpdate] = useState(null);
  const [idToUpdate, setIdToUpdate] = useState(null);
  const [switchChecked, setSwitchChecked] = useState(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setColumns([
        {
          name: "CATEGORY",
          selector: (row) => (
            <>
              <div className="table_names_col">
                <img
                  src={`http://localhost/blog-API-main/storage/app/public/category_images/${row.category_image}`}
                  alt={category.category}
                  height={70}
                  width={70}
                  style={{ borderRadius: "30%" }}
                />
                {row.category}
              </div>
            </>
          ),
        },

        {
          name: "STATUS",
          selector: (row) => (
            <>
              <div style={row.status === "Active" ? active : inactive}>
                {row.status}
              </div>
            </>
          ),
        },
        {
          name: "STATUS",
          cell: (row) => {
            return (
              <>
                <div>
                  <Switch
                    checked={
                      switchChecked === row.id
                        ? switchChecked
                        : row.status === "Active"
                    }
                    onChange={(event) => {
                      setSwitchChecked(event.target.checked);
                      handleSwitchChange(row.id, row.status);
                    }}
                    color="default"
                  />
                </div>
              </>
            );
          },
        },

        {
          name: "ACTIONS",
          cell: (row) => (
            <>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <IconButton
                  color="primary"
                  className="button"
                  onClick={() => {
                    setEditing(true);
                    setCategory(row);
                  }}
                >
                  <BorderColorIcon />
                </IconButton>
                <IconButton
                  color="error"
                  className="button"
                  onClick={() => handleDelete(row.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </>
          ),
        },
      ]);
      setPending(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const resetSwitch = () => {
    setSwitchChecked(false);
  };

  const active = {
    background: "rgba(34,197,94)",
    padding: "5px 8px ",
    color: "white",
    borderRadius: "7px",
    fontWeight: "bold",
  };

  const inactive = {
    background: "rgba(239,68,68)",
    padding: "5px 8px ",
    color: "white",
    borderRadius: "7px",
    fontWeight: "bold",
  };

  const customStyles = {
    rows: {
      style: {
        minHeight: "100px",
        fontSize: "17px",
      },
    },
    headCells: {
      style: {
        fontSize: "17px",
        fontWeight: "bold",
        color: "#637381",
      },
    },
    cells: {
      style: { padding: "15px" },
    },
  };

  const validationSchema = Yup.object({
    category: Yup.string().required("Category is required"),
    //   .test("unique", "Category already exists", async (value) => {
    //     if (editing) {
    //       const filterdata = data.filter((category) => {
    //         return category.id === editedCategoryId;
    //       });
    //       const isUnique = !filterdata.some((category) => {
    //         return category.category === value;
    //       });
    //       return isUnique;
    //     } else {
    //       const isUnique = !data.some((category) => {
    //         return category.category === value;
    //       });
    //       return isUnique;
    //     }
    //   }),
    image: Yup.mixed()
      .test(
        "fileType",
        "Only jpg, png, jpeg, gif, tiff files are allowed",
        (value) => {
          if (
            editing &&
            value &&
            typeof value === "string" &&
            value.startsWith("http")
          ) {
            return true;
          } else if (value) {
            const fileType = value.type;
            const allowedTypes = [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/gif",
              "image/tiff",
              "image/svg",
            ];
            return allowedTypes.includes(fileType);
          } else {
            return false;
          }
        }
      )
      .required("Image is required"),
    status: Yup.string().required("Status is required"),
  });

  const handleSwitchChange = (id, status) => {
    setStatusToUpdate(status === "Active" ? "Inactive" : "Active");
    setIdToUpdate(id);
    setOpenStatusDialog(true);
  };

  const handleStatusUpdate = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/update/category/${idToUpdate}`,
        { status: statusToUpdate },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      refetch();
    } catch (error) {
      console.error(error);
    }
    setOpenStatusDialog(false);
    setIdToUpdate(null);
  };

  //DELETE DATA
  const handleDelete = (id) => {
    setModalType("delete");
    setIdToDelete(id);
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    formik.setFieldValue("image", file);
  };

  const formik = useFormik({
    initialValues: {
      category: "",
      image: null,
      status: "Active",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // if editing then UPDATE else INSERT
      if (editing) {
        //UPDATE DATA
        try {
          const formData = new FormData();
          formData.append("category", values.category);
          formData.append("status", values.status);
          formData.append("category_image", selectedFile);

          const response = await axios.post(
            `http://127.0.0.1:8000/api/update/category/${editedCategoryId}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          console.log(response);
          setSubmitting(false);
          resetForm();
          setSelectedFile(null);
          setPreviewUrl(null);
          setEditing(false);
          refetch();
        } catch (error) {
          console.error(error);
          setSubmitting(false);
        }
      } else {
        //INSERT DATA
        try {
          const formData = new FormData();
          formData.append("category", values.category);
          formData.append("status", values.status);
          formData.append("category_image", selectedFile);

          const response = await axios.post(
            "http://127.0.0.1:8000/api/add/category",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          console.log(response);
          setSubmitting(false);
          resetForm();
          setSelectedFile(null);
          setPreviewUrl(null);
          refetch();
        } catch (error) {
          console.error(error);
          setSubmitting(false);
        }
      }
    },
  });

  //show data when click on edit
  useEffect(() => {
    if (editing) {
      const fileUrl = `http://localhost/blog-API-main/storage/app/public/category_images/${category.category_image}`;
      console.log(fileUrl);
      setPreviewUrl(fileUrl);
      setSelectedFile(fileUrl);
      setEditedCategoryId(category.id);
      formik.setValues({
        category: category.category,
        status: category.status,
        image: fileUrl,
      });
    }
  }, [category]);

  return (
    <>
      <div className="categories">
        <div className="form-container-whole">
          <h2 className="heading"> Add Category </h2>
          <div className="form-container">
            <form
              onSubmit={formik.handleSubmit}
              encType="multipart/form-data"
              className="catForm"
            >
              <div className="category-Form">
                <div className="imagebox">
                  <div className="image-upload-container">
                    <div className="upload-button">
                      <label className="upload-icon" htmlFor="image-upload">
                        <div className="circle">
                          {selectedFile ? (
                            <img
                              src={
                                previewUrl || URL.createObjectURL(selectedFile)
                              }
                              alt="Selected Image"
                              className="preview-image"
                            />
                          ) : (
                            <span className="upload-text">
                              <CameraAltIcon /> Upload photo
                            </span>
                          )}
                        </div>
                      </label>
                      <input
                        type="file"
                        id="image-upload"
                        accept=".jpeg,.jpg,.png,.gif,.tiff,.svg"
                        onChange={(event) => {
                          handleFileChange(event);
                          formik.setFieldValue("image", event.target.files[0]);
                        }}
                        onBlur={formik.handleBlur}
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="file-info">
                      {selectedFile && (
                        <p>Selected File: {selectedFile.name}</p>
                      )}
                      {formik.errors.image && Boolean(formik.errors.image) && (
                        <p style={{ color: "red" }}>{formik.errors.image}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="inputbox-container">
                  <div className="category-inputfield">
                    <TextField
                      fullWidth
                      label="Category"
                      id="category"
                      name="category"
                      value={formik.values.category}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.category &&
                        Boolean(formik.errors.category)
                      }
                      helperText={
                        formik.touched.category && formik.errors.category
                      }
                    />
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <Button type="submit" variant="contained" color="primary">
                  {editing ? "EDIT CATAGORY" : "ADD CATAGORY"}
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="Categories-Data-Table">
          <h2 className="Categories-table-name">Categories List</h2>
          <DataTable
            columns={columns}
            data={data}
            pagination
            responsive
            subHeaderAlign="right"
            highlightOnHover
            customStyles={customStyles}
            progressPending={pending}
          />
        </div>
      </div>
      <Dialog
        open={openDialog}
        maxWidth={"sm"}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are You Sure You Want To Delete This Category?{" "}
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={async () => {
              if (modalType === "delete" && idToDelete) {
                try {
                  const response = await axios.delete(
                    `http://127.0.0.1:8000/api/delete/category/${idToDelete}`
                  );
                  if (response.status === 200) {
                    console.log("Data Deleted successfully");
                    refetch();
                  } else {
                    console.log("Error Deleting data:", response.status);
                  }
                } catch (error) {
                  console.log("Error Deleting data:", error);
                }
              }
              handleClose();
              setIdToDelete(null);
            }}
            autoFocus
          >
            Ok
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openStatusDialog}
        maxWidth={"sm"}
        onClose={() => setOpenStatusDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are You Sure You Want To Update The Status To {statusToUpdate}?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleStatusUpdate} autoFocus>
            Ok
          </Button>
          <Button
            onClick={() => {
              setOpenStatusDialog(false);
              resetSwitch();
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Categories;
