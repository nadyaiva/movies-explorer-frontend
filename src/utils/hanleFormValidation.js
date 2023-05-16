// import {useCallback, useEffect, useState} from "react";

// export function handleFormValidation(inputValues, initialFormState) {
//     const [isFormValid, setIsFormValid] = useState(initialIsFormValid);

//     const handleInputChange = (evt) => {
//         let inputElement = evt.target;
//         let name = inputElement.name;
//         let value = inputElement.value;
    
//         let validationMessage = '';
//         if (customValidators && customValidators[name] && value !== '') {
//           isValid = customValidators[name].validate(value);
//           validationMessage = !isValid ? customValidators[name].message : '';
//         } else {
//           isValid = inputElement.validity.valid;
//           validationMessage = inputElement.validationMessage;
//         }
// }