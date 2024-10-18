import{ ChangeEvent, useState } from "react";

export const useForm = <T extends Record<string, string | number>>(initForm: T) => {

    const [formState, setFormState] = useState<T>(initForm);


    const onInputChange = ({target}:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setFormState( initForm );
    }

    return {
        ...formState,
        onInputChange,
        onResetForm
    }
}