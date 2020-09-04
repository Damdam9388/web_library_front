`ButtonSubmit.js`

Composant du bouton normal de soumission des formulaires
title = le titre du bouton qui apparait tant qu'on pas cliqué dessus
load = le state de chargement qui provient du composant parent et qui est a false par defaut
du coup le bouton montre le titre si load = false et le composant circle(loader) si load = true

```php
const ButtonSubmit = ({title, load}) => {
    return <Button
        type="submit"
        color="white"
        rightIcon={load ? "" : "arrow-forward"}
        bg="#0d234b"
        variant="red"
        width="full"
        border="transparent"
        className="mt-5"
        _hover={{bg: "#4a9bd1"}}
    >
        {load ? <Circle/> : title}
    </Button>;
};
```


`InputFormControl.js`

Ce composant est une sorte de formulaire général qu'on peut utiliser ailleurs sans à avoir à répéter le même formulaire partout, là on va juste faire appel à <InputFormControl> et on renseigne les propriétés par la valeurs volus.

```php
const InputFormControl = ({
  id,
  name,
  label,
  placeholder,
  type = "text",
  isRequired = true,
  iconName = null,
  iconColor = "black",
  rightElement = null,
  isDisabled = false,
  // opérateur spread
  ...additionalInputProperties
}) => (
  <FormControl isRequired={isRequired}>
    <FormLabel htmlFor={id}>{label}</FormLabel>
    <InputGroup>
      {iconName && (
        <InputLeftElement
          children={<Icon name={iconName} color={iconColor} />}
        />
      )}

      <Input
        variant="outline"
        type={type}
        name={name}
        id={id}
        className="form-control"
        placeholder={placeholder}
        {...additionalInputProperties}
      />

      {rightElement && (
        <InputRightElement width="4.5rem">{rightElement}</InputRightElement>
      )}
    </InputGroup>
  </FormControl>
);
```

``SelectFormControl.js`

Ce composant a le même but, la refacto.
{children} signifie au composant qu'on va passer un autre composant à l'intérieur de ce dernier.

```php
const SelectFormControl = ({children, label}) => {
    return (
        <FormControl isRequired>
            <FormLabel htmlFor={label}>{label}</FormLabel>
            {children}
        </FormControl>
    );
};
```
 
