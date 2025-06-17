import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/button/Button";
import { getUserData } from "../../../services/authService";
import { useAlert } from "../../../context/AlertContext";
import { AddOrUpdateMemberProfileData } from "../../../services/api/member";

const PersonalInfoSection = () => {
  const { showAlert } = useAlert();

  const data = getUserData();

  const initialValues = {
    memberId: data?.memberId || "",
    firstName: data?.firstName || "",
    lastName: data?.lastName || "",
    phoneNumber: data?.phoneNumber || "",
    alternativeNumber: data?.alternativeNumber || "",
    genderId: data?.genderId?.toString() || "",
    dateOfBirth: data?.dateOfBirth
      ? new Date(data.dateOfBirth).toISOString().split("T")[0]
      : "",
    location: data?.location || "",
    city: data?.city || "",
    area: data?.area || "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phoneNumber: Yup.string()
      .matches(/^(\+20)?(10|11|12|15)\d{8}$/, "Invalid phone number.")
      .required("Phone Number is required"),
    alternativeNumber: Yup.string()
      .matches(/^(\+20)?(10|11|12|15)\d{8}$/, "Invalid phone number.")
      .notRequired()
      .transform((value) => (value ? value : "")),
    genderId: Yup.number()
      .required("Gender is required")
      .oneOf([1, 2], "Invalid gender"),
    dateOfBirth: Yup.date().required("Date of Birth is required"),
    location: Yup.string().required("Nationality is required"),
    city: Yup.string().required("City is required"),
    area: Yup.string().required("Area is required"),
  });

  const handleSubmit = async (values, { setSubmitting , resetForm}) => {
    try {
      const res = await AddOrUpdateMemberProfileData(values);
      console.log("res is ", res.data);
      resetForm({ values: res.data });
      showAlert("Profile updated successfully!", "success");
      window.location.reload();
    } catch (error) {
      console.error("Failed to update profile: " + (error.message || error));
      showAlert("Failed to update profile", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-4 border-b border-border-color pb-6">
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col">
            {/* First Name & Last Name */}
            <div className="mt-6 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Your Name <span className="text-red-500 text-md">*</span>
              </label>
              <div className="flex gap-4 mt-5">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm text-main-text"
                  >
                    First Name
                  </label>
                  <Field
                    id="firstName"
                    name="firstName"
                    className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm text-main-text"
                  >
                    Last Name
                  </label>
                  <Field
                    id="lastName"
                    name="lastName"
                    className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Gender */}
            <div className="mt-6 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Gender <span className="text-red-500 text-md">*</span>
              </label>
              <div className="flex gap-4 w-full mt-5">
                <label className="flex items-center py-2 px-2 border border-dark-text rounded-md w-full cursor-pointer">
                  <Field
                    type="radio"
                    name="genderId"
                    value="1"
                    className="hidden peer"
                  />
                  <span className="w-4 h-4 border border-dark-text rounded-full peer-checked:bg-main-color mr-3"></span>
                  <span className="text-sm">Male</span>
                </label>
                <label className="flex items-center py-2 px-2 border border-dark-text rounded-md w-full cursor-pointer">
                  <Field
                    type="radio"
                    name="genderId"
                    value="2"
                    className="hidden peer"
                  />
                  <span className="w-4 h-4 border border-dark-text rounded-full peer-checked:bg-main-color mr-3"></span>
                  <span className="text-sm">Female</span>
                </label>
              </div>
              <ErrorMessage
                name="genderId"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Phone Numbers */}
            <div className="mt-6 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Mobile Number <span className="text-red-500 text-md">*</span>
              </label>
              <div className="flex gap-4 mt-5">
                <div className="w-1/2">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm text-main-text"
                  >
                    Mobile Number
                  </label>
                  <Field
                    id="phoneNumber"
                    name="phoneNumber"
                    className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="alternativeNumber"
                    className="block text-sm text-main-text"
                  >
                    Alternative Number
                  </label>
                  <Field
                    id="alternativeNumber"
                    name="alternativeNumber"
                    className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                  />
                  <ErrorMessage
                    name="alternativeNumber"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Date of Birth */}
            <div className="mt-4 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Date of Birth <span className="text-red-500 text-md">*</span>
              </label>
              <Field
                type="date"
                name="dateOfBirth"
                max={new Date().toISOString().split("T")[0]}
                className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text mt-2"
              />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Location (Nationality, City, Area) */}
            <div className="mt-6 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Location <span className="text-red-500 text-md">*</span>
              </label>

              <div className="flex gap-8 mt-2">
                {/* Nationality */}
                <div className="w-1/3 flex items-center">
                  <label
                    htmlFor="location"
                    className="block text-sm text-main-text mr-2"
                  >
                    Nationality
                  </label>
                  <Field
                    as="select"
                    id="location"
                    name="location"
                    className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color text-sm"
                  >
                    <option value="">Choose</option>
                    <option value="Egyptian">Egyptian</option>
                  </Field>
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* City */}
                <div className="w-1/3 flex items-center">
                  <label
                    htmlFor="city"
                    className="block text-sm text-main-text mr-2"
                  >
                    City
                  </label>
                  <Field
                    as="select"
                    id="city"
                    name="city"
                    className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color text-sm"
                  >
                    <option value="">Choose</option>
                    <option value="alexandria">Alexandria</option>
                    <option value="aswan">Aswan</option>
                    <option value="asyut">Asyut</option>
                    <option value="beheira">Beheira</option>
                    <option value="beni_suef">Beni Suef</option>
                    <option value="cairo">Cairo</option>
                    <option value="dakahlia">Dakahlia</option>
                    <option value="damietta">Damietta</option>
                    <option value="fayoum">Fayoum</option>
                    <option value="gharbia">Gharbia</option>
                    <option value="giza">Giza</option>
                    <option value="ismailia">Ismailia</option>
                    <option value="kafr_el_sheikh">Kafr El Sheikh</option>
                    <option value="luxor">Luxor</option>
                    <option value="matrouh">Matrouh</option>
                    <option value="minya">Minya</option>
                    <option value="monufia">Monufia</option>
                    <option value="new_valley">New Valley</option>
                    <option value="north_sinai">North Sinai</option>
                    <option value="port_said">Port Said</option>
                    <option value="qalyubia">Qalyubia</option>
                    <option value="qena">Qena</option>
                    <option value="red_sea">Red Sea</option>
                    <option value="Sharqia">Sharqia</option>
                    <option value="sohag">Sohag</option>
                    <option value="south_sinai">South Sinai</option>
                    <option value="suez">Suez</option>
                  </Field>
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Area */}
                <div className="w-1/3 flex items-center">
                  <label
                    htmlFor="area"
                    className="block text-sm text-main-text mr-2"
                  >
                    Area
                  </label>
                  <Field
                    as="select"
                    id="area"
                    name="area"
                    className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color text-sm"
                  >
                    <option value="">Choose</option>
                    <option value="zamalek">Zamalek</option>
                    <option value="maadi">Maadi</option>
                    <option value="heliopolis">Heliopolis</option>
                    <option value="dokki">Dokki</option>
                    <option value="haram">Al Haram</option>
                    <option value="6th_of_october">6th of October</option>
                    <option value="manshiya">Manshiya</option>
                    <option value="sidi_gaber">Sidi Gaber</option>
                    <option value="montaza">Montaza</option>
                    <option value="banha">Banha</option>
                    <option value="qalyub">Qalyub</option>
                    <option value="shubra_el_kheima">Shubra El Kheima</option>
                    <option value="west_asyut">West Asyut</option>
                    <option value="el_hamraa">El Hamraa</option>
                    <option value="el_fath">El Fath</option>
                    <option value="al_awamiya">Al Awamiya</option>
                    <option value="el_karnak">El Karnak</option>
                    <option value="central_luxor">Central Luxor</option>
                  </Field>
                  <ErrorMessage
                    name="area"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-4 w-full md:w-2/3">
              <Button type="reset" label="Cancel" variant="secondary" />
              <Button
                type="submit"
                label={isSubmitting ? "Saving…" : "Save"}
                variant="primary"
                disabled={isSubmitting}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfoSection;
