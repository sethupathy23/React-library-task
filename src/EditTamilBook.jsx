import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
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

export function EditTamilBook({ tamil, setTamil }) {
  const { id } = useParams();

  const navigate = useNavigate();

  const selectedUser = tamil.find((std) => std.id === id);
  const { handleSubmit, handleBlur, handleChange, values, touched, errors } =
    useFormik({
      initialValues: {
        id: selectedUser.id,
        book: selectedUser.book,
        author: selectedUser.author,
        image: selectedUser.image,
        releaseyear: selectedUser.releaseyear,
        description: selectedUser.description,
      },
      validationSchema: formValidationSchema,
      onSubmit: (val) => {
        console.log("Form values", val);
        updateBook(val);
      },
    });

  const updateBook = (val) => {
    const editIndex = tamil.findIndex((std) => std.id === id);
    console.log(editIndex);
    tamil[editIndex] = val;
    setTamil([...tamil]);
    navigate("/library/tamil");
  };
  return (
    <div>
      <div className="title">
        <h3>Hello all welcome to the edit {values.book} book page</h3>
      </div>
      <form onSubmit={handleSubmit} className="add-form">
        <TextField
          id="outlined-basic"
          label="Id"
          variant="outlined"
          name="id"
          value={values.id}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.id && errors.id}
          helperText={touched.id && errors.id ? errors.id : null}
        />
        <TextField
          id="outlined-basic"
          label="Book"
          variant="outlined"
          name="book"
          value={values.book}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.book && errors.book}
          helperText={touched.book && errors.book ? errors.book : null}
        />
        <TextField
          id="outlined-basic"
          label="Author"
          variant="outlined"
          name="author"
          value={values.author}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.author && errors.author}
          helperText={touched.author && errors.author ? errors.author : null}
        />
        <TextField
          id="outlined-basic"
          label="Image"
          variant="outlined"
          name="image"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.image && errors.image}
          helperText={touched.image && errors.image ? errors.image : null}
        />
        <TextField
          id="outlined-basic"
          label="Year of release"
          variant="outlined"
          name="releaseyear"
          value={values.releaseyear}
          onChange={handleChange}
          onBlur={handleBlur}
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
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.description && errors.description}
          helperText={
            touched.description && errors.description
              ? errors.description
              : null
          }
        />
        <Button variant="contained" color="success" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
}