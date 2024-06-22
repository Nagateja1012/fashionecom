import {FormInputLabel, Input, Group} from './form.style'

const Form = ({label, ...otherProps}) => {
    return(
        <Group>
            <Input {...otherProps} />
            {label && 
            (
                <FormInputLabel $shrink= {otherProps.value.length}> {label} </FormInputLabel>
            )
            }
        </Group>
    )

}

export default Form;