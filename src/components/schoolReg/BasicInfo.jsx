import React, { useState } from "react";
import InputField from "../InputField";
import InputDropDown from "../InputDropDown";
import InputToggle from "../InputToggle";
import InputImage from "../InputImage";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import InputToggleAdmin from "../InputToggleAdmin";

const BasicInfo = () => {
  const [formData, setFormData] = useState({
    organization: "",
    schoolName: "",
    udiseNumber: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
    status: false,
    contactPerson: "",
    contactNumber: "",
    contactEmail: "",
    schoolLogo: "", // This will hold the image file, adjust as per requirements
    moduleAccess: {
      administration: false,
      admission: false,
      attendance: false,
      communication: false,
      examination: false,
      fees: false,
      hostel: false,
      lms: false,
      timetable: false,
    },
  });

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleDropdownChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleCheckboxChange = (property, value) => {
    setFormData((prevData) => ({
      ...prevData,
      moduleAccess: {
        ...prevData.moduleAccess,
        [property]: value,
      },
    }));
  };

  const handleImageChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // You can perform other operations like sending data to API, etc.
  };

  const OrganizationOptions = ["Option1", "Option2"];
  const StateOptions = ["Delhi", "Mumbai", "nagpur", "Chennai"];
  const CityOptions = ["New Delhi", "Navi Mumbai", "Nasik"];

  return (
    <div className="w-full h-[calc(100vh-144px)] flex">
      <div className="w-2/3 h-full p-4 pb-10 overflow-y-scroll scrollbar-hide">
        <InputDropDown
          labelName={"Organization"}
          placeholder="Select"
          type="dropdown"
          options={OrganizationOptions}
          onChange={(value) => handleDropdownChange("organization", value)}
        />
        <InputField
          labelName={"School Name"}
          placeholder="Enter School Name"
          type="text"
          onChange={(value) => handleInputChange("schoolName", value)}
        />
        <InputField
          labelName={"U-DISE No"}
          placeholder="Enter U-DISE Number"
          type="text"
          onChange={(value) => handleInputChange("udiseNumber", value)}
        />
        <InputField
          labelName={"Address"}
          placeholder="Enter Address"
          type="text"
          onChange={(value) => handleInputChange("address", value)}
        />
        <InputDropDown
          labelName={"State"}
          placeholder="Select"
          type="dropdown"
          options={StateOptions}
          onChange={(value) => handleDropdownChange("state", value)}
        />
        <InputDropDown
          labelName={"City"}
          placeholder="Select"
          type="dropdown"
          options={CityOptions}
          onChange={(value) => handleDropdownChange("city", value)}
        />
        <InputField
          labelName={"Pincode"}
          placeholder="Enter Pincode"
          type="number"
          onChange={(value) => handleInputChange("pincode", value)}
        />
        <InputToggle
          labelName={"Status"}
          type="checkbox"
          property="status"
          onChange={(property, value) => handleCheckboxChange(property, value)}
        />
        <InputField
          labelName={"Contact Person"}
          placeholder="Enter Contact Person"
          type="text"
          onChange={(value) => handleInputChange("contactPerson", value)}
        />
        <InputField
          labelName={"Contact Number"}
          placeholder="Enter Contact Number"
          type="text"
          onChange={(value) => handleInputChange("contactNumber", value)}
        />
        <InputField
          labelName={"Contact Email"}
          placeholder="Enter Contact Email"
          type="text"
          onChange={(value) => handleInputChange("contactEmail", value)}
        />
        <InputImage
          labelName={"School Logo"}
          placeholder=""
          type="file"
          onChange={(value) => handleImageChange("schoolLogo", value)}
        />
        <button
          onClick={handleSubmit}
          className="border-0 outline-none bg-cyan-300 text-cyan-900 font-medium tracking-wide px-7 py-1.5 rounded"
        >
          Save
        </button>
      </div>
      <div className="w-1/3 h-full overflow-y-scroll scrollbar-hide p-4">
        <UserCircleIcon className="w-2/3 mx-auto" />
        <div>
          <strong className="tracking-wide">Module Access</strong>
          <InputToggleAdmin
            labelName={"Administration"}
            type="checkbox"
            property="administration"
            checked={formData.moduleAccess.administration}
            onChange={(property, value) =>
              handleCheckboxChange(property, value)
            }
          />
          <InputToggleAdmin
            labelName={"Admission"}
            type="checkbox"
            property="admission"
            checked={formData.moduleAccess.admission}
            onChange={(property, value) =>
              handleCheckboxChange(property, value)
            }
          />
          <InputToggleAdmin
            labelName={"Attendance"}
            type="checkbox"
            property="attendance"
            checked={formData.moduleAccess.attendance}
            onChange={(property, value) =>
              handleCheckboxChange(property, value)
            }
          />
          <InputToggleAdmin
            labelName={"Communication"}
            type="checkbox"
            property="communication"
            checked={formData.moduleAccess.communication}
            onChange={(property, value) =>
              handleCheckboxChange(property, value)
            }
          />
          <InputToggleAdmin
            labelName={"Examination"}
            type="checkbox"
            property="examination"
            checked={formData.moduleAccess.examination}
            onChange={(property, value) =>
              handleCheckboxChange(property, value)
            }
          />
          <InputToggleAdmin
            labelName={"Fees"}
            type="checkbox"
            property="fees"
            checked={formData.moduleAccess.fees}
            onChange={(property, value) =>
              handleCheckboxChange(property, value)
            }
          />
          <InputToggleAdmin
            labelName={"Hostel"}
            type="checkbox"
            property="hostel"
            checked={formData.moduleAccess.hostel}
            onChange={(property, value) =>
              handleCheckboxChange(property, value)
            }
          />
          <InputToggleAdmin
            labelName={"LMS"}
            type="checkbox"
            property="lms"
            checked={formData.moduleAccess.lms}
            onChange={(property, value) =>
              handleCheckboxChange(property, value)
            }
          />
          <InputToggleAdmin
            labelName={"Time Table"}
            type="checkbox"
            property="timetable"
            checked={formData.moduleAccess.timetable}
            onChange={(property, value) =>
              handleCheckboxChange(property, value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
