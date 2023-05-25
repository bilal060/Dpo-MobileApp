import * as Yup from "yup";

const scheme = Yup.object().shape({
   
        CfullName: Yup.string()
        .required("Please enter company name"),
        cLicenseNo: Yup.string()
        .required("Please enter company licenseNo"), 
        cAddress: Yup.string()
        .required("Please enter company address"),
        phone: Yup.string()
        // .test("checkPhoneNumber", (value, obj) =>
        //     validateNumberRegex(regex, value || "", obj)
        // )
        .required("Phone number is required."),

});

export default scheme;
