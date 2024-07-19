import React from "react";
import "/src/css/categories.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Select, MenuItem } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState, useEffect } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { getCategories } from "../../services/category";
import { getsubCategories } from "../../services/subcategory";
import DataTable from "react-data-table-component";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
const Subcategories = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedCategoryId, setEditedCategoryId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [subcategory, setSubcategory] = useState({});

  const [columns, setColumns] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColumns([
        {
          name: "SUBCATEGORY",
          selector: (row) => (
            <>
              <div className="table_names_col">
                <img
                  src={`http://localhost/blog-API-main/storage/app/public/subcategory_image/${row.subcategory_image}`}
                  alt={category.subcategory}
                  height={70}
                  width={70}
                  style={{ borderRadius: "30%" }}
                />
                {row.subcategory}
              </div>
            </>
          ),
        },
        {
          name: "CATEGORY ID",
          selector: (row) => row.category_id,
        },
        {
          name: "STATUS",
          selector: (row) => (
            <>
              <div style={row.status === "active" ? active : inactive}>
                {row.status}
              </div>
            </>
          ),
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
                    setSubcategory(row);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  className="button"
                  onClick={() => handleDelete(row.id)}
                >
                  <DeleteIcon />{" "}
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

  const showsubdata = async () => {
    const subdata = await getsubCategories();
    console.log(subdata);
    setSubCategories(subdata.data.data);
  };
  const showdata = async () => {
    const data = await getCategories();
    console.log(data);
    setCategories(data.data.data);
  };

  useEffect(() => {
    const inactiveCategories = categories.filter(
      (category) => category.status === "Active"
    );
    setCategories(inactiveCategories);
  }, [categories]);

  useEffect(() => {
    showdata();
    showsubdata();
  }, []);

  useEffect(() => {
    if (editing) {
      const fileUrl = `http://localhost/blog-API-main/storage/app/public/subcategory_image/${subcategory.subcategory_image}`;
      setSelectedFile(fileUrl);
      setPreviewUrl(fileUrl);
      setEditedCategoryId(subcategory.id);
      formik.setValues({
        category: subcategory.subcategory,
        image: fileUrl,
        status: subcategory.status,
        category_id: subcategory.category_id,
      });
    }
  }, [subcategory]);

  const validationSchema = Yup.object().shape({
    category: Yup.string()
      .required("Sub Category is required")
      .test("unique", "Category already exists", async (value) => {
        if (editing) {
          const currentCategory = subcategories.find(
            (category) => category.id === editedCategoryId
          );
          const isUnique = !subcategories.some((category) => {
            return (
              category.id !== currentCategory.id &&
              category.subcategory === value
            );
          });
          return isUnique;
        } else {
          const isUnique = !subcategories.some((category) => {
            return category.subcategory === value;
          });
          return isUnique;
        }
      }),
    image: Yup.mixed()
      .test(
        "fileType",
        "Only jpg, png, jpeg, gif, tiff files are allowed",
        (value) => {
          if (value && typeof value === "string" && value.startsWith("http")) {
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
    category_id: Yup.string().required("Category id is required"),
  });
  const formik = useFormik({
    initialValues: {
      category: "",
      image: null,
      status: "active",
      category_id: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // if editing then UPDATE else INSERT
      if (editing) {
        //UPDATE DATA
        try {
          const formData = new FormData();
          formData.append("subcategory", values.category);
          formData.append("status", values.status);
          formData.append("subcategory_image", selectedFile);
          formData.append("category_id", values.category_id);
          const response = await axios.post(
            `http://127.0.0.1:8000/api/update/subcategory/${editedCategoryId}`,
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
          showsubdata();
        } catch (error) {
          console.error(error);
          setSubmitting(false);
        }
      } else {
        //INSERT DATA
        try {
          const formData = new FormData();
          formData.append("subcategory", values.category);
          formData.append("status", values.status);
          formData.append("subcategory_image", values.image);
          formData.append("category_id", values.category_id);
          const response = await axios.post(
            "http://127.0.0.1:8000/api/add/subcategory",
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
          showsubdata();
        } catch (error) {
          console.error(error);
          setSubmitting(false);
        }
      }
    },
  });

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

  return (
    <>
      <div className="Subcategories">
        <div className="form-container-whole">
          <h2 className="heading"> Add Sub Category </h2>

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
                      <label htmlFor="image-upload">
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
                      id="category"
                      name="category"
                      label="Sub Category"
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

                  <div className="catagoryid-inputfield">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Category Name
                      </InputLabel>
                      <Select
                        label="Category Name"
                        labelId="demo-simple-select-label"
                        value={formik.values.category_id}
                        fullWidth
                        name="category_id"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.category_id &&
                          Boolean(formik.errors.category_id)
                        }
                      >
                        {categories.length > 0 &&
                          categories.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                              {item.category}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <Button type="submit" variant="contained" color="primary">
                  {editing ? "EDIT category" : "ADD category"}
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="Categories-Data-Table">
          <h2 className="Categories-table-name">Sub Categories List</h2>
          <DataTable
            columns={columns}
            data={subcategories}
            pagination
            responsive
            subHeaderAlign="right"
            subHeaderWrap
            direction="ltr"
            fixedHeaderScrollHeight="300px"
            highlightOnHover
            customStyles={customStyles}
            progressPending={pending}
            className="datatable"
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
                    `http://127.0.0.1:8000/api/delete/subcategory/${idToDelete}`
                  );
                  if (response.status === 200) {
                    console.log("Data Deleted successfully");
                    showsubdata();
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
    </>
  );
};

export default Subcategories;
