import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../../../components/button/Button";
import { AddCompanyProfileData } from "../../../services/api/company";
import { getUserData } from "../../../services/authService";
import * as Yup from "yup";
import { useAlert } from "../../../context/AlertContext";

const PersonalInfoSection = () => {
  const { showAlert } = useAlert();
  const data = getUserData();
  const initialValues = {
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    mobileNumber: data.phoneNumber || "",
    overview: data.overview || "",
    field: data.field || "",
    dateOfEstablish: data.dateOfEstablish || "",
    country: data.country || "",
    city: data.city || "",
    area: data.area || "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    mobileNumber: Yup.string()
      .required("Mobile number is required")
      .matches(/^[0-9+\-() ]+$/, "Mobile number is not valid"),
    overview: Yup.string().required("Overview is required"),
    field: Yup.string().required("Field is required"),
    dateOfEstablish: Yup.string().required("Date of Establishment is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    area: Yup.string().required("Area is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const payload = {
        companyId: data.companyId,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.mobileNumber,
        overview: values.overview,
        field: values.field,
        dateOfEstablish: new Date(values.dateOfEstablish).toISOString(),
        country: values.country,
        city: values.city,
        area: values.area,
      };
      await AddCompanyProfileData(payload);
      showAlert("Company profile saved", "success");
      window.location.reload();
    } catch (error) {
      showAlert("Failed to save company profile", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-4 border-b border-border-color pb-6">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col">
            {/* Name Fields */}
            <div className="mt-6 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Company Name <span className="text-red-500 text-md">*</span>
              </label>
              <div className="flex gap-4 mt-5">
                {/* First Name */}
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm text-main-text"
                  >
                    First Name
                  </label>
                  <Field
                    name="firstName"
                    id="firstName"
                    className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Last Name */}
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm text-main-text"
                  >
                    Last Name
                  </label>
                  <Field
                    name="lastName"
                    id="lastName"
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

            {/* Mobile Number */}
            <div className="mt-6 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Mobile Number <span className="text-red-500 text-md">*</span>
              </label>
              <div className="flex gap-4 mt-5">
                <div className="w-1/2">
                  <label
                    htmlFor="mobileNumber"
                    className="block text-sm text-main-text"
                  >
                    Mobile Number
                  </label>
                  <Field
                    name="mobileNumber"
                    id="mobileNumber"
                    className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                  />
                  <ErrorMessage
                    name="mobileNumber"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="mt-6 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Overview <span className="text-red-500 text-md">*</span>
              </label>
              <div className="flex gap-4 mt-5">
                <div className="w-1/2">
                  <Field
                    name="overview"
                    id="overview"
                    className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                  />
                  <ErrorMessage
                    name="overview"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Field */}
            <div className="mt-6 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Field <span className="text-red-500 text-md">*</span>
              </label>
              <div className="flex gap-4 mt-5">
                <div className="w-1/2">
                  <Field
                    name="field"
                    id="field"
                    className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                  />
                  <ErrorMessage
                    name="field"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Date of Establish */}
            <div className="mt-6 w-full md:w-2/3">
              <label className="font-semibold text-2xl text-main-color">
                Date of Establishment{" "}
                <span className="text-red-500 text-md">*</span>
              </label>
              <div className="flex gap-4 mt-5">
                <div className="w-1/2">
                  <Field
                    name="dateOfEstablish"
                    id="dateOfEstablish"
                    type="date"
                    className="border border-dark-text rounded px-2 py-2 text-sm w-full bg-transparent focus:outline-none text-dark-text"
                  />
                  <ErrorMessage
                    name="dateOfEstablish"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mt-6 w-full">
              <label className="font-semibold text-2xl text-main-color">
                Location <span className="text-red-500 text-md">*</span>
              </label>
              <div className="flex gap-8 mt-2">
                {/* Country */}
                <div className="w-1/3 flex items-center">
                  <label
                    htmlFor="country"
                    className="block text-sm text-main-text mr-2"
                  >
                    Country
                  </label>
                  <Field
                    as="select"
                    name="country"
                    id="country"
                    className="border rounded p-2 w-full focus:outline-none bg-fill-bg-color text-sm"
                  >
                    <option value="">Choose</option>
                    <option value="us">Egypt</option>
                  </Field>
                  <ErrorMessage
                    name="country"
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
                    name="city"
                    id="city"
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
                    name="area"
                    id="area"
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
            <div className="mt-10 flex gap-4">
              <Button type="reset" label="Cancel" variant="secondary" />
              <Button
                type="submit"
                label={isSubmitting ? "Saving..." : "Save"}
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
