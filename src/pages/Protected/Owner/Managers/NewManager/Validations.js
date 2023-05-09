import * as Yup from "yup";

const scheme = Yup.object().shape({
    email: Yup.string()
        

});

export default scheme;
