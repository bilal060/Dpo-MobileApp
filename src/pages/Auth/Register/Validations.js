import * as Yup from "yup";

const scheme = Yup.object().shape({
    email: Yup.string()
        .required("Please enter email address")

        .email("Please enter valid email address"),

        bio: Yup.string()
        .required("Please enter email address"),

        
        phone: Yup.string()
        .test("checkPhoneNumber", (value, obj) =>
            validateNumberRegex(regex, value || "", obj)
        )
        .required("Phone number is required.")

});

export default scheme;
