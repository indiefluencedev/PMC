import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BreadCumb from "../Common/BreadCumb";
import data from "../../Data/products2.json";
import "react-image-gallery/styles/css/image-gallery.css";
import "./CustomGallery.css";
import '../TeamDetails/ProductDetails.css'

const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const product = data[id]; // Fetch the specific product
    const subdata = product.subdata[0];

    const keys = Object.keys(subdata);
    const arrayKeys = keys.filter((key) => Array.isArray(subdata[key]));
    const nonArrayKeys = keys.filter((key) => !Array.isArray(subdata[key]));

    // Flatten data to create table rows
    const rows = subdata[arrayKeys[0]].map((_, index) => {
        const row = {};
        arrayKeys.forEach((key) => {
            row[key] = subdata[key][index];
        });
        nonArrayKeys.forEach((key) => {
            row[key] = subdata[key];
        });
        return row;
    });

    const [selectedImage, setSelectedImage] = useState(product.image[0]);

    return (
        <div className="team-details">
            <BreadCumb Title="Product Details" />
            <section>
                <div className="cs_height_120 cs_height_lg_80"></div>
                <div className="cs_team_member_details">
                    <div className="container">
                        <div className="row align-items-start">
                            {/* Images */}
                            <div className="col-lg-6 d-flex">
                                <div className="thumbnail-list">
                                    {product.image.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            className={`thumbnail ${
                                                selectedImage === img ? "active" : ""
                                            }`}
                                            onClick={() => setSelectedImage(img)}
                                        />
                                    ))}
                                </div>
                                <div className="main-image">
                                    <img src={selectedImage} alt="Selected" />
                                </div>
                            </div>
                            {/* Product Details */}
                            <div className="col-lg-6">
                                <h2 className="cs_fs_48 cs_semibold cs_mb_8">{product.Category}</h2>
                                <p className="cs_member_designation cs_accent_color cs_mb_30">{product.Product_type}</p>
                                <p className="cs_mb_25">{product.Description}</p>
                                <h4 className="cs_fs_24 cs_medium cs_heading_font cs_heading_color mt-4">
                                    Characteristics:
                                </h4>
                                <ul className="cs_characteristics">
                                    {product.Characteristics.map((char, index) => (
                                        <li key={index} className="cs_characteristic_item">
                                            {char}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="cs_height_72 cs_height_lg_72"></div>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="cs_fs_30 cs_semibold cs_mb_25">Products Table</h3>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            {keys.map((key, index) => (
                                                <th key={index}>{key}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rows.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {keys.map((key, colIndex) => (
                                                    <td key={colIndex}>
                                                        {Array.isArray(row[key])
                                                            ? row[key].toString() // Display array as string
                                                            : row[key]}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="cs_height_120 cs_height_lg_80"></div>
        </div>
    );
};

export default ProductDetails;
