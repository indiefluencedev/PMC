import React, { useState } from "react";
import BreadCumb from "../Common/BreadCumb";
import data from "../../Data/team2.json";
import "react-image-gallery/styles/css/image-gallery.css";
import "./CustomGallery.css"; // Add custom styles here

const TeamDetails = () => {
    const teamMember = data[0]; // Using the first item's data as an example
    const subdata = teamMember.subdata[0];

    // Determine the keys and identify array and non-array values
    const keys = Object.keys(subdata);
    const arrayKeys = keys.filter((key) => Array.isArray(subdata[key]));
    const nonArrayKeys = keys.filter((key) => !Array.isArray(subdata[key]));

    // Flatten the data to create rows for array items
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

    // Prepare images for the gallery
    const [selectedImage, setSelectedImage] = useState(teamMember.image[0]);

    return (
        <div className="team-details">
            <BreadCumb Title="Team Details" />
            <section>
                <div className="cs_height_120 cs_height_lg_80"></div>
                <div className="cs_team_member_details">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-6 d-flex">
                                {/* Thumbnails on the left */}
                                <div className="thumbnail-list">
                                    {teamMember.image.map((img, index) => (
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
                                {/* Main Image */}
                                <div className="main-image">
                                    <img src={selectedImage} alt="Selected" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="cs_fs_48 cs_semibold cs_mb_8">{teamMember.Category}</h2>
                                <p className="cs_member_designation cs_accent_color cs_mb_30">Product Type</p>
                                <p className="cs_mb_25">
                                    Explore the products under the category {teamMember.Category} below.
                                </p>
                                <ul className="cs_mp_0 cs_member_info_list">
                                    <li>
                                        <span className="cs_fs_18 cs_medium cs_heading_font cs_heading_color">Products:</span>
                                        <span>{teamMember.subdata.length} Items</span>
                                    </li>
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
                                                    <td key={colIndex}>{row[key]}</td>
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

export default TeamDetails;
