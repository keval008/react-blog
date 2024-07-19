import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Select, MenuItem } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
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
import { getBlogs } from "../../services/blogs";
import { Editor } from "@tinymce/tinymce-react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
const Blog = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedBlogId, setEditedBlogId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [displaysubs, setDisplaysubs] = useState([]);
  const [editBlog, setEditBlog] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [modalType, setModalType] = useState("");
  const [columns, setColumns] = useState([]);
  const [pending, setPending] = React.useState(true);
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
      style: { padding: "15px", width: "250px" },
    },
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColumns([
        {
          name: "TITLE",
          selector: (row) => (
            <>
              <div className="table_names_col">
                <img
                  src={`http://localhost/blog-API-main/storage/app/public/blog_images/${row.image}`}
                  alt={row.title}
                  height={70}
                  width={70}
                  style={{ borderRadius: "30%" }}
                />
                {row.title}
              </div>
            </>
          ),
        },
        {
          name: "DESCRIPTION",
          selector: (row) => row.description,
        },
        {
          name: "CONTENT",
          selector: (row) => row.content,
        },
        {
          name: "CATEGORY",
          selector: (row) => row.category.category,
        },
        {
          name: "SUBCATEGORY",
          selector: (row) => row.subcategory.subcategory,
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
                    setEditBlog(row);
                    setEditing(true);
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

  const showdata = async () => {
    const data = await getCategories();
    console.log(data);
    setCategories(data.data.data);
  };
  const showsubdata = async () => {
    const subdata = await getsubCategories();
    console.log(subdata);
    setSubCategories(subdata.data.data);
  };
  const showBlogs = async () => {
    const blogdata = await getBlogs();
    console.log(blogdata);
    setBlogs(blogdata.data.data);
  };

  useEffect(() => {
    showdata();
    showsubdata();
    showBlogs();
  }, []);

  useEffect(() => {
    const inactiveCategories = categories.filter(
      (category) => category.status === "Active"
    );
    setCategories(inactiveCategories);
  }, [categories]);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Title is required")
      .min(3, "Title must be at least 3 characters")
      .max(50, "Title must be at most 50 characters"),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters")
      .max(200, "Description must be at most 200 characters"),
    content: Yup.string()
      .required("Content is required")
      .min(10, "Content must be at least 10 characters")
      .max(1000, "Content must be at most 500 characters"),
    category_id: Yup.number()
      .required("Category is required")
      .positive("Category ID must be a positive number"),
    subcategory_id: Yup.number()
      .required("Subcategory is required")
      .positive("Subcategory ID must be a positive number"),
    image: editing
      ? Yup.mixed()
          .test(
            "fileType",
            "Only jpg, png, jpeg, gif, tiff files are allowed",
            (value) => {
              if (
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
          .required("Image is required")
      : Yup.mixed()
          .test(
            "fileType",
            "Only jpg, png, jpeg, gif, tiff files are allowed",
            (value) => {
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
            }
          )
          .required("Image is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      content: "",
      image: null,
      category_id: "",
      subcategory_id: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // if editing then UPDATE else INSERT
      if (editing) {
        //UPDATE DATA
        try {
          const formData = new FormData();
          formData.append("title", values.title);
          formData.append("description", values.description);
          formData.append("content", values.content);
          formData.append("image", selectedFile);
          formData.append("category_id", values.category_id);
          formData.append("subcategory_id", values.subcategory_id);
          const response = await axios.post(
            `http://127.0.0.1:8000/api/update/blog/${editedBlogId}`,
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
          showBlogs();
        } catch (error) {
          console.error(error);
          setSubmitting(false);
        }
      } else {
        //INSERT DATA
        try {
          const formData = new FormData();
          formData.append("title", values.title);
          formData.append("description", values.description);
          formData.append("content", values.content);
          formData.append("image", values.image);
          formData.append("category_id", values.category_id);
          formData.append("subcategory_id", values.subcategory_id);
          const response = await axios.post(
            "http://127.0.0.1:8000/api/add/blog",
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
          showBlogs();
        } catch (error) {
          console.error(error);
          setSubmitting(false);
        }
      }
    },
  });

  //Delete Data
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

  //handle Category and Subcategory changes
  const handleCategoryChange = (event) => {
    formik.setFieldValue("category_id", event.target.value);
    setSelectedCategoryId(event.target.value);
    const subcategoriesForSelectedCategory = subcategories.filter(
      (subcategory) => subcategory.category_id === event.target.value
    );
    console.log(subcategoriesForSelectedCategory);
    setDisplaysubs(subcategoriesForSelectedCategory);
  };

  const handleSubCategoryChange = (event) => {
    formik.setFieldValue("subcategory_id", event.target.value);
    setSelectedSubCategoryId(event.target.value);
  };

  //show data when clicked on edit
  useEffect(() => {
    if (editing) {
      const fileUrl = `http://localhost/blog-API-main/storage/app/public/blog_images/${editBlog.image}`;
      console.log(fileUrl);
      setPreviewUrl(fileUrl);
      setSelectedFile(fileUrl);
      setEditedBlogId(editBlog.id);
      console.log(editBlog.category_id);

      const subcategoriesForSelectedCategory = subcategories.filter(
        (subcategory) => subcategory.category_id === editBlog.category_id
      );
      setDisplaysubs(subcategoriesForSelectedCategory);

      formik.setValues({
        image: fileUrl,
        title: editBlog.title,
        description: editBlog.description,
        content: editBlog.content,
        category_id: editBlog.category_id,
        subcategory_id: editBlog.subcategory_id,
      });
    }
  }, [editBlog, editing]);

  return (
    <>
      <div className="Blogs">
        <div className="form-container-whole">
          <h2 className="heading"> Add Blog </h2>

          <div className="form-container-blog">
            <form
              onSubmit={formik.handleSubmit}
              encType="multipart/form-data"
              className="catForm"
            >
              <div className="category-Form-blog">
                <div className="blog-form-head-container">
                  <div className="imagebox-blog">
                    <div className="image-upload-container-blog">
                      <div className="upload-button-blog">
                        <label htmlFor="image-upload">
                          <div className="circle">
                            {selectedFile ? (
                              <img
                                src={
                                  previewUrl ||
                                  URL.createObjectURL(selectedFile)
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
                            formik.setFieldValue(
                              "image",
                              event.target.files[0]
                            );
                          }}
                          onBlur={formik.handleBlur}
                          style={{ display: "none" }}
                        />
                      </div>
                      <div className="file-info">
                        {selectedFile && (
                          <p>Selected File: {selectedFile.name}</p>
                        )}
                        {formik.errors.image &&
                          Boolean(formik.errors.image) && (
                            <p style={{ color: "red" }}>
                              {formik.errors.image}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>

                  <div className="inputbox-container-blog">
                    <div className="category-inputfield">
                      <TextField
                        fullWidth
                        id="title"
                        name="title"
                        label="Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.title && Boolean(formik.errors.title)
                        }
                        helperText={formik.touched.title && formik.errors.title}
                      />
                    </div>

                    <div className="description-inputfield">
                      <TextField
                        fullWidth
                        id="description"
                        name="description"
                        label="Description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.description &&
                          Boolean(formik.errors.description)
                        }
                        helperText={
                          formik.touched.description &&
                          formik.errors.description
                        }
                      />
                    </div>

                    <div className="category-inputfield">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Category
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          name="category_id"
                          label="Category"
                          id="category_id"
                          value={formik.values.category_id}
                          onChange={(event) => {
                            formik.handleChange(event);
                            handleCategoryChange(event);
                          }}
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

                    <div className="subcategory-inputfield">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Subcategory
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          name="subcategory_id"
                          label="Subcategory"
                          id="subcategory_id"
                          value={formik.values.subcategory_id}
                          onChange={(event) => {
                            formik.handleChange(event);
                            handleSubCategoryChange(event);
                          }}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.subcategory_id &&
                            Boolean(formik.errors.subcategory_id)
                          }
                        >
                          {displaysubs.length > 0 &&
                            displaysubs.map((item) => (
                              <MenuItem key={item.id} value={item.id}>
                                {item.subcategory}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div className="content-inputfield">
                  <Editor
                    apiKey="ml112m4tfxv5wluoh3lni0j0b5juwit48d6m2slk1itlrd69"
                    value={formik.values.content}
                    onEditorChange={(content, editor) =>
                      formik.setFieldValue("content", content)
                    }
                    init={{
                      height: 310,
                      width: "100%",
                      menubar: "file edit view insert format tools tc",
                      placeholder: "Enter your content here...",
                      plugins: ["casechange", "table"],
                      toolbar:
                        "casechange | table | undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help",
                    }}
                  />
                  {formik.touched.content && Boolean(formik.errors.content) && (
                    <p style={{ color: "red" }}>{formik.errors.content}</p>
                  )}
                  {/* <TextField
                    fullWidth
                    id="content"
                    name="content"
                    label="Content"
                    value={formik.values.content}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.content && Boolean(formik.errors.content)
                    }
                    helperText={formik.touched.content && formik.errors.content}
                  /> */}
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <Button type="submit" variant="contained" color="primary">
                  {editing ? "EDIT Blog" : "ADD Blog"}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="Categories-Data-Table">
          <h2 className="Categories-table-name">Blogs List</h2>
          <DataTable
            columns={columns}
            data={blogs}
            pagination
            responsive
            subHeaderAlign="right"
            subHeaderWrap
            direction="ltr"
            fixedHeaderScrollHeight="300px"
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
                    `http://127.0.0.1:8000/api/delete/blog/${idToDelete}`
                  );
                  if (response.status === 200) {
                    console.log("Data Deleted successfully");
                    showBlogs();
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

export default Blog;
