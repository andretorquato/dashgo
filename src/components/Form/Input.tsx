import { FormControl, FormLabel, Input as ChackraInput, InputProps as ChackraInputsProps } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChackraInputsProps { 
  name: string;
  label?: string; 
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
  ({ name, label, ...rest }, ref) => {
  return (
    <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChackraInput
              name={name}
              id={name}
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
              ref={ref}
              {...rest}
            />
          </FormControl>
  );
}

export const Input = forwardRef(InputBase);