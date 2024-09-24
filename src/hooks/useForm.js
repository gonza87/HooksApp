import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formstate, setFormState] = useState(initialForm);
    
     
    
      const onInputchange = ({ target }) => {
        const { name, value } = target;
        setFormState({
          ...formstate,
          [name]: value,
        });
      };

      const onResetForm= () => {
        setFormState(initialForm);
      }

      return{
        ...formstate,
        formstate,
        onInputchange,
        onResetForm,
      }

}
