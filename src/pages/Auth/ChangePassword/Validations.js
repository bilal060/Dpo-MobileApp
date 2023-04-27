import * as Yup from "yup";

const scheme = Yup.object().shape({
   

    password: Yup.string()
        .required("Please enter your password.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        ,
    matchPassword: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),

});

export default scheme;
