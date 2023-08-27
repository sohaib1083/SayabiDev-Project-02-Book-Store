import React from "react";

const AddBooks = () => {
  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "91.5vh" }}
    >
      <div className="container p-4">
        <div className="mb-3">
          <label htmlFor="bookName" className="form-label text-white">
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="bookName"
            placeholder="Enter Book Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label text-white">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Enter Author"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="authorName" className="form-label text-white">
            Author Name
          </label>
          <input
            type="text"
            className="form-control"
            id="authorName"
            placeholder="Enter Author Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label text-white">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter Description of Book"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageURL" className="form-label text-white">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="imageURL"
            placeholder="Enter The URL of Image"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label text-white">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter The Price"
          />
        </div>
        <button className="btn btn-success">Submit</button>
      </div>
    </div>
  );
};

export default AddBooks;
