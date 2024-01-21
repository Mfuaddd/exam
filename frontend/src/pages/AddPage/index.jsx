import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddPage() {
  const [apiData, setApiData] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState(null);

  const getApiData = async () => {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    setApiData(data);
  };

  const postApiData = async (data) => {
    await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    await getApiData();
  };

  const deleteApiData = async (id) => {
    await fetch(`http://localhost:3000/${id}`, {
      method: "DELETE",
    });
    await getApiData();
  };

  const myLowerCase = (value) => {
    if (typeof value === "string") {
      return value.toLowerCase();
    }
    return value;
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div className="header-bg"></div>
      <div className="add">
        <Formik
          initialValues={{ name: "", text: "", price: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            text: Yup.string().required("Required"),
            price: Yup.number().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              postApiData(values);
              setSubmitting(false);
              resetForm();
            }, 400);
          }}
        >
          <Form className="form">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <div className="form__error">
              <ErrorMessage name="name" />
            </div>

            <label htmlFor="text">Text</label>
            <Field name="text" type="text" />
            <div className="form__error">
              <ErrorMessage name="text" />
            </div>

            <label htmlFor="price">Price</label>
            <Field name="price" type="text" />
            <div className="form__error">
              <ErrorMessage name="price" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <div className="container">
          <div className="add__control">
            <div className="add__search">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className="add__filter">
              <button onClick={() => setFilter(null)}>Default</button>
              <button
                onClick={() => setFilter({ property: "name", asc: true })}
              >
                a-Z
              </button>
              <button
                onClick={() => setFilter({ property: "name", asc: false })}
              >
                Z-a
              </button>
              <button
                onClick={() => setFilter({ property: "price", asc: false })}
              >
                Price Up
              </button>
              <button
                onClick={() => setFilter({ property: "price", asc: true })}
              >
                Price Down
              </button>
            </div>
          </div>

          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Text</th>
                  <th>Price</th>
                  <th>Control</th>
                </tr>
              </thead>
              <tbody>
                {apiData &&
                  apiData
                    .filter((item) =>
                      item.name.toLowerCase().includes(input.toLowerCase())
                    )
                    .sort((a, b) =>
                      filter !== null
                        ? (
                            filter.asc
                              ? myLowerCase(a[filter.property]) >
                                myLowerCase(b[filter.property])
                              : myLowerCase(a[filter.property]) <
                                myLowerCase(b[filter.property])
                          )
                          ? 1
                          : (
                              filter.asc
                                ? myLowerCase(b[filter.property]) >
                                  myLowerCase(a[filter.property])
                                : myLowerCase(b[filter.property]) <
                                  myLowerCase(a[filter.property])
                            )
                          ? -1
                          : 0
                        : 0
                    )
                    .map((item) => (
                      <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.text}</td>
                        <td>${item.price}</td>
                        <td>
                          <button onClick={() => deleteApiData(item._id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPage;
