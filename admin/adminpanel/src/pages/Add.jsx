import React, { useState } from "react";
import { assets } from "../assets/assets";
import Swal from 'sweetalert2';

const Add = () => {
  const [image1, setImg1] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");

  const [width, setWidth] = useState([]);
  const [height, setHeight] = useState([]);

  const onSumbitHandler = async (e) => {
    e.preventDefault();

    const product = {
      name,
      description,
      price,
      category,
      subCategory,
      width,
      height,
      images: [
        image1 ? URL.createObjectURL(image1) : null,
      ],
    };
  
    console.log(product);

    await Swal.fire({
      title: 'Success!',
      text: 'Item added successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  
    setName("");
    setDescription("");
    setPrice("");
    setCategory("Statues");
    setSubCategory("Classic");
    setWidth("");
    setHeight("");
    setImg1(false);
  }

  return (
    <form onSubmit={onSumbitHandler} className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20 cursor-pointer"
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
            />
            <input
              onChange={(e) => setImg1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div>
        <p className="mb-2">Product Size</p>
        <div className="flex items-center space-x-2">
        <input
          onChange={(e) => setWidth(e.target.value)}
          value={width}
          className="w-full max-w-[220px] px-3 py-2"
          type="text"
          placeholder="Width"
          required
        />
        <span className="text-sm font-bold">X</span>
        <input
          onChange={(e) => setHeight(e.target.value)}
          value={height}
          className="w-full max-w-[220px] px-3 py-2"
          type="text"
          placeholder="Height"
          required
        />
        <span className="text-sm font-bold">CM</span>
        </div>
        
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write content here"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-3 py-2"
          >
            <option value="Statues">Statues</option>
            <option value="Photography">Photography</option>
            <option value="Paints">Paints</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="w-full px-3 py-2"
          >
            <option value="Topwear">Classic</option>
            <option value="Modern">Modern</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25"
          />
        </div>
      </div>

      <button type="sumbit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Add;
