import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  id: yup.string().required(),
  book: yup.string().required(),
  author: yup.string().required(),
  image: yup.string().url().required(),
  releaseyear: yup.string().required(),
  description: yup.string().required().min(10),
});

export function AddSciFiBook({ sciFi, setSciFi}) {
  const navigate = useNavigate();
  const { handleSubmit, handleBlur, handleChange, values, touched, errors } =
    useFormik({
      initialValues: {
        id: "",
        book: "",
        author: "",
        image: "",
        releaseyear: "",
        description: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log("Form values", values);
        addMovie(values);
      },
    });

  const addMovie = async (values) => {
    await setSciFi([...sciFi, values]);
    navigate("/library/sci-fi");
  };
  return (
    <div>
      <div className="title">
        <h3>Hello all welcome to the add science fiction book page</h3>
      </div>
      <form onSubmit={handleSubmit} className="add-form">
        <TextField
          id="outlined-basic"
          label="Id"
          variant="outlined"
          name="id"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.id}
          error={touched.id && errors.id}
          helperText={touched.id && errors.id ? errors.id : null}
        />
        <TextField
          id="outlined-basic"
          label="Book"
          variant="outlined"
          name="book"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.book}
          error={touched.book && errors.book}
          helperText={touched.book && errors.book ? errors.book : null}
        />
        <TextField
          id="outlined-basic"
          label="Author"
          variant="outlined"
          name="author"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.author}
          error={touched.author && errors.author}
          helperText={touched.author && errors.author ? errors.author : null}
        />
        <TextField
          id="outlined-basic"
          label="Image"
          variant="outlined"
          name="image"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.image}
          error={touched.image && errors.image}
          helperText={touched.image && errors.image ? errors.image : null}
        />
        <TextField
          id="outlined-basic"
          label="Year of Release"
          variant="outlined"
          name="releaseyear"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.releaseyear}
          error={touched.releaseyear && errors.releaseyear}
          helperText={
            touched.releaseyear && errors.releaseyear
              ? errors.releaseyear
              : null
          }
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.description}
          error={touched.description && errors.description}
          helperText={
            touched.description && errors.description
              ? errors.description
              : null
          }
        />
        <Button variant="contained" color="primary" type="submit">
          Add Book
        </Button>
      </form>
    </div>
  );
}