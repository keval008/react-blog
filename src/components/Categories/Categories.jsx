import React from "react";
import "/src/css/categories.css";
import { useFormik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { Grid, TextField, Button, Select, MenuItem } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState, useEffect } from "react";
import axios from "axios";

const validationSchema = Yup.object({
  category: Yup.string().required("Category is required"),
  image: Yup.mixed()
    .required("Image is required")
    .test(
      "fileType",
      "Only jpg, png, jpeg, gif, tiff files are allowed",
      (value) => {
        if (value) {
          const fileType = value.type;
          const allowedTypes = [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/tiff",
          ];
          return allowedTypes.includes(fileType);
        }
        return true;
      }
    ),
  status: Yup.string().required("Status is required"),
});

function Categories() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    formik.setFieldValue("image", file);
  };

  useEffect(() => {
    if (previewUrl) {
      console.log(previewUrl);
    }
  }, [previewUrl]);

  const formik = useFormik({
    initialValues: {
      category: "",
      image: null,
      status: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();
        formData.append("category", values.category);
        formData.append("status", values.status);
        formData.append("category_image", values.image);

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
      } catch (error) {
        console.error(error);
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <div className="categories">
        <div className="form-container">
          <h2> Add Category </h2>
          <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <div className="category-Form">
              <div className="imagebox">
                <div className="image-upload-container">
                  <div className="upload-button">
                    <label htmlFor="image-upload">
                      <div className="circle">
                        {selectedFile ? (
                          <img
                            src={previewUrl}
                            alt="Selected Image"
                            className="preview-image"
                          />
                        ) : (
                          <span className="upload-text">
                            {" "}
                            <CameraAltIcon /> Upload photo
                          </span>
                        )}
                      </div>
                    </label>
                    <input
                      type="file"
                      id="image-upload"
                      accept=".jpeg,.jpg,.png,.gif"
                      onChange={(event) => {
                        handleFileChange(event);
                        formik.setFieldValue("image", event.target.files[0]);
                      }}
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="file-info">
                    {selectedFile && <p>Selected File: {selectedFile.name}</p>}
                    {formik.errors.image && (
                      <p style={{ color: "red" }}>{formik.errors.image}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="inputbox-container">
                <div className="category-inputfield">
                  <label htmlFor="category"> Category </label>
                  <TextField
                    fullWidth
                    id="category"
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.category && Boolean(formik.errors.category)
                    }
                    helperText={
                      formik.touched.category && formik.errors.category
                    }
                  />
                </div>
                <div className="status-inputfield">
                  <label htmlFor="status"> Status </label>
                  <Select
                    fullWidth
                    id="status"
                    name="status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.status && Boolean(formik.errors.status)
                    }
                  >
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </Select>
                </div>{" "}
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <Button type="submit" variant="contained" color="primary">
                ADD CATAGORY
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Categories;
